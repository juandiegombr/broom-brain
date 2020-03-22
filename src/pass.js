import {
  getAllOddCards,
  getAllCardsLowerThanFive,
  getAllCardsThatCountLessThanFive,
  getAllCardsThatCountMoreThanFifteen,
} from './utils/cards'

import {
  sortByMostValuable,
  sortBySuitAndValue,
} from './utils/cardSort'

const chooseTheBestCardToPass = cards => {
  const sortedCards = cards.sort(sortBySuitAndValue)
  return sortedCards[0]
}

export const getCardToPass = (playerCards, commonCards) => {
  if (commonCards.length === 0) {
    const cards = getAllCardsLowerThanFive(playerCards)
    if (cards.length === 1) return cards[0]
    return chooseTheBestCardToPass(cards)
  }
  const countCommonCards = commonCards
    .reduce((acc, card) => card.value + acc, 0)

  if (countCommonCards < 4) {
    const cards = getAllCardsThatCountLessThanFive(playerCards, countCommonCards)
    if (cards.length === 1) return cards[0]
    return chooseTheBestCardToPass(cards)
  }

  if (countCommonCards < 15) {
    const cards = getAllCardsThatCountMoreThanFifteen(playerCards, countCommonCards)
    if (cards.length === 1) return cards[0]
    return chooseTheBestCardToPass(cards)
  }

  const areAllCommonCardsOdd = commonCards.every(card => !(card % 2))

  if (areAllCommonCardsOdd) {
    const cards = getAllOddCards(playerCards)
    if (cards.length === 1) return cards[0]
  }

  return playerCards.sort(sortByMostValuable).reverse()[0]
}