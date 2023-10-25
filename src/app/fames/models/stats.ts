import { Cell } from "./cell";

export interface IStats {
    gameOver: boolean;
    canvasWidth: number;
    canvasHeight: number;
    food: Cell;
    score: number;
    highScore: number;
}