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

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j = 0; j < GameSettings.BOARD_SIZE - i; j++) {
                let availableSquare = Square.at(j, i);
                if (currentSquare.row === availableSquare.row + 1 && currentSquare.col === availableSquare.col + 1) {
                    arrayOfAvailableMoves.push(availableSquare);
                }
            }
        
        }
        return arrayOfAvailableMoves;
    }

}