# WeiXinBubbleDemo
使用原生canvs实现的一个简易泡泡（微信小游戏）

在实现泡泡的过程中发现，微信的模拟器和真机的环境有很大的差异，
在模拟器上可以完美适配的程序，在真机上的表现非常不好。
有很多内容完全不支持:

CanvasContext.createCircularGradient(number x, number y, number r) # 创建圆形渐变颜色
所有canvas 的渐变色方法都无法在真机上显示。


调试基础库为：2.6.6
