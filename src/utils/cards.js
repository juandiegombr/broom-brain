const getAllOddCards = cards => cards.filter(card => !(card.value % 2))

const getAllCardsThatCountLessThanFive = (cards, count) => {
  const selectedCards = cards.filter(card => (card.value + count) < 5)
  return selectedCards
}

const getAllCardsThatCountMoreThanFifteen = (cards, count) => {
  const selectedCards = cards.filter(card => (card.value + count) > 15)
  return selectedCards
}

const getAllCardsLowerThanFive = cards => cards.filter(card => card.value < 5)

export {
  getAllOddCards,
  getAllCardsThatCountLessThanFive,
  getAllCardsThatCountMoreThanFifteen,
  getAllCardsLowerThanFive,
}