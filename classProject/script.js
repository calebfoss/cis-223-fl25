import { createRoot, Color, Vector2D, Angle, Random } from "web-spinner";

// Variation on flower height
//  chance-based

/////////////////////////////
// MEMORY INITIALIZATION

let timesWatered = 0;

const waterCap = 5;

let selectedFlowerSeed = "";

let playerAmount = 10;

let flowerVerticalLocation = -1;

const waterButton = document.createElement("button");



// Victor
let seedPositionX = -1;

const groundLevel = 200;
/////////////////////////////

/////////////////////////////
// SETUP

// Create root container element
const root = createRoot();

// Create canvas
const canvas = root.canvas2D({
  width: 500,
  height: 300,
  background: "lightblue",
});

// Put water button in root container
root.appendChild(waterButton);
// Add text to button
waterButton.append("Water");

// Create seed shape
const seed = canvas.ellipse({
  width: 10,
  height: 20,
  fill: "tan",
  stroke: "none",
  anchor: Vector2D.xy(0, -20),
});



// Create rectangle for ground
const ground = canvas.rectangle({
  fill: "green",
  stroke: "none",
  anchor: Vector2D.xy(0, groundLevel),
  width: canvas.width,
  height: canvas.height - groundLevel,
});

const stems = [];

// Turn off image smoothing for pixel art
// (otherwise it will look blurry)
canvas.context.imageSmoothingEnabled = false;

const buySeedButton = document.createElement("button");

root.appendChild(buySeedButton);

buySeedButton.append("Buy a seed");

const moneyDisplay = canvas.text({
  textContent: "$" + playerAmount,
  anchor: Vector2D.xy(canvas.width - 30, 50),
  size: 20,
  align: "right",
});

/////////////////////////////

/////////////////////////////
// GAME

function modifyMoney(amount) {
  playerAmount += amount;

  moneyDisplay.textContent = "$" + playerAmount;
}

function buySeed() {
  const validColors = ["blue", "orange", "pink", "purple"];
  let selectedColor = "";

  while (true) {
    let input = prompt(
      "What color of flower would you like to buy? (blue, orange, pink, purple)"
    );
    if (input === null) {
      alert("Purchase cancelled.");
      return; // User cancelled prompt
    }

    input = input.trim().toLowerCase();

    if (validColors.includes(input)) {
      selectedColor = input;
   

      break;
    } else {
      alert(`Sorry, we're out of ${input} flower seeds.`);
    }
  }

        // `selectedColor` used for further logic here
        selectedFlowerSeed = selectedColor;

    const price = seedPrice(selectedFlowerSeed);

      if(playerAmount < price) {
        alert("Sorry, not enough cash!");

        return;
      }

      alert(`You bought a ${selectedColor} flower seed.`);



      

      modifyMoney(-price);

      purchaseSeed();
}

// Michelle

function purchaseSeed() {
  seedPositionX = Math.random() * canvas.width; // Set the seed's anchor to a random X position.
  seed.anchor.x = seedPositionX; 
  seed.anchor.y = -seed.height; // Set Y position just above the canvas.

  seed.velocity = Vector2D.xy(0, 200);
  // Set the seed's velocity to move straight down,
}

// When this button is pressed
// call the purchaseSeed function
buySeedButton.addEventListener("click", buySeed);

// Benjamin



function grow() {
  const stemHeight = 20;

  const stem = canvas.rectangle({
    width: 10,
    height: stemHeight,
    fill: 'green',
    stroke: 'none',
    anchor: Vector2D.xy(seedPositionX, groundLevel - stemHeight * timesWatered)
  });

  // Put the new stem in the list of stems
  stems.push(stem);
}

function waterFlower() {
  
  timesWatered += 1;

  if (timesWatered >= waterCap) {
    bloom();
    timesWatered = 0;
  } else {
    grow();
  }
}

waterButton.addEventListener("click", waterFlower);

// Becky

function bloom() {
  if (timesWatered === waterCap) {
    // Create flower image
    const flower = canvas.image({
      source: "images/FLower 5/Flower 5 - " + selectedFlowerSeed.toUpperCase() + ".png",
      scale: 4,
    });

    flower.anchor = Vector2D.xy(seedPositionX - flower.width / 2, groundLevel - 100);

    // Remove all of the stems
    while(stems.length > 0) {
      // Get last stem in list
      const lastStem = stems.pop();
      // Remove it
      lastStem.remove();
    }

    function removeThisFlower() {
      removeFlower(flower);
    }

    flower.addEventListener("click", removeThisFlower);
  }
}

// Kevin

function removeFlower(flower) {
    
    const confirmRemoval = confirm("Do you want to remove this flower?");
    
    if (confirmRemoval) {
        flower.remove();

        const flowerPrice = setFlowerPrice(selectedFlowerSeed);

        modifyMoney(flowerPrice);
    }
}

// Mely


function setFlowerPrice(flowerColor) {
  let flowerPrice = 0;

  if (flowerColor === "blue") {
    flowerPrice = 9;
  } else if (flowerColor === "orange") {
    flowerPrice = 7;
  } else if (flowerColor === "pink") {
    flowerPrice = 8;
  } else if (flowerColor === "purple") {
    flowerPrice = 10;
  } else {
    flowerPrice = 5;
  }
  return flowerPrice;
}

// Eduardo

function updateMoney() {}

// Victor

function seedPrice(color) {
  if (color.toLowerCase() === "blue") {
    return 2;
  } else if (color.toLowerCase() === "orange") {
    return 4;
  } else if (color.toLowerCase() === "pink") {
    return 8;
  } else if (color.toLowerCase() === "purple") {
    return 20;
  }
}

// Sophia

function selectSeed() {}

// Zander

function bankrupt() {}
