import { ListEmpty, ListNode } from './list'

describe('List', () => {

  describe('ListEmpty', () => {
    it('constructor representing empty list', () => {
      expect(() => {
        new ListEmpty()
      }).not.toThrow()
    })

    it('should be iterable', () => {
      expect([...new ListEmpty()]).toEqual([])
    })
  })

  describe('ListNode', () => {
    it('should have constructor representing non empty list', () => {
      expect(() => {
        new ListNode(1, new ListEmpty())
      }).not.toThrow()
    })

    it('should be iterable', () => {
      expect([...new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, new ListEmpty()))))]).toEqual([4,3,2,1])
    })
  })
})