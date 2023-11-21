// 记分牌类
class ScorePanel {
    // 最大等级
    maxLevel: number
    // 多少分升一级
    upScore: number
    // 初始化分数
    score = 0
    // 初始化等级
    level = 1
    // 分数元素对象
    scoreEle: HTMLElement
    // 等级元素对象
    levelEle: HTMLElement
    /**
     * 
     * @参数1 最大等级 number
     * @参数2 多少分升一级 number
     */
    constructor(maxLevel: number = 10, upScore: number = 5) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.querySelector('.score')!
        this.levelEle = document.querySelector('.level')!
    }
    // 增加分数的方法
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score.toString()
        // 每五分升一级
        if (this.score % this.upScore === 0) this.levelUp()
    }
    // 增加等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level.toString()
        }
    }
}

// 暴露对象
export default ScorePanel