import {ITreeNode, TreeNode} from "./ITreeNode";

export abstract class AbstractTreeNode implements ITreeNode {
  private _currentId = 0;
  private _searchPath: number[] = [];

  protected abstract createTreeNode(rootId: number, nodeLevel: number): TreeNode | null;

  protected get Id() {
    return this._currentId;
  }

  protected increaseId() {
    this._currentId++;
  }

  create(rootId: number, nodeLevel: number): TreeNode | null {
    this._currentId = 0;
    return this.createTreeNode(rootId, nodeLevel)
  }

  findNodePath(root: TreeNode, targetId: number, path: number[] = []): number[] {
    this._searchPath = [];
    if (this.search(root, targetId, path)) {
      return this._searchPath;
    }

    return []
  }

  hasChildren(node: TreeNode): boolean {
    let items = node.children?.items ? node.children.items : []
    let nodes = node.children?.nodes ? node.children.nodes : [];
    return items.length > 0 || nodes.length > 0;
  }

  private search(root: TreeNode, targetId: number, path: number[]): boolean {
    path.push(root.id);

    if (root.id === targetId) {
      path.pop()
      this._searchPath = path;
      return true
    }

    if (this.hasChildren(root)) {
      for (let item of root.children.items) {
        if (item.id === targetId) {
          this._searchPath = path;
          return true
        }
      }

      for (let node of root.children.nodes) {
        if (this.search(node, targetId, path)) {
          return true
        }
      }
    }

    path.pop();
    return false;
  };
}
