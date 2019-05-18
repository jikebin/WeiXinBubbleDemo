
const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'images/bg.jpg'
const BG_WIDTH     = screenWidth
const BG_HEIGHT    = screenHeight

/**
 * 游戏背景类
 */
export default class BackGround {
  constructor() {
    this.img = new Image()
    this.img.src = BG_IMG_SRC 
    this.x = 0
    this.y = 0
    this.width = BG_WIDTH
    this.height = BG_HEIGHT

  
  }

  //绘制背景图片
  render(ctx) {
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }

  
}
