import {
  getTheBestMove,
} from '../bestMove'

import {
  movesWithBroom,
  commonCardsWithBroom,
  movesWithSevenGold,
  scenarioForMovesWithSevens,
  scenarioForBestMoveWithSevens,
  scenarioForMoveWithGold,
  scenarioForMoveWithMoreCards,
} from './index.mocks'

describe('getTheBestMove', () => {
  it('should return empty move', () => {
    const bestMove = getTheBestMove([{}])
    expect(bestMove).toEqual({})
  })

  it('should choose the move with the gold seven', () => {
    const bestMove = getTheBestMove(movesWithSevenGold)
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 3, suit: 'gold' },
        { value: 5, suit: 'gold' },
      ],
      player: { value: 7, suit: 'gold' }
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move to achieve a broom', () => {
    const bestMove = getTheBestMove(movesWithBroom, commonCardsWithBroom)
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 3, suit: 'gold' },
        { value: 5, suit: 'gold' },
      ],
      player: { value: 7, suit: 'wood' }
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the best move when there are several brooms', () => {
    const bestMove = getTheBestMove(movesWithSevenGold, commonCardsWithBroom)
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 3, suit: 'gold' },
        { value: 5, suit: 'gold' },
      ],
      player: { value: 7, suit: 'gold' }
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move with sevens', () => {
    const { moves, commonCards } = scenarioForMovesWithSevens
    const bestMove = getTheBestMove(moves, commonCards)
    const expectedMove = {
      common: [
        { value: 1, suit: 'wood' },
        { value: 7, suit: 'wood' },
      ],
      player: { value: 7, suit: 'sword' }
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the best move with sevens', () => {
    const { moves, commonCards } = scenarioForBestMoveWithSevens
    const bestMove = getTheBestMove(moves, commonCards)
    const selectedMove = {
      common: [
        { value: 1, suit: 'wood' },
        { value: 7, suit: 'wood' },
      ],
      player: { value: 7, suit: 'sword' }
    }
    expect(bestMove).toEqual(selectedMove)
  })

  it('should choose the move with gold', () => {
    const { moves, commonCards } = scenarioForMoveWithGold
    const bestMove = getTheBestMove(moves, commonCards)
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 6, suit: 'gold' },
      ],
      player: { value: 8, suit: 'sword' }
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move with more cards', () => {
    const { moves, commonCards } = scenarioForMoveWithMoreCards
    const bestMove = getTheBestMove(moves, commonCards)
    const expectedMove = {
      common: [
        { value: 3, suit: 'wood' },
        { value: 4, suit: 'wood' },
        { value: 2, suit: 'wood' },
      ],
      player: { value: 6, suit: 'sword' }
    }
    expect(bestMove).toEqual(expectedMove)
  })
})

