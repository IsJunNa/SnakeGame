// 蛇类
class Snake {
    // 蛇头元素
    head: HTMLElement
    // 蛇身元素
    bodies: HTMLCollection
    // 蛇元素
    element: HTMLElement
    constructor() {
        this.element = document.querySelector('#snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }
    // 获取蛇头x轴坐标
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇头y轴坐标
    get Y() {
        return this.head.offsetTop
    }
    // 设置蛇头x轴坐标
    set X(value: number) {
        if (this.X === value) return
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) value = this.X - 10
            else value = this.X + 10
        }

        if (value < 0 || value > 290) throw new Error("蛇撞墙了,游戏结束")
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }
    // 设置蛇头y轴坐标
    set Y(value: number) {
        if (this.Y === value) return
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) value = this.Y - 10
            else value = this.Y + 10
        }
        if (value < 0 || value > 290) throw new Error("蛇撞墙了,游戏结束")
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }
    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    // 蛇身体移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇头是否与蛇身相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            if (this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop) {
                throw new Error("撞到自己了！")
            }
        }
    }
}

// 暴露对象
export default Snake