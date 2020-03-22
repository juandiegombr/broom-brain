export const commonCards = [
  { value: 1, suit: 'gold' },
  { value: 3, suit: 'gold' },
  { value: 5, suit: 'gold' },
]

export const playerCards = [
  { value: 1, suit: 'gold' },
  { value: 6, suit: 'gold' },
  { value: 6, suit: 'sword' },
]

export const scenarioWithSevenGold = {
  commonCards: [
    { value: 1, suit: 'gold' },
    { value: 3, suit: 'gold' },
    { value: 5, suit: 'gold' },
  ],
  playerCards: [
    { value: 7, suit: 'sword' },
    { value: 7, suit: 'gold' },
  ],
}

export const scenarioWithBroom = {
  commonCards: [
    { value: 1, suit: 'gold' },
    { value: 3, suit: 'gold' },
    { value: 5, suit: 'gold' },
  ],
  playerCards: [
    { value: 6, suit: 'wood' },
    { value: 7, suit: 'gold' },
  ],
}

export const scenarioWithSevens = {
  commonCards: [
    { value: 9, suit: 'wood' },
    { value: 1, suit: 'wood' },
    { value: 7, suit: 'wood' },
  ],
  playerCards: [
    { value: 5, suit: 'sword' },
    { value: 7, suit: 'sword' },
  ],
}

export const scenarioWithBestSevens = {
  commonCards: [
    { value: 3, suit: 'wood' },
    { value: 4, suit: 'wood' },
    { value: 1, suit: 'wood' },
    { value: 7, suit: 'wood' },
  ],
  playerCards: [
    { value: 5, suit: 'sword' },
    { value: 7, suit: 'sword' },
  ],
}

export const scenarioWithGold = {
  commonCards: [
    { value: 3, suit: 'wood' },
    { value: 4, suit: 'wood' },
    { value: 2, suit: 'wood' },
    { value: 1, suit: 'gold' },
    { value: 6, suit: 'gold' },
  ],
  playerCards: [
    { value: 6, suit: 'sword' },
    { value: 8, suit: 'sword' },
  ],
}

export const scenarioWithMoreCards = {
  commonCards: [
    { value: 4, suit: 'wood' },
    { value: 2, suit: 'wood' },
    { value: 2, suit: 'sword' },
    { value: 2, suit: 'heart' },
    { value: 10, suit: 'wood' },
  ],
  playerCards: [
    { value: 5, suit: 'sword' },
  ],
}

export const passScenario = {
  standard: {
    playerCards: [
      { value: 6, suit: 'sword' },
      { value: 1, suit: 'gold' },
      { value: 4, suit: 'gold' },
    ],
    commonCards: [
      { value: 4, suit: 'gold' },
    ]
  },
  emptyDeck: {
    playerCards: [
      { value: 6, suit: 'sword' },
      { value: 4, suit: 'gold' },
      { value: 4, suit: 'wood' },
    ],
    commonCards: []
  },
  lessThanFiveWithCommon: {
    playerCards: [
      { value: 6, suit: 'sword' },
      { value: 1, suit: 'gold' },
      { value: 3, suit: 'gold' },
    ],
    commonCards: [
      { value: 1, suit: 'sword' },
    ]
  },
  commonCardsOdd: {
    playerCards: [
      { value: 6, suit: 'sword' },
      { value: 2, suit: 'gold' },
      { value: 4, suit: 'gold' },
    ],
    commonCards: [
      { value: 2, suit: 'sword' },
      { value: 6, suit: 'sword' },
      { value: 8, suit: 'sword' },
    ]
  },
  moreThanFifteenWithCommon: {
    playerCards: [
      { value: 6, suit: 'sword' },
      { value: 8, suit: 'gold' },
      { value: 4, suit: 'gold' },
    ],
    commonCards: [
      { value: 2, suit: 'sword' },
      { value: 6, suit: 'sword' },
    ]
  },
  noCommonCardsPreference: {
    playerCards: [
      { value: 2, suit: 'gold' },
      { value: 6, suit: 'sword' },
      { value: 4, suit: 'gold' },
    ],
    commonCards: [
      { value: 2, suit: 'sword' },
      { value: 5, suit: 'sword' },
      { value: 8, suit: 'sword' },
    ]
  },
}