import {AbstractTreeNode} from "./AbstractTreeNode";
import {TreeNode} from "./ITreeNode";

export class BaseTreeNode extends AbstractTreeNode {
  constructor() {
    super();
  }

  createTreeNode(): TreeNode | null {
    return null;
  }
}
