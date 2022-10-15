import { isSeven, isGold } from './card'

const countCards = (move) => move.common.length + 1

const countSevens = (move) => {
  const cards = [...move.common, move.player]
  return cards.filter(isSeven).length
}

const countGold = (move) => {
  const cards = [...move.common, move.player]
  return cards.filter(isGold).length
}

const hasSevens = (move) => {
  const cards = [...move.common, move.player]
  return cards.find(isSeven)
}

const hasGold = (move) => {
  const cards = [...move.common, move.player]
  return cards.find(isGold)
}

const hasTheSevenGold = (move) => {
  const cards = [...move.common, move.player]
  return cards.some((card) => isSeven(card) && isGold(card))
}

export {
  countCards,
  countGold,
  countSevens,
  hasSevens,
  hasGold,
  hasTheSevenGold,
}
