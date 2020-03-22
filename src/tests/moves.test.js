import {
  getAllPossibleMoves,
} from '../moves'

import {
  playerCards,
  combinations,
} from './index.mocks'

describe('getAllPossibleMoves', () => {
  it('should return no moves', () => {
    const moves = getAllPossibleMoves(playerCards, [])
    expect(moves).toEqual([])
  })
  it('should return no moves', () => {
    const moves = getAllPossibleMoves(playerCards, combinations)
    const expectedMoves = [
      {
        common: [
          { value: 1, suit: 'gold' },
          { value: 3, suit: 'gold' },
          { value: 5, suit: 'gold' },
        ],
        player: { value: 6, suit: 'gold' }
      },
      {
        common: [
          { value: 1, suit: 'gold' },
          { value: 3, suit: 'gold' },
          { value: 5, suit: 'gold' },
        ],
        player: { value: 6, suit: 'sword' }
      }
    ]
    expect(moves).toEqual(expectedMoves)
  })
})