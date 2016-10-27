$(document).ready(function(){
	var score = 0;
	//Selecting and placing Random Number for .randomNumber in html.
	var min = 19;
	var max = 120;
	var randomNum = Math.round(Math.random() * (max - min + 1)) + min;
	$(".randomNum").html("Desired Score: " + randomNum);

	//Selecting and assigning random values to Rupees in html.
		var greenVal = Math.round(Math.random() * (11 + 1)) + 1;
		var blueVal = Math.round(Math.random() * (11 + 1)) + 1;
		var redVal = Math.round(Math.random() * (11 + 1)) + 1;
		var yellowVal = Math.round(Math.random() * (11 + 1)) + 1;
		console.log(greenVal);
		console.log(blueVal);
		console.log(redVal);
		console.log(yellowVal);

		$(".greenbtn").val(greenVal);
		$(".bluebtn").val(blueVal);
		$(".redbtn").val(redVal);
		$(".yellowbtn").val(yellowVal);

		//click function for buttons
		$(".greenbtn").click(function(){
			score = greenVal;
			score = score + greenVal;
			$(".score").html("Score: " + score);

		})

});
