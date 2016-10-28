import '../game.css';
import Game from '../js/Game';


// game instance
const game = new Game('game');

const ms = 90;

// self invoking function
(function gameLoop() {
	
	game.render()
	//console.log(game.height, game.width)
   setTimeout(gameLoop, ms);
}());