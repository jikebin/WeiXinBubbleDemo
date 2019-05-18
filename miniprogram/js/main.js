import Sprite from './base/sprite.js'
import Background from './runtime/background.js'
import Music from './runtime/music.js'
import Bubble from './player/bubble.js'

let ctx = canvas.getContext('2d')

export default class Main {
  constructor(){
    this.bubbles = []

    this.restart()
  }

  restart() {
    this.bg = new Background()
    this.bgm = new Music()
    //初始化 6 个泡泡
    for(let i = 0; i < 6; i++) {
      this.bubbles.push(new Bubble())
    }

    this.bindLoop = this.loop.bind(this)
    this.bindLoop()
  }

  //实现游戏帧循环
  loop() {
    this.bg.render(ctx)   //绘制背景图
    this.bubbles.forEach((bubble) => {
      bubble.draw(ctx) //绘制泡泡
      bubble.update()  //更新泡泡位置
      bubble.collisionBorder() //碰撞墙壁检测
    })
   
    

    this.aniID = window.requestAnimationFrame(
      this.bindLoop,
    )


  }
}