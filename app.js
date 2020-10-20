const container = document.querySelector("#container");

const gItems = document.querySelectorAll('.grid-item')

const randColourPicker = document.getElementById("randColour");

const clear = document.getElementById("clear")

let isRandOn = false;

// Create board

function makeRows(rows, cols) {
  container.innerHTML = "";
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
  fillEffect()

};

makeRows(16, 16);

//Add Fill effect to grid
function fillEffect(){
  document.querySelectorAll('.grid-item').forEach((item => {
    item.addEventListener("mouseover", fill)
  }));
}

function fill(e){
  if (isRandOn === true){
    randomColourGenerator()
    e.target.style.backgroundColor = rColour;
  } else {
  e.target.style.backgroundColor = "blue";
}
};

// Resetboard
function resetBoard(){
  let rows = prompt("How big would you like the sketch pad? (Must be 100 or lower)?");
  while (rows <= 0 || rows > 100 || rows === null || rows === "" || (isNaN(rows) === true)){
    rows = prompt("How big would you like the sketch pad? (Must be 100 or lower)?");
  }
  cols = rows;
  makeRows(rows, cols);

};

// Set randomcolourpicker to true
randColourPicker.addEventListener('click', randomColour )
function randomColour(e){
  if (isRandOn === false){
    isRandOn = true
  } else if (isRandOn === true) {
    isRandOn = false;
  }
};

// Generates randomcolour for fillEffect

function randomColourGenerator(){
  let randomColour = Math.floor(Math.random()*16777215).toString(16);
  rColour = "#" + randomColour;
  return rColour;
};

// Clear board

clear.addEventListener('click', clearBoard)
function clearBoard(e){
document.querySelectorAll('.grid-item').forEach((item => {
  item.style.backgroundColor = "yellow"
  item.addEventListener("mouseover", fill)
}
));

};
