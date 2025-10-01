import {
  createRoot,
  Color,
  Vector2D,
  Angle,
  Random
} from "web-spinner";

/////////////////////////////
// MEMORY INITIALIZATION

//Initialize a variable to store the number of times the current flower has been watered using an initial value of 0.
let timesWatered = 0;

const waterCap = 3;

let selectedFlowerSeed = "";

let playerAmount = 10;

let flowerVerticalLocation = -1;

const waterButton = document.createElement("button");

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
  background: 'lightblue'
});

// Put water button in root container
root.appendChild(waterButton);
// Add text to button
waterButton.append('Water');

// Create seed shape
const seed = canvas.ellipse({
  width: 10, 
  height: 20, 
  fill: 'tan', 
  stroke: 'none',
  anchor: Vector2D.xy(100, 100)
});


// Create flower image
const flower = canvas.image({
  source: 'images/FLower 5/Flower 5 - BLUE.png',
  scale: 4,
  anchor: Vector2D.xy(20, groundLevel - 100)
});

// Create rectangle for ground
const ground = canvas.rectangle({
  fill: 'green',
  stroke: 'none',
  anchor: Vector2D.xy(0, groundLevel),
  width: canvas.width,
  height: canvas.height - groundLevel
});

// Turn off image smoothing for pixel art
// (otherwise it will look blurry)
canvas.context.imageSmoothingEnabled = false;

const buySeedButton = document.createElement('button');

root.appendChild(buySeedButton);

buySeedButton.append("Buy a seed");


const moneyDisplay = canvas.text({
  textContent: "$" + playerAmount,
  anchor: Vector2D.xy(canvas.width - 30, 50),
  size: 20,
  align: 'right'
})

/////////////////////////////

/////////////////////////////
// GAME

// Michelle

function purchaseSeed() {
  // Remove this when implemented
  alert("Buy a seed");

  selectSeed();
}

// When this button is pressed
// call the purchaseSeed function
buySeedButton.addEventListener('click',purchaseSeed);

// Benjamin

function waterFlower() {
  // Remove this when implemented
  alert("Water");
}

waterButton.addEventListener('click', waterFlower);

// Becky

function bloom() {

  // Make money from flower blooming
  flowerPassiveIncome();
}

// Rock

function flowerPassiveIncome() {

}

// Kevin

function removeFlower() {
    
    const confirmRemoval = confirm("Do you want to remove this flower?");
    
    if (confirmRemoval) {
        flower.remove();
        playerAmount += flowerPrice;
    }
}

// Mely

}

// Mely

function flowerPrice(color) {
  // Temporary for testing
  return 0;
}

// Eduardo

function updateMoney() {

}

// Victor

function seedPrice(color) {
  // Temporary for testing
  return 0;
}

// Sophia

function selectSeed() {

}

// Zander

function bankrupt() {

}