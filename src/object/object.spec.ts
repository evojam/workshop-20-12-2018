import './object'

describe('Object', () => {
  it('should return top level values', () => {
    const obj = {a: 1, b: 2, c: 3}
    expect([...obj]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('should return nested values too', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: 3
      },
      e: {
        f: {
          g: 4,
          h: 5,
          i: 6
        },
        j: 7,
        k: 8
      }
    }
    expect([...obj]).toEqual([
      ['a', 1],
      ['b', [
        ['c', 2],
        ['d', 3]
      ]],
      ['e', [
        ['f', [
          ['g', 4],
          ['h', 5],
          ['i', 6]
        ]],
        ['j', 7],
        ['k', 8]
      ]]
    ])
  })
})