
//创建元素精灵

export default class Sprite{
	constructor(imgSrc='',width = 0,height = 0,x = 0,y = 0){
		this.img = new Image()
		this.img.src = imgSrc
		this.width = width
		this.height = height
		this.x = x
		this.y = y
		
		//初始化显示参数
		this.visible = false
	}
	
	
	//定义绘制精灵函数
	drawToCanvas(ctx){
		if(!this.visible)
			return
		
		ctx.drawImage(
			this.img,
			this.x,
			this.y,
			this.width,
			this.height
		)
	}
	
	//定义简单碰撞检测函数
	isCollideWith(sp){
		let spX = sp.x + sp.width /2
		let spY = sp.y + sp.height /2
		
		//当其中一个不可见时则判断为不碰撞
		if(!this.visible || !this.visible)
			return false
		
		return !!(
				spX >= this.x
			&&	spX <= this.x + this.width
			&&	spY >= this.y
			&&	spY <= this.y + this.height
		)
	}

}


































