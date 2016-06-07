$(document).ready(function(){

var wins = 0;
var losses = 0;
var playerNum = 0;

var ruby = Math.floor((Math.random() * 10) + 1);
var sapphire = Math.floor((Math.random() * 10) + 1);
var diamond = Math.floor((Math.random() * 10) + 1);
var emerald = Math.floor((Math.random() * 10) + 1);
var compGuess = -1;
init();

function getCompGuess(){
 	return Math.floor((Math.random() * 50) + 1);
}

function init(){
	ruby = Math.floor((Math.random() * 10) + 1);
	sapphire = Math.floor((Math.random() * 10) + 1);
	diamond = Math.floor((Math.random() * 10) + 1);
	emerald = Math.floor((Math.random() * 10) + 1);
	compGuess = Math.floor((Math.random() * 50) + 1);//getCompGuess();
	playerNum = 0;
	$('#compNum').val(compGuess);
	$('#totalScore').html(playerNum);
}

$('#compNum').val(compGuess);


	$('#Ruby').on('click', function(){
		
		playerNum = playerNum + ruby;
		$('#totalScore').html('<p>' + playerNum +'</p>');
		$('#totalScore').click();
	});

	$('#Sapphire').on('click', function(){
		
		playerNum = playerNum + sapphire;
		//$('#totalScore').val(playerNum);
		$('#totalScore').html('<p>' + playerNum +'</p>');
		$('#totalScore').click();
	});

	$('#Diamond').on('click', function(){
		
		playerNum = playerNum + diamond;
		//$('#totalScore').val(playerNum);
		$('#totalScore').html('<p>' + playerNum +'</p>');
		$('#totalScore').click();

	});

	$('#Emerald').on('click', function(){
		
		playerNum = playerNum + emerald;
		//$('#totalScore').val(playerNum);
		$('#totalScore').html('<p>' + playerNum +'</p>');
		$('#totalScore').click();
	});

	$('#totalScore').on('click', function(){
	if (playerNum === compGuess) {
		wins++;
		$('#wins').html(wins);
		init();
	} else if (playerNum > compGuess){
		losses++;
		$('#losses').html(losses);
		init();
	}else{}
	});

	document.querySelector('#compNum').innerHTML = '<p>' + compGuess + '</p>';
	document.querySelector('#totalScore').innerHTML = '<p>' + playerNum + '</p>';
	document.querySelector('#wins').innerHTML = wins ;
	document.querySelector('#losses').innerHTML = losses ;
});

/*












$(document).ready(function() {

//Global Variables
var computerNumber = 0;
var totalScore = 0;
var winCount = 0;
var loseCount = 0;
var savedNum1 = Math.floor(Math.random() * 12) + 1;
var savedNum2 = Math.floor(Math.random() * 12) + 1;
var savedNum3 = Math.floor(Math.random() * 12) + 1;
var savedNum4 = Math.floor(Math.random() * 12) + 1;

//Click Functions

$("#green").click(function() {
  totalScore=totalScore+savedNum1;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

$("#blue").click(function() {
  totalScore=totalScore+savedNum2;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#purple").click(function() {
  totalScore=totalScore+savedNum3;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#yellow").click(function() {
  totalScore=totalScore+savedNum4;
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

//Main Process
newGame();

function newGame() {
totalScore = 0; 
computerNumber =  Math.floor(Math.random() * (102) + 19);
savedNum1 = Math.floor(Math.random() * 12) + 1;
savedNum2 = Math.floor(Math.random() * 12) + 1;
savedNum3 = Math.floor(Math.random() * 12) + 1;
savedNum4 = Math.floor(Math.random() * 12) + 1;
$("#compNum").html(computerNumber);
$("#scoreNum").html(totalScore);
};


function scoreCheck() {
  if (totalScore==computerNumber){
    winCount++;
    $("#winCount").html(winCount);
    $("#message").html("You won!");
    newGame();
  }else if(totalScore>computerNumber){
    loseCount++;
    $("#loseCount").html(loseCount);
    $("#message").html("You lost");
    newGame();
  }
}
  
});*/