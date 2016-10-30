import '../game.css';
import Game from '../js/Game';


// game instance
const game = new Game('game');

const ms = 30;

// self invoking function
(function gameLoop() {
	
	game.render()

   setTimeout(gameLoop, ms);
}());