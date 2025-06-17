import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TreeNode} from "../../../../../core/tree-node/ITreeNode";
import {BaseTreeNode} from "../../../../../core/tree-node/BaseTreeNode";
import {TreeViewService} from "../../../../../core/service/tree-view/TreeViewService";

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html'
})
export class TreeViewComponent implements AfterViewInit, OnDestroy {
  @Input({required: true}) id!: string;
  @Input({required: true}) treeNode!: TreeNode;
  @Input() onClick!: (...args: any[]) => void;

  protected baseTreeNode: BaseTreeNode
  private subscriptions: Subscription[] = [];
  arrowStatus = false;
  selectedItem!: number | null;

  constructor(private treeViewService: TreeViewService,
              private cdr: ChangeDetectorRef) {
    this.baseTreeNode = new BaseTreeNode();
  }

  ngAfterViewInit() {
    const nodeId = this.treeNode.id;
    this.subscribeService(nodeId);

    this.checkArrowStatus(nodeId);

    this.checkSelectedItem(nodeId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onClickArrow(event: Event, nodeId: string) {
    event.stopPropagation();
    this.arrowStatus = !this.arrowStatus;
    // Send arrow id
    this.treeViewService.sendData(`${this.id}-Arrow`, nodeId);
    // Update arrow status
    this.treeViewService.sendData(`${this.id}-${nodeId}`, this.arrowStatus);
  }

  onClickItem(element: object, nodeId: string) {
    // Update sidebar status
    this.treeViewService.sendData(`${this.id}`, nodeId);
    // Call onClick function
    if (this.onClick) {
      this.onClick(element);
    }
  }

  private checkArrowStatus(nodeId: number) {
    // Check arrow status in cookie first time
    const arrowStatus = this.treeViewService.getArrowStatus(nodeId.toString())
    if (arrowStatus === "") {
      // Default value of root arrow = true
      if (nodeId === 0) {
        this.treeViewService.sendData(`${this.id}-${nodeId}`, true);
      }

    } else {
      // Only send status if true
      if (arrowStatus === 'true') {
        this.treeViewService.sendData(`${this.id}-${nodeId}`, true);
      }
    }
  }

  private checkSelectedItem(nodeId: number) {
    // Check selected item in cookie first time
    const selectedItem = this.treeViewService.selectedItem;
    if (selectedItem !== "") {
      const selectedId = Number(selectedItem);
      // Only update selected item for component with corresponding id
      if (selectedId === nodeId ||
        this.treeNode.children.items.map(i => i.id).find(id => id === selectedId)) {
        // Update selected item
        this.treeViewService.sendData(this.id, selectedId);
      }

      // Always start from root node
      if (this.treeNode.id == 0) {
        // Get path of node
        this.baseTreeNode.findNodePath(this.treeNode, selectedId).forEach(id => {
          // Send arrow id
          this.treeViewService.sendData(`${this.id}-Arrow`, id);
          // Update arrow status
          this.treeViewService.sendData(`${this.id}-${id}`, true);
        })
      }
    }
  }

  private subscribeService(nodeId: number) {
    // subscribe for treeview selected item
    this.subscriptions.push(this.treeViewService.getData(this.id).subscribe(data => {
      if (typeof data === "number") {
        this.selectedItem = data;
        this.cdr.detectChanges()
      }

      if (data === null) {
        // Reset select Item
        this.selectedItem = null;
      }
    }));

    // subscribe for treeview arrow status
    this.subscriptions.push(this.treeViewService.getData(`${this.id}-${nodeId}`).subscribe(data => {
        if (typeof data === "boolean") {
          this.arrowStatus = data;
          this.cdr.detectChanges()
        }
      })
    );
  }
}
