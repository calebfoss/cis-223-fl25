/////////////////////////////
// MEMORY INITIALIZATION

// Becky
//Initialize a variable to store the number of times the current flower has been watered using an initial value of 0.
let timesWatered = 0;
// Ben
const waterCap = 3;
// Eduardo

// Kevin

let selectedFlowerSeed = "";

// Mely

const flowerPrice = 10;

// Michael

// Michelle
let playerAmount = 10;
// Rock
let flowerVerticalLocation = -1;
// Sophia
const waterButton = document.createElement("button");

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
      alert(`You bought a ${selectedColor} flower seed.`);
      break;
    } else {
      alert(`Sorry, we're out of ${input} flower seeds.`);
    }
  }

  // `selectedColor` used for further logic here
  return selectedColor;
}

// Victor
let seedPositionX = -1;

// Zander

/////////////////////////////
