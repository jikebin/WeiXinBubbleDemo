import Sprite from '../base/sprite.js'
import Music from '../runtime/music.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)  //获取start~end范围的随机数
}

/**
 * 该方法是对泡泡的再封装
 * 主要功能有：
 *  1.绑定触摸方法
 *  2.和其他泡泡的碰撞检测
 *  3.初始化泡泡方法，随机位置生成随机 大小和位置的方法
 */
export default class Bubble extends Sprite{
  constructor() {
    super()

    // 手指是否在泡泡上
    this.touched = false

    //初始化泡泡位置
    this.init()

    //初始化爆炸音效
    this.music = new Music()

    //初始化监听事件
    this.inintEvent()
  }
  
  /**
   * 初始化泡泡的基本属性
   */
  init() {
    this.radius = rnd(40, 60)
    this.x = rnd(this.radius, screenWidth - this.radius)
    this.y = rnd(this.radius, screenHeight - this.radius)
    
    this.vX = rnd(-4,4)            //x轴移动速度
    this.vY = rnd(-4,4)            //y轴移动速度

    this.color.init() //重新初始化泡泡颜色
    this.visible = true
  }

  /**
   * 判断手指是否在泡泡上
   */
  checkIsFingerOnBubble(x, y) {
    const deviation = 5

    let dx = Math.pow(this.x - x, 2);      //x轴 平方
    let dy = Math.pow(this.y - y, 2);      //y轴 平方
    let d = Math.pow(this.radius, 2);     //半径 平方
    return !!(dx + dy < d)
  }


  /**
   * 玩家相应手机的触摸事件
   * 触摸后泡泡爆炸
   * 
   */
  inintEvent() {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      if (this.checkIsFingerOnBubble(x, y)) {
        this.touched = true  

      }
    }).bind(this))
    canvas.addEventListener('touchend',((e) => {
      e.preventDefault()


      if (this.touched) {
        
        this.touched = false

        this.bomb()  //执行爆炸方法
        setTimeout((() => {
          this.init()   //重新初始化该方法, 延时1s
        }).bind(this),1000)

        
      }

    }).bind(this))
  }

  /**
   * 泡泡的爆炸方法
   * 
   */
  bomb() {
    //隐藏显示
    this.visible = false

    //播放音乐
    this.music.playBomb()

    //播放爆炸动画
  }


}