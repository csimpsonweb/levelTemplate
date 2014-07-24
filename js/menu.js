var menuState = {

	create: function() {

		//Load the background image
		this.background = game.add.sprite(0, 0, 'loadscreen');
		this.background.anchor.x = 0;
		this.background.anchor.y = 0;

		// How to start the game
		var playLabel = game.add.text(game.world.centerX, 480, 'Play Game', { font: '30px Arial', fill: '#ffffff' });
		playLabel.anchor.setTo(0.5, 0.5);
		playLabel.inputEnabled = true;
		playLabel.events.onInputDown.add(this.start, this);

		// Start the game when the up arrow key is pressed
		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
	},

	toggleSound: function() {
		game.global.sound = ! game.global.sound;
		this.muteButton.frame = game.global.sound ? 0 : 1;		
	},

	start: function() {
		game.state.start('play');	
	}
};