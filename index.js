$(function()
{
	$("button").click(function()
	{
		var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
		var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
		$(".img1").attr("src",randomImageSource1);

		var randomNumber2 = Math.floor(Math.random() * 6) + 1;
		var randomImageSource2 = "images/dice" + randomNumber2 + ".png";		
		$(".img2").attr("src",randomImageSource2);

		if (randomNumber1 > randomNumber2) 
		{
			$("h1").html("Player 1 Wins!");
		}
		else if (randomNumber2 > randomNumber1) 
		{
			$("h1").html("Player 2 Wins!");
		}
		else 
		{
			$("h1").html("Draw!");
		}
	});
});