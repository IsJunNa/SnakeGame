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
        this.head.style.left = value + 'px'
    }
    // 设置蛇头y轴坐标
    set Y(value: number) {
        this.head.style.top = value + 'px'
    }
    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

// 暴露对象
export default Snake