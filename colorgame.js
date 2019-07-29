// var colors = [	
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 255)"
// ];

var numofsquares = 3;
var colors;
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.getElementsByClassName("mode");
// var hardMode = document.getElementById("hard");
//
// colorDisplay.textContent = pickedColor;
// for(var i=0; i<squares.length; i++){
// 	if(colors[i])
// 		squares[i].style.backgroundColor = colors[i];
// 	else
// 		squares[i].style.display = "none";
// }
reset();
/*ADDING CLICK FUNCTIONALITY*/
for(var j=0; j<squares.length; j++){

		squares[j].addEventListener("click",function(){
		if(this.style.backgroundColor != pickedColor){
			messageDisplay.textContent = "Try again";
			this.style.backgroundColor = "#232323";
		}
		else{
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "PLAY AGAIN ?"
			for(var i=0; i<squares.length; i++){
				// if(colors[i])
					squares[i].style.backgroundColor = pickedColor;
				// else
					// squares[i].style.display = "none";
			}
			h1.style.backgroundColor = pickedColor;
		}
	});

}


/*FUNCTION TO PICK A RANDOM COLOR FROM THE COLORS ARRAY*/
function pickColor(){

	return colors[Math.floor((Math.random() * colors.length))];
}

/*GENERATE RANDOM COLORS FOR COLORS ARRAY*/
function generateRandomColors(num){

	//make an array
	var arr = [];
	//generate colors for array num times

	for(var i=0; i<num; i++){

		var red = Math.floor(Math.random()*256);
		var green = Math.floor(Math.random()*256);
		var blue = Math.floor(Math.random()*256);
		arr[i] = "rgb("+red+", "+green+", "+blue+")";
	}

	//return array
	return arr;
	
}

/*STRIPE BAR*/

//RESET BUTTON (NEW COLORS, PLAY AGAIN) 
resetButton.addEventListener("click",function(){
// 	//generate random colors for colors array
// 	colors = generateRandomColors(numofsquares);
// 	//pick a new index
// 	pickedColor = pickColor();
// 	//color display
// 	colorDisplay.textContent = pickedColor;
// 	//assign colors to the new squares
// 	for(var i=0; i<squares.length; i++)
// 		squares[i].style.backgroundColor = colors[i];
// 	//change background of h1
// 	h1.style.background = "steelblue";
// 	//change button text to new colors
// 	resetButton.textContent = "NEW COLORS";
// 	// resetButton.classList.add("selected");
// 	messageDisplay.textContent = "";
	reset();
});

function reset(){

	colors = generateRandomColors(numofsquares);
	//pick a new index
	pickedColor = pickColor();
	//color display
	colorDisplay.textContent = pickedColor;
	//assign colors to the new squares
	for(var i=0; i<squares.length; i++){
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
	//change background of h1
	h1.style.background = "steelblue";
	//change button text to new colors
	resetButton.textContent = "NEW COLORS";
	// resetButton.classList.add("selected");
	messageDisplay.textContent = "";
}

//EASY AND HARD BUTTONS

for(var i=0; i<modes.length; i++){

	modes[i].addEventListener("click",function(){
		this.textContent === "EASY" ? numofsquares = 3 : numofsquares = 6;
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		reset();
		if(this.textContent === "HARD")
		{
			// alert("eureka");
			for(var j=0; j<squares.length; j++)
				squares[j].style.display = "block";
		}			
	});
}
// easyMode.addEventListener("click",function(){
// 	numofsquares = 3;
// 	this.classList.add("selected");
// 	hardMode.classList.remove("selected");	
// 	// resetButton.classList.remove("selected");
// 	colors = generateRandomColors(numofsquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.background = "steelblue";
// 	resetButton.textContent = "NEW COLORS";
// 	messageDisplay.textContent = "";

// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i])
// 			squares[i].style.backgroundColor = colors[i];
// 		else
// 			squares[i].style.display = "none";
// 	}
// });

// hardMode.addEventListener("click",function(){
// 	numofsquares = 6;
// 	this.classList.add("selected");
// 	easyMode.classList.remove("selected");	
// 	// resetButton.classList.remove("selected");
// 	colors = generateRandomColors(numofsquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.background = "steelblue";
// 	resetButton.textContent = "NEW COLORS";
// 	messageDisplay.textContent = "";

// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		if(squares[i].style.display == "none")
// 			squares[i].style.display = "block";
// 	}		
// });