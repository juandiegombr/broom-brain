import { isGold, isSeven } from './card'

const sortByMostValuable = (a, b) => {
  if (isGold(a) && isSeven(a)) return -1
  if (isSeven(a) && !isSeven(b)) return -1
  if (isGold(a) && !isGold(b)) return -1
  if (isGold(b) && !isGold(a)) return 1
  return 0
}

const sortBySuitAndValue = (a, b) => {
  if ((a.suit === 'gold' && b.suit !== 'gold') || a.value < b.value) return 1
  if (b.suit === 'gold' || a.value > b.value) return -1
  return 0
}

export {
  sortByMostValuable,
  sortBySuitAndValue,
}