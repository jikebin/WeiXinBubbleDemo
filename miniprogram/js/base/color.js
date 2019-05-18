/**
 * 产生一个随机颜色的字符串参数
 * 
 */
export default class Color {  
  constructor() {
    this.mode = "HSLA";
    this.init()
  }
  init() {
    this.hue = Math.floor(Math.random() * 354) + 1;					       //色调
    this.saturation = Math.floor(50 + Math.random() * 50) + "%";	//饱和度
    this.lightness = Math.floor(30 + Math.random() * 20) + "%";		//亮度
    this.alpha = "0.5";	//透明度
  }

  get instance() {
    return "hsla(" + this.hue + "," + this.saturation + "," + this.lightness + "," + this.alpha + ")";
  }
  update() {
    this.hue += .2		//更新颜色
  }
}
