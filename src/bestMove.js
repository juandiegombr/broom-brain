import { hasSevens, hasGold, hasTheSevenGold } from './utils/move'

import {
  sortBySevenCount,
  sortByGoldCount,
  sortByCardsCount,
} from './utils/moveSort'

import { getAllPossibleMoves } from './moves'

const isBroom = (commonCards) => (move) =>
  commonCards.length > 0 && move.common.length === commonCards.length

export const getMoveToPlay = ({ playerCards, commonCards = [], moves }) => {
  if (!moves) {
    moves = getAllPossibleMoves(playerCards, commonCards)
  }
  if (moves.length === 0) return null

  if (moves.length === 1) return moves[0]

  const movesWithBroom = moves.filter(isBroom(commonCards))
  if (movesWithBroom.length) return getMoveToPlay({ moves: movesWithBroom })

  const moveWithTheSevenGold = moves.find(hasTheSevenGold)
  if (moveWithTheSevenGold) return moveWithTheSevenGold

  const movesWithSevens = moves.filter(hasSevens)
  if (movesWithSevens.length) {
    movesWithSevens.sort(sortBySevenCount)
    return movesWithSevens[0]
  }

  const movesWithGold = moves.filter(hasGold)
  if (movesWithGold.length) {
    movesWithGold.sort(sortByGoldCount)
    return movesWithGold[0]
  }

  moves.sort(sortByCardsCount)
  return moves[0]
}
