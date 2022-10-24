import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        if (this.isWhite) {
            if (board.isSquareEmpty(currentSquare.col + 1))
            currentSquare.col++;
        }
        return new Array(0);
    }
}
