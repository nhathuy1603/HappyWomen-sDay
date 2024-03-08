let gifLength = 60*30;
let canvas;
let record = false
let flowers = []
let colors = [
  [204, 101, 192, 127],
  [142, 204, 101, 127],
  [101, 173, 204, 127]
]
let V = 2
let scale = 1.5

function setup() {
  let p5Canvas = createCanvas(windowWidth, windowHeight);
  canvas = p5Canvas.canvas;
	frameRate(60);
  if(record) capturer.start();
}

class Flower {
  init() {
    this.size = random(.25*scale, 1*scale)
    this.posX = random(0, width)
    this.posY = -this.size * 80 - random(0, this.size * 100)
    this.angle = random(0, 2*PI)
    this.rotateSpeed = random(PI/180*V/2, PI/90*V/2)
    this.fallingSpeed = random(2.5*V, 2.75*V)
    this.color = colors[Math.floor(random(0, colors.length))]
  }
  constructor(N) {
    this.N = N
    this.init()
  }
  
  
  update() {
    push()
    stroke(this.color[0]-10, this.color[1]-10, this.color[2]-10)
    translate(this.posX, this.posY)
    rotate(this.angle)
    fill(this.color[0], this.color[1], this.color[2], this.color[3])
    for(let i = 0; i < this.N; i++) {
      ellipse(0, 30*this.size, 20*this.size, 80*this.size)
      rotate(2*PI/this.N)
    }
    pop()
    
    this.posY += this.fallingSpeed
    this.angle += this.rotateSpeed
    if(this.posY - this.size * 80 > height) {
      let index = flowers.indexOf(this)
      flowers.splice(index, 1)
      console.log(flowers.length)
    }
  }
}

function draw() {
  background(230)
  if(frameCount % 50 == 0) flowers.push(new Flower(10))
  for(let flower of flowers) {
    flower.update()
  }
  if(frameCount < gifLength+1) {
    if(record) capturer.capture(canvas);
  } else if(frameCount === gifLength+1) {
    if(record) capturer.stop();
    if(record) capturer.save();
  }
}