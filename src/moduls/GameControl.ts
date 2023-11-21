import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    // 按键的方向
    direction: string = ''
    // 游戏的开始
    isLive = true
    constructor() {
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.snake = new Snake()
        this.init()
    }
    // 游戏初始化方法
    init() {
        document.addEventListener('keydown', this.keydownHandler)
        this.run()
    }
    // 检测键盘响应的函数
    keydownHandler = (event: KeyboardEvent) => {
        this.direction = event.key
    }
    // 改变蛇的位置
    run() {
        // 获得蛇头的位置
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
            case "W":
            case "w":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
            case "S":
            case "s":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
            case "A":
            case "a":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
            case "D":
            case "d":
                X += 10
                break;
        }
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            alert(e)
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
        this.checkEat(X, Y)
    }
    // 判断蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change()
            this.snake.addBody()
            this.scorePanel.addScore()
        }
    }
}
export default GameControl