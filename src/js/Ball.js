// In Ball.js...
const paddleSound = new Audio('../sounds/pong-01.wav');
const wallSound = new Audio('../sounds/pong-02.wav')

export default class Ball {
    constructor(boardHeight, boardWidth, color, size) {
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        console.log(boardHeight);
        this.x = boardWidth / 2; // random x
        this.y = boardHeight / 2; // random y
        this.vy = 5 //Math.floor(Math.random(5) * 12 - 6); // y direction
        this.vx = 5 //(7 - Math.abs(this.vy)); // x direction
        this.size = size;
        this.speed = 5;

    }
    drawBall(context) {
        context.fillStyle = 'black';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }
   reset(){
            this.x  = 150;
            this.y = 75;
            this.vx *= -1;
    }
    score(p1Score, p2Score){
        if(this.x <= 0 - this.size){
            this.reset();
            p1Score.score++;
        } else if(this.x >= 310){
            this.reset();
            p2Score.score++;
        }
    }

paddleCollision(p1, p2){
    if(this.vx > 0) {
        const inRightEnd = this.x  >= p2.x && this.x + this.size >= p2.x + p2.width;
            
        if (inRightEnd) {
            if (this.y >= p2.y && this.y <= (p2.y + p2.height)) {
                this.x = p2.x - this.size;
                this.vx *= -1;
               // paddleSound.play();
            }
        }
    } else {
        const inLeftEnd = this.x <= (p1.x + p1.width);

        if(inLeftEnd) {
            if(this.y >= p1.y && this.y <= (p1.y + p1.height)){
               this.x = p1.x + p1.width + this.size;
                this.vx *= -1;
               // paddleSound.play();
            }
        }
    }
}

render(context, p1, p2, p1Score, p2Score) {
        const hitRight = this.x >= this.boardWidth;
        const hitLeft = this.x <= 0;
        const hitTop = this.y - (this.size + 1) <= 0;
        const hitBottom = this.y + this.size >= this.boardHeight;

        /*if(hitRight || hitLeft) {
            this.vx *= -1;
        }*/

        if(hitTop || hitBottom) {
            this.vy *= -1;
            wallSound.play();
        }

        this.x += this.vx;
        this.y += this.vy;

        this.drawBall(context);
        this.score(p1Score, p2Score);
        this.paddleCollision(p1,p2);
       
    }
}
