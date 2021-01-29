

var ASSET_MANAGER = new AssetManager();



ASSET_MANAGER.queueDownload("./sprites/zombieboynew.png");
ASSET_MANAGER.queueDownload("./sprites/zombiegirlnew.png");
ASSET_MANAGER.queueDownload('./sprites/BoyNinja.png');
ASSET_MANAGER.queueDownload('./sprites/BoyNinjaLeft.png');
ASSET_MANAGER.queueDownload('./sprites/ninjaGirl.png');
ASSET_MANAGER.queueDownload('./sprites/ninjaGirlLeft.png');

ASSET_MANAGER.queueDownload("./sprites/stone.png");
ASSET_MANAGER.queueDownload("./sprites/grass.png");
ASSET_MANAGER.queueDownload("./sprites/brick.png");
ASSET_MANAGER.queueDownload("./sprites/Jumping-pads_1.png");

ASSET_MANAGER.downloadAll(function () {
	var gameEngine = new GameEngine();

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	let canvas = document.getElementById('gameWorld');

	let ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new SceneManager(gameEngine);

	gameEngine.start();
});

