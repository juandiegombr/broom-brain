import {
  countCards,
  countGold,
  countSevens,
} from './move'

const sortByBigger = (func) => (a, b) => {
  if (func(a) > func(b)) return -1
  if (func(a) < func(b)) return 1
  return 0
}
const sortBySevenCount = (a, b) => {
  return sortByBigger(countSevens)(a, b)
}

const sortByGoldCount = (a, b) => {
  return sortByBigger(countGold)(a, b)
}

const sortByCardsCount = (a, b) => {
  return sortByBigger(countCards)(a, b)
}

export {
  sortBySevenCount,
  sortByGoldCount,
  sortByCardsCount,
}