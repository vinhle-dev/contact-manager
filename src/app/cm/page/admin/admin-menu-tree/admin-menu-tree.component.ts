import {Component, inject} from '@angular/core';
import {Group} from "../../../../core/data/entity/Group";
import {User} from "../../../../core/data/entity/User";
import {Router} from "@angular/router";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {GroupTreeNode} from "../../../../core/tree-node/GroupTreeNode";
import {TreeNode} from "../../../../core/tree-node/ITreeNode";
import {BaseMenuTree} from "../../../../core/component/menu-tree/BaseMenuTree";

@Component({
  selector: 'admin-menu-tree',
  templateUrl: './admin-menu-tree.component.html'
})
export class AdminMenuTreeComponent extends BaseMenuTree {
  height: number = 300;
  treeNode: TreeNode | null = new GroupTreeNode().create();
  router = inject(Router);

  onClick(item: Group | User) {
    if (item instanceof Group && item.id) {
      NavigationUtil.skipLocationChange(this.router, `/ab/admin/group/${item.id}`);
    }

    if (item instanceof User && item.id) {
      NavigationUtil.skipLocationChange(this.router, `/ab/admin/user/${item.id}`);
    }
  }
}
