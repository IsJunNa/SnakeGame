import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    constructor() {
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.snake = new Snake()
    }


}

export default GameControl