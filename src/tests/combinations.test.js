import {
  getAllPossibleCombinations,
} from '../combinations'

describe('getAllPossibleCombinations', () => {
  it('should return no combinations', () => {
    const combinations = getAllPossibleCombinations([])
    expect(combinations).toEqual([])
  })
  it('should return all the combinations', () => {
    const combinations = getAllPossibleCombinations([1, 2, 3])
    const expectedCombinations = [
      [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]
    ]
    expect(combinations).toEqual(expectedCombinations)
  })
})