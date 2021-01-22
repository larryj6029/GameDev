

var ASSET_MANAGER = new AssetManager();



ASSET_MANAGER.queueDownload("./sprites/zombieboy2.png");
ASSET_MANAGER.queueDownload("./sprites/zombiegirl2.png");
ASSET_MANAGER.queueDownload('./sprites/BoyNinja.png');
ASSET_MANAGER.queueDownload('./sprites/BoyNinjaLeft.png');
ASSET_MANAGER.queueDownload('./sprites/ninjaGirl.png');
ASSET_MANAGER.queueDownload('./sprites/ninjaGirlLeft.png');


ASSET_MANAGER.downloadAll(function () {

	var gameEngine = new GameEngine();

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});
