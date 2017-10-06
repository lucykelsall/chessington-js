import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Queen extends Piece {
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
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let availableSquare = Square.at(i, currentSquare.col);
            if (availableSquare.row !== currentSquare.row || availableSquare.col !== currentSquare.col) {
            arrayOfAvailableMoves.push(availableSquare);
            }
            let availableSquare2 = Square.at(currentSquare.row, i);
            if (availableSquare2.row !== currentSquare.row || availableSquare2.col !== currentSquare.col) {
            arrayOfAvailableMoves.push(availableSquare2);
            }
        }
        return arrayOfAvailableMoves;
    }

}