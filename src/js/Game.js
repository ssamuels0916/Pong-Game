
import Paddle from '../js/Paddle'
import {player1Keys, player2Keys} from '../js/Keys'

const gap = 10

export default class Game {
	constructor(id) {
	const canvas = document.getElementById(id);
	this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

	this.p1 = new Paddle(this.height, gap, 'white', player1Keys)
	this.p2  = new Paddle(this.height, this.width - 4 - gap,'white', player2Keys)
	}

	drawBoard(){
		this.context.fillStyle = 'black'
  		this.context.fillRect(0,0,this.width,this.height)
  		//dividing line
		this.drawLine();
		this.drawBall();	
	}

	drawBall(){
		this.context.fillStyle = 'white';
		this.context.beginPath();
		// arc(x, y, radius, 0, Pi* 2, true)
		this.context.arc(100, 100, 5, 0, Math.PI*2, true);
		this.context.fill();
	}
	drawLine(){
		this.context.setLineDash([5,3]);
		this.context.beginPath();
		this.context.moveTo(this.width/2,0);
 		this.context.lineTo(this.width/2,this.height);
		 this.context.fillStyle = 'white';
		this.context.strokeStyle = 'white';
		this.context.stroke();
	}
	render(){
		this.drawBoard();
		this.p1.render(this.context)
		this.p2.render(this.context)
		
	}
}