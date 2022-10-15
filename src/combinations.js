/**
 * It returns if an element of an array has to be included
 * in the combination generated
 * Examples:
 * Combination 0: (000) includes none elements.
 * Combination 1: (001) includes the 3rd element.
 * Combination 2: (010) includes the 2nd element.
 * Combination 3: (011) includes the 2nd and the 3rd elements.
 * @param {Number} combinationNumber
 * @param {Number} position
 */
const isIncludedInCombination = (combinationNumber, position) => {
  return combinationNumber & Math.pow(2, position)
}

export const getAllPossibleCombinations = (commonCards) => {
  if (!commonCards.length) return []
  const totalCombinations = Math.pow(2, commonCards.length)
  const combinations = Array.from(
    { length: totalCombinations },
    (_, combinationNumber) => {
      return commonCards.filter((card, i) => {
        if (isIncludedInCombination(combinationNumber, i)) return card
      })
    }
  )
  return combinations.filter((combination) => combination.length)
}
