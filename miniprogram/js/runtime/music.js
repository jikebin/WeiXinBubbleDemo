let instance

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)  //获取start~end范围的随机数
}
/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src  = 'audio/bgm.mp3'
    

    this.bombs = ['1.wav','2.wav','3.wav']
    this.bombAudio     = new Audio()
    
    
    this.playBgm()
  }

  playBgm() {
    this.bgmAudio.play()
  }

  playBomb() {
    this.bombAudio.src = 'audio/' + this.bombs[rnd(0,2)]
    //this.bombAudio.src = 'audio/1.wav'
    this.bombAudio.currentTime = 0
    this.bombAudio.play()
  }

 
}
