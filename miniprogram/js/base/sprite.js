import Color from './color.js'
/**
 * 泡泡精灵的基础类
 */
const BG_TOP = 0
const BG_BOTTOM = window.innerHeight
const BG_LEFT = 0
const BG_RIGHT = window.innerWidth


export default class Sprite {
  constructor(x = 20, y = 50, radius = 40, vX = 5, vY = 4) {
    this.x = x
    this.y = y
    this.radius = radius
    this.vX = vX            //x轴移动速度
    this.vY = vY            //y轴移动速度

    this.lose = - 0.8  //碰撞损失，一定要是负数，否则碰撞检测会出错。-1为无损失，0为静止
    this.visible = true
    this.color = new Color()
  }

  /**
   * 画一个泡泡
   * 如果出现渐变颜色全部填充现象，请修改：grident.addColorStop(0.6, "rgba(4,78,140,0)");
   */
  draw(ctx) {
    if(!this.visible) return;

    let grident = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius - this.radius / 3)
    //let grident = ctx.createLinearGradient(this.x, this.y, this.x, this.radius)
    grident.addColorStop(0, this.color.instance);       //定义渐变的初始颜色
    grident.addColorStop(1, "rgba(4,78,140,0)");       //定义渐变的结束颜色
    ctx.fillStyle = grident;
    ctx.strokeStyle = "#ffffff"

    // //绘制阴影
    // ctx.shadowBlur = 0.1;
    // ctx.shadowOffsetX = 0.1;
    // ctx.shadowOffsetY = 0;
    // ctx.shadowColor = "#f79be7";

    //ctx.fillStyle = this.color.instance //方法前面+get 可以使用属性的方法调用
    //画圆,形成泡泡
    this.drawArc(ctx)
  }

  /**
   * 画一个圆，用于 draw内部调用
   */
  drawArc(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath()
    ctx.fill()
  }

  /**
   * 定义碰撞检测方法，只有 visible = true 才进行碰撞检测
   * 碰撞情况有：
   *    碰撞上下边：只改变 vY的移动方向
   *    碰撞左右边：只改变 vX的移动方向
   *    和其他气泡碰撞：
   *    和其他气泡相交(随机生成的时候) 
   */
  collisionBorder() {   //边缘碰撞检测
    //上下
    let totop = (this.y - this.radius)      //泡泡的上边缘
    let tobottom = (this.y + this.radius)   //泡泡的下边缘
    if (totop < BG_TOP) {
      this.y = this.radius;
      this.vY = this.vY * this.lose;
    } else if (tobottom > BG_BOTTOM) {
      this.y = BG_BOTTOM - this.radius;
      this.vY = this.vY * this.lose;
    }
    //左右
    let toleft = (this.x - this.radius)
    let toright = (this.x + this.radius)
    if (toleft < BG_LEFT) {
      this.x = this.radius;
      this.vX = this.vX * this.lose;
    } else if (toright > BG_RIGHT) {
      this.x = BG_RIGHT - this.radius;
      this.vX = this.vX * this.lose;
    }

  }

  collisionBubble(sp) {   //碰撞其他泡泡检测
    let dx = Math.pow(this.x - sp.x, 2);      //x轴 平方
    let dy = Math.pow(this.y - sp.y, 2);      //y轴 平方
    let d = Math.pow(this.radius + sp.radius, 2); //斜边 平方

    return dx + dy - d  // < 0 则表示碰撞 
  }

  /**
   * 更新气泡
   * 更新颜色 和 位置
   */
  update() {
    this.x += this.vX
    this.y += this.vY
    //this.color.update()
  }

}