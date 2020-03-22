import { sortByMostValuable } from '../utils/cardSort'
import { getCardToPass } from '../pass'

import { passScenario } from './index.mocks'

it('should select a card the best card lower than 5', () => {
  const { emptyDeck } = passScenario
  const { playerCards, commonCards } = emptyDeck

  const cardToPass = getCardToPass(playerCards, commonCards)

  expect(cardToPass).toEqual({ value: 4, suit: 'wood' })
})

it('should select a card than sums less than 5 with the common cards', () => {
  const { lessThanFiveWithCommon } = passScenario
  const { playerCards, commonCards } = lessThanFiveWithCommon

  const cardToPass = getCardToPass(playerCards, commonCards)

  expect(cardToPass).toEqual({ value: 3, suit: 'gold' })
})

it('should select an odd card if all common cards are odd', () => {
  const { commonCardsOdd } = passScenario
  const { playerCards, commonCards } = commonCardsOdd

  const cardToPass = getCardToPass(playerCards, commonCards)

  expect(cardToPass).toEqual({ value: 6, suit: 'sword' })
})

it('should return the best card to sum more than 15', () => {
  const { moreThanFifteenWithCommon } = passScenario
  const { playerCards, commonCards } = moreThanFifteenWithCommon

  const cardToPass = getCardToPass(playerCards, commonCards)

  expect(cardToPass).toEqual({ value: 8, suit: 'gold' })
})

it('should return the best card if there are no other preference', () => {
  const { noCommonCardsPreference } = passScenario
  const { playerCards, commonCards } = noCommonCardsPreference

  const cardToPass = getCardToPass(playerCards, commonCards)

  expect(cardToPass).toEqual({ value: 6, suit: 'sword' })
})

it('should sort by the most valuable cards', () => {
  const cards = [
    { value: 1, suit: 'wood' },
    { value: 3, suit: 'gold' },
    { value: 1, suit: 'sword' },
    { value: 7, suit: 'gold' },
    { value: 8, suit: 'wood' },
    { value: 10, suit: 'wood' },
    { value: 3, suit: 'wood' },
    { value: 7, suit: 'wood' },
  ]
  const expectedSort = [
    { value: 7, suit: 'gold' },
    { value: 7, suit: 'wood' },
    { value: 3, suit: 'gold' },
    { value: 1, suit: 'wood' },
    { value: 1, suit: 'sword' },
    { value: 8, suit: 'wood' },
    { value: 10, suit: 'wood' },
    { value: 3, suit: 'wood' },
  ]
  expect(cards.sort(sortByMostValuable)).toEqual(expectedSort)
})