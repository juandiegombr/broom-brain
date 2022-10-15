import { getMoveToPlay } from '../bestMove'

import {
  scenarioWithSevenGold,
  scenarioWithBroom,
  scenarioWithSevens,
  scenarioWithBestSevens,
  scenarioWithGold,
  scenarioWithMoreCards,
} from './index.mocks'

describe('getTheBestMove', () => {
  it('should return empty move', () => {
    const bestMove = getMoveToPlay([], [])
    expect(bestMove).toBeNull()
  })

  it('should choose the move with the gold seven', () => {
    const { playerCards, commonCards } = scenarioWithSevenGold
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const expectedMove = {
      common: [
        { value: 3, suit: 'gold' },
        { value: 5, suit: 'gold' },
      ],
      player: { value: 7, suit: 'gold' },
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move to achieve a broom', () => {
    const { playerCards, commonCards } = scenarioWithBroom
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 3, suit: 'gold' },
        { value: 5, suit: 'gold' },
      ],
      player: { value: 6, suit: 'wood' },
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move with sevens', () => {
    const { playerCards, commonCards } = scenarioWithSevens
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const expectedMove = {
      common: [
        { value: 1, suit: 'wood' },
        { value: 7, suit: 'wood' },
      ],
      player: { value: 7, suit: 'sword' },
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the best move with sevens', () => {
    const { playerCards, commonCards } = scenarioWithBestSevens
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const selectedMove = {
      common: [
        { value: 1, suit: 'wood' },
        { value: 7, suit: 'wood' },
      ],
      player: { value: 7, suit: 'sword' },
    }
    expect(bestMove).toEqual(selectedMove)
  })

  it('should choose the move with gold', () => {
    const { playerCards, commonCards } = scenarioWithGold
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const expectedMove = {
      common: [
        { value: 1, suit: 'gold' },
        { value: 6, suit: 'gold' },
      ],
      player: { value: 8, suit: 'sword' },
    }
    expect(bestMove).toEqual(expectedMove)
  })

  it('should choose the move with more cards', () => {
    const { playerCards, commonCards } = scenarioWithMoreCards
    const bestMove = getMoveToPlay({ playerCards, commonCards })
    const expectedMove = {
      common: [
        { value: 4, suit: 'wood' },
        { value: 2, suit: 'wood' },
        { value: 2, suit: 'sword' },
        { value: 2, suit: 'heart' },
      ],
      player: { value: 5, suit: 'sword' },
    }
    expect(bestMove).toEqual(expectedMove)
  })
})
