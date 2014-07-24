// Initialize Phaser
var game = new Phaser.Game(800, 800, Phaser.AUTO, 'gameDiv');

// Our 'global' variable
game.global = {
	sound: true,
	score: 0,
	level: 1,
	maxLevels: 5,
};

// Define states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start the "boot" state
game.state.start('boot');