import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {        
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        const querySquare1 = Square.at(currentSquare.row - 1, currentSquare.col + 2);
        const querySquare2 = Square.at(currentSquare.row - 1, currentSquare.col - 2);
        const querySquare3 = Square.at(currentSquare.row + 1, currentSquare.col + 2);
        const querySquare4 = Square.at(currentSquare.row + 1, currentSquare.col - 2);
        const querySquare5 = Square.at(currentSquare.row - 2, currentSquare.col + 1);
        const querySquare6 = Square.at(currentSquare.row - 2, currentSquare.col - 1);
        const querySquare7 = Square.at(currentSquare.row + 2, currentSquare.col + 1);
        const querySquare8 = Square.at(currentSquare.row + 2, currentSquare.col - 1);
        const arrayOfQuerySquares = [querySquare1, querySquare2, querySquare3, querySquare4, querySquare5, querySquare6, querySquare7, querySquare8]
        for (let i = 0; i < arrayOfQuerySquares.length; i++) {
            if (board.isPieceOnBoard(arrayOfQuerySquares[i])) {
                arrayOfAvailableMoves.push(arrayOfQuerySquares[i]);
            }
        }
        return arrayOfAvailableMoves;
    }

}