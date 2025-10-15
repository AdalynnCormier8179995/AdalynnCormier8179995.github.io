$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(550, 600 , 101 , 18)
createPlatform(900, 650 , 200 , 20)
createPlatform(250 , 500 , 102 , 12)
createPlatform(350 , 375 , 104 , 13)
createPlatform(600, 300 , 200 , 16)

    // TODO 3 - Create Collectables
createCollectable('steve', 300, 400)
createCollectable('max',600, 500)
createCollectable('grace',600,200)


    
    // TODO 4 - Create Cannons
    createCannon("right", 200, 300 ,20)
 createCannon("bottom", 200, 1000 ,50)
createCannon("top", 200, 1000 ,50)

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
