import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        if (this.isWhite) {
            arrayOfAvailableMoves.push()
          return 
        }
   //     return new Array(0);
    }
}
