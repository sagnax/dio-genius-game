let order = [];
let clickedOrder = [];
let score = 0;

/* Color indexes
0 - green
1 - red
2 - yellow
3 - blue
*/

const green = document.querySelector('.green');
const red = document.getElementsByClassName('red')[0];
const yellow = document.getElementsByClassName('yellow')[0];
const blue = document.getElementsByClassName('blue')[0];

// Creates the random order
let createOrder = () => {
  let colorIndex = Math.floor(Math.random() * 4);
  order.push(colorIndex);
  clickedOrder = [];

  order.forEach((value, index) => {
    let colorElement = createColorElement(value);
    lightColor(colorElement, Number(index) + 1);
  });
}

// Lights up the next color
let lightColor = (element, time) => {
  time = time * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  }, time);
}

// Checks the order of the clicked colors
let checkOrder = () => {
  clickedOrder.forEach((value, index) => {
    if (value != order[index]) {
      gameOver();
      return;
    }
  });

  if (clickedOrder.length == order.length){
    alert(`Score: ${score}\nYou Win!\nContinue.`);
    nextLevel();
  }
}

// User clicks
let click = (color) => {
  clickedOrder.push(color);
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

}

// Return the color
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
    default:
      break;
  }
}

// Starts a new game
let nextLevel = () => {
  score++;
  createOrder();
}

// Game over
let gameOver = () => {
  alert(`Score: ${score}\nYou Lose!\nTry again.`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Welcome to the Genius Game!\nStarting a new game.');
  score = 0;

  nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();
