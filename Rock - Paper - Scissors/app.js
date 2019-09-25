let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");

function main(){

rock_div.addEventListener("click", function(){
	game("R");
})
paper_div.addEventListener("click", function(){
	game("P");
})
scissors_div.addEventListener("click", function(){
	game("S");
})
}

main();

function getComputerChoice(){
	const choices = ["R", "P", "S"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}


function game(userChoice){

	const ComputerChoice = getComputerChoice(); 

	switch (userChoice + ComputerChoice){
		case "RS":
		case "PR":
		case "SP":
			console.log("You win");
			win(userChoice, ComputerChoice);
		break;
		case "RP":
		case "PS":
		case "SR":
			console.log("You lose");
			lose(userChoice, ComputerChoice);
		break;
		case "RR":
		case "PP":
		case "SS":
			console.log("You Draw");
			draw(userChoice, ComputerChoice);
		break;

	}
}


function win(user, computer){
	
	userScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	ConvertToWordWinning(user, computer);
	document.getElementById(user).classList.add("green-glow");
	setTimeout(function(){ document.getElementById(user).classList.remove("green-glow")}, 300);

}

function lose(user, computer){
	computerScore ++;
	computerScore_span.innerHTML = computerScore;
	ConvertToWordLosing(user, computer);
	document.getElementById(user).classList.add("red-glow");
	setTimeout(function(){ document.getElementById(user).classList.remove("red-glow")}, 300);
	
}


function draw(user, computer){
	ConvertToWordDrawing(user, computer);
	document.getElementById(user).classList.add("grey-glow");
	setTimeout(function(){ document.getElementById(user).classList.remove("grey-glow")}, 300);
	
}



function ConvertToWordWinning(Letter1, letter2){
	if(Letter1 === "R" && letter2 === "S"){
			result_p.innerHTML = "Rock (user) Beats Scissors (Comp), You Win!";
	}
	if(Letter1 === "S" && letter2 === "P"){
			result_p.innerHTML = "Scissors (user) Beats Paper (Comp), You Win!";
	}
	if(Letter1 === "P" && letter2 === "R"){
			result_p.innerHTML = "Paper (user) Beats Rock (comp), You Win!";
	}
}

function ConvertToWordLosing(Letter1, letter2){
	if(Letter1 === "S" && letter2 === "R"){
			result_p.innerHTML = "Scissors (user) Loses to Rock (Comp), You Lose!";
	}
	if(Letter1 === "P" && letter2 === "S"){
			result_p.innerHTML = "Paper (user) Loses to Scissors (Comp), You Lose!";
	}
	if(Letter1 === "R" && letter2 === "P"){
			result_p.innerHTML = "Rock (user) Loses to (comp), You Lose!";
	}
}

function ConvertToWordDrawing(Letter1, letter2){
	if(Letter1 === "R" && letter2 === "R"){
			result_p.innerHTML = "You Draw!";
	}
	if(Letter1 === "S" && letter2 === "S"){
			result_p.innerHTML = "You Draw!";
	}
	if(Letter1 === "P" && letter2 === "P"){
			result_p.innerHTML = "You Draw!";
	}
}


function Reload(){
	location.reload();
}



