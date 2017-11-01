var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var gameLength = 12;
var buttons = document.querySelectorAll("button");
var modeButtons = document.querySelectorAll(".mode");
var pickedColor;
// colorDisplay.innerHTML = pickedColor;

function changeColors(color)
{
  //loop through all squares
  for(i=0 ; i<gameLength; i++)
  //change each color to match given color
    squares[i].style.background = color;
    h1.style.background = color;
}

//Function to return random colors in rgb format
function randomColor()
{
    //Returns randoms rgb string
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return("rgb(" + r + ", " + g + ", " + b + ")");
}

//Function to populate all squares with random colors and pick a
// random color and set it to one of the squares
function newcolors()
{
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i = 0; i<gameLength;i++)
  {
  //add initial colors to squares
  squares[i].style.background = randomColor();
  }


  pickedColor = randomColor();
  //give one of the squares the picked color;
  squares[Math.floor(Math.random()*gameLength)].style.background =
  pickedColor;
  colorDisplay.innerHTML = pickedColor;
  h1.style.background = "steelblue";
}

//Initiate the game with the default game length of 6(Hard)
newcolors(gameLength);

//Event Listener for the New Game/Reset Button
resetButton.addEventListener("click",newcolors);

//Attach Event listeners for the mode buttons
for(var i=0; i<modeButtons.length ; i++){
  modeButtons[i].addEventListener("click" , function(){
    for(var j=0;j<modeButtons.length;j++)
      //Remove selected class from the other mode buttons
      modeButtons[j].classList.remove("selected");
      //Add selected class to the clicked mode
    this.classList.add("selected");
    //Logic for setting the game mode and controlling square visibility
    //For determining which mode is selected and setting appropriate game length
    if(this.textContent == "Easy")
      gameLength = 3;
    else if(this.textContent == "Hard")
      gameLength = 6;
    else
      gameLength = 12;
    //Initiate new game with the updated difficulty/game length
    newcolors();
    //Hide or show the blocks depending on the difficulty
    for(var k=0;k<squares.length;k++){
      if(k<gameLength)
        squares[k].style.display = "block";
      else
        squares[k].style.display = "none";

    }
  });
}


//Add click listeners and core logic of gameplay
for(var i = 0; i<squares.length;i++)
{
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color of clicked to picked color
    if(clickedColor === pickedColor)
      {messageDisplay.textContent = "Congratulations!";
    changeColors(clickedColor);
    resetButton.textContent = "Play Again?";
    // changeButtonColorsWin();
    }
    else
      {this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";}
  });
}

// function changeButtonColorsWin()
// {
//   for(var i=0;i<buttons.length;i++){
//     buttons[i].style.background = pickedColor;
//   }
// }

