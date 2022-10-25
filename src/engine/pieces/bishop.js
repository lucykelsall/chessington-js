import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {        
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        for (let x = 1; x < 8; x++) {
            let querySquare1 = Square.at(currentSquare.row - x, currentSquare.col - x);
            if (querySquare1.row >= 0 && querySquare1.row <= 7 && querySquare1.col >= 0 && querySquare1.col <= 7) {
                arrayOfAvailableMoves.push(querySquare1);
            }                
            let querySquare2 = Square.at(currentSquare.row - x, currentSquare.col + x);
            if (querySquare2.row >= 0 && querySquare2.row <= 7 && querySquare2.col >= 0 && querySquare2.col <= 7) {
                arrayOfAvailableMoves.push(querySquare2);
            }
            let querySquare3 = Square.at(currentSquare.row + x, currentSquare.col - x);
            if (querySquare3.row >= 0 && querySquare3.row <= 7 && querySquare3.col >= 0 && querySquare3.col <= 7) {
                arrayOfAvailableMoves.push(querySquare3);
            }
            let querySquare4 = Square.at(currentSquare.row + x, currentSquare.col + x);
            if (querySquare4.row >= 0 && querySquare4.row <= 7 && querySquare4.col >= 0 && querySquare4.col <= 7) {
                arrayOfAvailableMoves.push(querySquare4);
            }                  
        }
        return arrayOfAvailableMoves;
    }

}