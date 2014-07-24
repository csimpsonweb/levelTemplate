var playState = {

	create: function() {

	//Load the background image
	this.background = game.add.sprite(0, 0, 'background');
	this.background.anchor.x = 0;
	this.background.anchor.y = 0;

	//Add in the boat (FYI this is created using a group)
	this.boat = game.add.group();
    this.boat.enableBody = true;
    this.boat = this.boat.create(24, 300, 'boat');

    //this is what you need to catch the listener in update
    game.physics.arcade.enable(this.boat);

    console.info("load level:"+game.global.level);

    this.loadLevel(game.global.level)

	},
	loadLevel: function(level){
		switch(level){
			case 1:
			    //Add the target rock
			    this.largeRock= game.add.sprite(556, 329, 'largeRock');
			    game.physics.arcade.enable(this.largeRock);
			break;
			case 2:
				var nameLabel = game.add.text(game.world.centerX, 80, 'level 2', { font: '50px Arial', fill: '#ffffff' });
				nameLabel.anchor.setTo(0.5, 0.5);

			    this.smallRock= game.add.sprite(556, 329, 'smallRock');
			    game.physics.arcade.enable(this.smallRock);

			break;
			case 3:
				var nameLabel = game.add.text(game.world.centerX, 80, 'level 3', { font: '50px Arial', fill: '#ffffff' });
				nameLabel.anchor.setTo(0.5, 0.5);
			break;		
			default:
				console.warn('no level defined');
			break;
		}

	},
	update: function() {
		if (game.input.mousePointer.isDown){
			game.physics.arcade.accelerateToXY(this.boat, 556, 329, 300, 50, 50);
		}

			game.physics.arcade.overlap(this.boat,this.largeRock, this.rockHit, null , this);
			game.physics.arcade.overlap(this.boat,this.smallRock, this.rockHit, null , this);
	},
		rockHit: function(){
		this.boat.kill();
		game.global.level++;
		game.state.start('play');
	},


};