
import Paddle from './Paddle'
import Ball from './Ball'
import Board from './Board'
import ScoreBoard from './Score'
import {player1Keys, player2Keys} from './Keys'

const gap = 10

export default class Game {
	constructor(id) {
	const canvas = document.getElementById(id);
	this.context = canvas.getContext('2d');
	
    this.width = canvas.width;
    this.height = canvas.height;

	this.board = new Board(this.height, this.width, 'white')
	this.ball = new Ball(this.height, this.width, 'black', 5);
	this.p1 = new Paddle(this.height, gap, 'black', player1Keys);
	this.p2  = new Paddle(this.height, this.width - gap,'black', player2Keys);
	this.p1Score = new ScoreBoard(225, 85);
	this.p2Score = new ScoreBoard(75,85);
	
	}
	render(){
		this.board.render(this.context);
		this.p1.render(this.context);
		this.p2.render(this.context);
		this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
		this.p1Score.render(this.context);
		this.p2Score.render(this.context);
		
	}
}