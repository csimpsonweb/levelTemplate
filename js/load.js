var loadState = {

	preload: function () {		
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Add a progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		// Load all assets
		//game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);

		game.load.image('loadscreen', 'assets/loadscreen.png', 800, 800);
		game.load.image('background', 'assets/background.png', 800, 800);

		game.load.image('boat', 'assets/boat.png', 60, 28);
		game.load.image('largeRock', 'assets/largeRock.png', 156, 150);
		game.load.image('smallRock', 'assets/smallRock.png', 40, 41);

	},

	create: function() { 
		game.state.start('menu');
	}
};