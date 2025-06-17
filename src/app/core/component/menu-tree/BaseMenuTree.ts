import {TreeNode} from "../../tree-node/ITreeNode";
import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {TreeViewService} from "../../service/tree-view/TreeViewService";
import {Subscription} from "rxjs";
import {CookieUtil} from "../../util/CookieUtil";

@Component({
  selector: 'abstract-menu-tree',
  standalone: true,
  template: ``
})
export abstract class BaseMenuTree implements OnInit, OnDestroy {
  id: string = this.constructor.name;
  treeViewService = inject(TreeViewService);

  private subscriptions: Subscription[] = []

  abstract height: number;
  abstract treeNode: TreeNode | null;

  ngOnInit(): void {
    this.treeViewService.selectedItem = CookieUtil.get("treeView");
    this.treeViewService.arrowStatus = CookieUtil.get("treeViewArrow");

    // subscribe for treeview selected item
    this.subscriptions.push(this.treeViewService.getData(this.id).subscribe(data => {
      CookieUtil.set("treeView", data.toString());
    }));

    // subscribe for treeview arrow
    this.subscriptions.push(this.treeViewService.getData(`${this.id}-Arrow`).subscribe(data => {
      const arrowId = data;
      this.subscriptions.push(this.treeViewService.getData(`${this.id}-${arrowId}`).subscribe(data => {

        CookieUtil.update("treeViewArrow", arrowId.toString(), data.toString());
      }));
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
