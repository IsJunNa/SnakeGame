// 食物类
class Food {
    // 食物元素
    element: HTMLElement
    constructor() {
        this.element = document.querySelector('.food')!
        this.change()
    }
    // 获取食物x轴坐标
    get X() {
        return this.element.offsetLeft
    }
    // 获取食物y轴坐标
    get Y() {
        return this.element.offsetTop
    }
    // 随机食物位置
    change() {
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

// 暴露对象
export default Food