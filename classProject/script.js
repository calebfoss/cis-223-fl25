import { createRoot, Color, Vector2D, Angle, Random } from "web-spinner";

/////////////////////////////
// GLOBAL MEMORY INITIALIZATION
let playerAmount = 10;

// Empty array to store flowers
const flowers = [];

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

class Flower {
  constructor(color) {
    this.color = color;

    this.x = Math.random() * canvas.width;

    this.seed = canvas.ellipse({
      width: 10,
      height: 20,
      fill: "tan",
      stroke: "none",
      anchor: Vector2D.xy(this.x, -20),
      velocity: Vector2D.xy(0, 200)
    });

    // Put the seed before the ground to make it
    //  appear behind the ground
    canvas.insertBefore(this.seed, ground);
    
    this.stems = [];

    this.sprite = null;

    this.timesWatered = 0;

    this.waterCap = 5;
  }

  bloom() {
    // Create flower image
    const sprite = canvas.image({
      source: "images/FLower 5/Flower 5 - " + this.color.toUpperCase() + ".png",
      scale: 4,
    });

    sprite.anchor = Vector2D.xy(this.x - sprite.width / 2, groundLevel - 100);

    // Remove all of the stems
    while(this.stems.length > 0) {
      // Get last stem in list
      const lastStem = this.stems.pop();
      // Remove it
      lastStem.remove();
    }

    sprite.addEventListener("click", this.pick.bind(this));

    this.sprite = sprite;
  }

  pick() {
    const confirmRemoval = confirm("Do you want to remove this flower?");
    
    if (confirmRemoval) {
        this.sprite.remove();

        const flowerPrice = setFlowerPrice(this.color);

        modifyMoney(flowerPrice);

        // Find the index number of this flower in the array
        const index = flowers.indexOf(this);

        // Splice this flower out of the array
        flowers.splice(index, 1);
    }
  }

  water() {
    this.timesWatered++;

    if(this.timesWatered === this.waterCap) this.bloom();

    // If the flower has already bloomed, do nothing
    if(this.timesWatered >= this.waterCap) return;

    const stemHeight = 20;

    const stem = canvas.rectangle({
      width: 10,
      height: stemHeight,
      fill: 'green',
      stroke: 'none',
      anchor: Vector2D.xy(this.x, groundLevel - stemHeight * this.timesWatered)
    });

    // Put the new stem in the list of stems
    this.stems.push(stem);
  }
}

const waterButton = document.createElement("button");

// Put water button in root container
root.appendChild(waterButton);
// Add text to button
waterButton.append("Water");

// Create rectangle for ground
const ground = canvas.rectangle({
  fill: "green",
  stroke: "none",
  anchor: Vector2D.xy(0, groundLevel),
  width: canvas.width,
  height: canvas.height - groundLevel,
});

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
  
  if (amount > 0) {
    playerAmount += amount;
      alert("You earned " + amount + " whole dollars! Wow!")
  } else if (amount < 0) {
    playerAmount += amount;
      alert("You were charged " + Math.abs(amount) + " dollars.")
  } else {
    
  }

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

  const price = seedPrice(selectedColor);

  if(playerAmount < price) {
    alert("Sorry, not enough cash!");

    return;
  }

  alert(`You bought a ${selectedColor} flower seed.`);

  modifyMoney(-price);

  const flower = new Flower(selectedColor);

  flowers.push(flower);
}

// When this button is pressed
// call the purchaseSeed function
buySeedButton.addEventListener("click", buySeed);

function waterFlowers() {
  // Water each of the current flowers
  for(const flower of flowers) {
    flower.water();
  }
}

waterButton.addEventListener("click", waterFlowers);

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