var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    //alert("clicked a square");
  var clickedColor = this.style.background;

  if(clickedColor === pickedColor){
    messageDisplay.textContent = "correct";
    changeColors(clickedColor);
  }  else{
      this.style.background = "#232323";
      messageDisplay.textContent="try again";
    }
  });
}

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;

  }
}
function  pickColor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}
function randomColor(){
  var r= Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b= Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
