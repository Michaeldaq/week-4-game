

$(document).ready(function(){
	var randomNum = 0;
	var mainScore = 0;
	var min = 0;
	var max = 0;
	var greenVal = 0;
	var blueVal = 0;
	var redVal = 0;
	var yellowVal = 0;
	//function for wining or losing the game
	function reset(){
		randomScore();
		randomVal();
		mainScore = 0;
		$('.score').text('Score: ' + mainScore);

	}
	function winLoss(){
		if (mainScore === randomNum){
				reset();
				alert("You Win");

			} else if (mainScore > randomNum){
				reset();
				alert('You Lose');
			} else {
				// do nothing
			}
	}
	//Selecting and placing Random Number for .randomNumber in html.
	function randomScore(){
	min = 0;
	max = 0;
	min = 19;
	max = 120;
	randomNum = Math.round(Math.random() * (max - min + 1)) + min;
	$(".randomNum").html("Desired Score: " + randomNum);
	}

	//Selecting and assigning random values to Rupees in html.
	function randomVal(){
		greenVal=0;
		blueVal=0;
		redVal=0;
		yellowVal=0;
		greenVal = Math.round(Math.random() * (11 + 1)) + 1;
		blueVal = Math.round(Math.random() * (11 + 1)) + 1;
		redVal = Math.round(Math.random() * (11 + 1)) + 1;
		yellowVal = Math.round(Math.random() * (11 + 1)) + 1;
		$(".greenbtn").val(greenVal);
		$(".bluebtn").val(blueVal);
		$(".redbtn").val(redVal);
		$(".yellowbtn").val(yellowVal);
}

	randomScore();
	randomVal();

		//click function for buttons
		$(".greenbtn").click(function(){
			mainScore = mainScore + greenVal;
			$(".score").text("Score: " + mainScore);
			winLoss();
		});
		$(".bluebtn").click(function(){
		 mainScore = mainScore + blueVal;
			$(".score").text("Score: " + mainScore);
			winLoss();
		});
		$(".redbtn").click(function(){
			mainScore = mainScore + redVal;
			$(".score").text("Score: " + mainScore);
			winLoss();
		});

		$(".yellowbtn").click(function(){
			mainScore = mainScore + yellowVal;
			$(".score").text("Score: " + mainScore);
			winLoss();
		});
});