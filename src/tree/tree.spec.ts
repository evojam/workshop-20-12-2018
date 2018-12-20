import { Leaf, TreeNode, TreeTraversalOrder } from './tree'

describe('Tree', () => {
  describe('Leaf', () => {
    it('constructor representing empty tree', () => {
      expect(() => {
        new Leaf()
      }).not.toThrow()
    })

    it('should be iterable', () => {
      expect([...new Leaf()]).toEqual([])
    })
  })

  describe('TreeNode', () => {
    it('constructor representing non empty tree', () => {
      expect(() => {
        new TreeNode(0, new Leaf(), new Leaf())
      }).not.toThrow()
    })

    const tree = new TreeNode(
      2,
      new TreeNode(1, new Leaf(), new Leaf()),
      new TreeNode(3, new Leaf(), new Leaf()))

    it('should be iterable', () => {
      expect([...tree]).toEqual([1, 2, 3])
    })

    it('should define pre-order iterator', () => {
      expect([...tree[Symbol.iterator](TreeTraversalOrder.PreOrder)]).toEqual([2, 1, 3])
    })

    it('should define in-order iterator', () => {
      expect([...tree[Symbol.iterator](TreeTraversalOrder.InOrder)]).toEqual([1, 2, 3])
    })

    it('should define post-order iterator', () => {
      expect([...tree[Symbol.iterator](TreeTraversalOrder.PostOrder)]).toEqual([1, 3, 2])
    })
  })
})