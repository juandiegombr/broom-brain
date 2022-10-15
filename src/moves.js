import { getAllPossibleCombinations } from './combinations'

const getCombinationValue = (combination) =>
  combination.reduce((sum, { value }) => value + sum, 0)

const isValidCombination = (playerCards) => (combination) => {
  const playerCardsValues = playerCards.map(({ value }) => value)
  const combinationValue = getCombinationValue(combination)
  return playerCardsValues.some((value) => value + combinationValue === 15)
}

export const getAllPossibleMoves = (playerCards, commonCards) => {
  const combinations = getAllPossibleCombinations(commonCards)
  const validCombinations = combinations.filter(isValidCombination(playerCards))

  const moves = validCombinations.map((combination) => {
    const combinationValue = getCombinationValue(combination)
    const matchingCards = playerCards.filter(
      (card) => card.value + combinationValue === 15
    )

    if (matchingCards.length > 1) {
      return matchingCards.map((matchingCard) => ({
        common: combination,
        player: matchingCard,
      }))
    }

    return {
      common: combination,
      player: matchingCards[0],
    }
  })

  return moves.flatMap((m) => m)
}
