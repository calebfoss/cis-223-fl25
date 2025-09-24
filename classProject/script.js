import {
  createRoot,
  Color,
  Vector2D,
  Angle,
  ConicalGradient,
  LinearGradient,
  RadialGradient,
  Shadow,
  Random
} from "web-spinner";
/////////////////////////////
// MEMORY INITIALIZATION

// Becky
//Initialize a variable to store the number of times the current flower has been watered using an initial value of 0.
let timesWatered = 0;

const waterCap = 3;

let selectedFlowerSeed = "";

const flowerPrice = 10;

let playerAmount = 10;

let flowerVerticalLocation = -1;

const waterButton = document.createElement("button");

let seedPositionX = -1;

const groundLevel = 400;
/////////////////////////////

/////////////////////////////
// SETUP

const root = createRoot();

const canvas = root.canvas2D({
  width: 500,
  height: 500,
  background: 'lightblue'
});

const ground = canvas.rectangle({
  fill: 'green',
  anchor: Vector2D.xy(0, groundLevel),
  width: canvas.width,
  height: canvas.height - 400
});

root.appendChild(waterButton);

waterButton.append('Water');
/////////////////////////////

/////////////////////////////
// GAME

// Michelle

// Benjamin

// Becky

// Rock

// Kevin

// Mely

// Eduardo

// Victor

// Sophia

// Zander