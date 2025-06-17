export interface ITreeNode {
  create(rootId: number, nodeLevel: number): TreeNode | null;

  findNodePath(root: TreeNode, targetId: number, path: []): number[];
}

export type NodeItem = {
  object: object | null,
  id: number
  name: string,
  nodeLevel: number
}

export type TreeNode = {
  object: object | null,
  id: number,
  name: string,
  nodeLevel: number,
  children: { nodes: TreeNode[], items: NodeItem[] }
}
