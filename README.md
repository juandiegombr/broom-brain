# Broom Brain 🤔
Repository to place all the computer logic for "The Broom" game. https://the-broom.glitch.me/

## Installation
```
npm install @juandiegombr/broom-brain
```
## Usage
```javascript
import {
  getMoveToPlay,
  getCardToPass,
} from '@juandiegombr/broom-brain

getMoveToPlay({ playerCards, commonCards})
getCardToPass({ playerCards, commonCards})
```

## Card
A card is an object with a value and a suit
```javascript
const card = {
  value: 7, // oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  suit: 'gold', // oneOf(['gold', 'wood', 'sword', 'heart'])
}
```

## Move
A move is a group of cards. They are placed in the move object, splitted in the common cards and the player cards.
```javascript
const move = {
  common: [
    { value: 1, suit: 'gold' },
    { value: 6, suit: 'gold' },
  ],
  player: { value: 8, suit: 'sword' }
}
```

## getMoveToPlay
To get al valid moves depending on the common cards and the players card.
```javascript
const commonCards = [
  { value: 3, suit: 'wood' },
  { value: 4, suit: 'wood' },
  { value: 2, suit: 'wood' },
  { value: 1, suit: 'gold' },
  { value: 6, suit: 'gold' },
]
const playerCards = [
  { value: 6, suit: 'sword' },
  { value: 8, suit: 'sword' },
]

getMoveToPlay({ commonCards, playerCards })

/* Output:
{
  common: [
    { value: 1, suit: 'gold' },
    { value: 6, suit: 'gold' },
  ],
  player: { value: 8, suit: 'sword' }
}
*/
```

## getCardToPass
In case that there are no possible move, this function gives the best card to pass.

```javascript
const commonCards = [
  { value: 1, suit: 'gold' },
]
const playerCards = [
  { value: 2, suit: 'sword' },
  { value: 8, suit: 'sword' },
]

getTheBestMove({ commonCards, playerCards })

// Output: { value: 2, suit: 'sword' }
```
