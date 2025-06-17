import {NodeItem, TreeNode} from "./ITreeNode";
import {GroupService} from "../service/data/group.service";
import {AbstractTreeNode} from "./AbstractTreeNode";
import {inject} from "@angular/core";

export class GroupTreeNode extends AbstractTreeNode {
  groupService = inject(GroupService);

  override create(rootId = 1, nodeLevel = 0) {
    return super.create(rootId, nodeLevel);
  }

  createTreeNode(rootId: number, nodeLevel: number) {
    const group = this.groupService.getById(rootId);
    const id = this.Id;
    if (group) {
      let nodes: TreeNode[] = [];
      this.groupService.getSubGroup(rootId).forEach(g => {
        this.increaseId();
        const node = this.createTreeNode(g.id!, nodeLevel + 1)
        if (node) {
          nodes.push(node);
        }
      });

      let items: NodeItem[] = [];
      this.groupService.getSubUser(rootId).forEach(u => {
        this.increaseId();
        items.push({
          id: this.Id,
          name: u.name!,
          nodeLevel: nodeLevel,
          object: u
        })
      });

      return {
        id: id,
        name: group.name!,
        nodeLevel: nodeLevel,
        object: group,
        children: {
          nodes: nodes,
          items: items
        }
      }
    }

    return null;
  }
}
