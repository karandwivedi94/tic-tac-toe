var totalClicks = 0;
$('.logo').hide();
$('.gameresult').hide();
var allGridItems = document.querySelectorAll('[matrix]');
allGridItems.forEach(gridItem => {
gridItem.addEventListener('click',playerClick,{once:false})
})
function playerClick (e){
    const cell = e.target;
    totalClicks ++;
    if (totalClicks % 2 === 0){
        cell.innerText = ("X")
        cell.style.background = "white"
        cell.style.color = "white"  
        $('.logo').hide();
        $('.logo2').show();
    }
    if (totalClicks % 2 !== 0){
        cell.innerHTML = "O"
        cell.style.background ="red"
        cell.style.color = "red" 
        $('.logo2').hide();
        $('.logo').show();
    }
    gameResult();
    drawFunction();
}
    var Licks = 0;
    let sum = 0;
const gameResult = function(){
    sum++;
    let x = "Ryu Wins!!"
    let y = "Ken Wins!!"
    if ($("#box1").html() === 'X' && $("#box2").html() === 'X' && $("#box3").html() === 'X'){
         $('#result').html(`${x}`);  
         $('.gameresult').show();
         let yy = console.count ("X Wins")
         displayPlayer1Win();
    }
    if ($("#box4").html() === 'X' && $("#box5").html() === 'X' && $("#box6").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box7").html() === 'X' && $("#box8").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'X' && $("#box4").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box2").html() === 'X' && $("#box5").html() === 'X' && $("#box8").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box3").html() === 'X' && $("#box6").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'X' && $("#box5").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box3").html() === 'X' && $("#box5").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`);
         $('.gameresult').show(); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'O' && $("#box2").html() === 'O' && $("#box3").html() === 'O'){
        $('#result').html(`${y}`); 
        $('.gameresult').show(); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box4").html() === 'O' && $("#box5").html() === 'O' && $("#box6").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box7").html() === 'O' && $("#box8").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box4").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box2").html() === 'O' && $("#box5").html() === 'O' && $("#box8").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box6").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box5").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box5").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`);
         $('.gameresult').show();  
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
};

document.getElementById("newroundbutton").onclick = function() {newRoundFunction()};
function newRoundFunction() {
    const boxArray = ['box1','box2','box3','box4','box5','box6','box7','box8','box9']
    for(i=0;i<boxArray.length;i++){
    document.getElementById(boxArray[i]).innerHTML = (" ");
    document.getElementById(boxArray[i]).style.background= "";
    }
    totalClicks = 0;
    displayRoundNumber();
    $('.gameresult').hide();
}

const drawFunction = function(){
    let x = "X Wins"
    let y = "O Wins"
    if (totalClicks %9 === 0 && $('#result').html()!==x && $('#result').html()!==y ){
        $('#result').html(`It's a draw`)
    }
}
//Appending score
var player1Wins = 0;
function displayPlayer1Win()
{
    player1Wins++;
    $('#player1result').html(player1Wins);
}
var player2Wins = 0;
function displayPlayer2Win()
{
    player2Wins++;
    $('#player2result').html(player2Wins);
}
var numberOfRounds = 1;
function displayRoundNumber(){
    numberOfRounds++;
    $('#roundnumber').text(`Round ${numberOfRounds}`)
}

// Things to build(Importance >>> Least)
// Make code Dryer where repating yourslef, add loops etc
// Complete ReadMe file
// CSS STYLING
// centre playing area, bckground basic styling
// add hover / show 
// Add images to the X and O (which can be changed later)
// // new round shouldn't show select, maybe it should be blank? IMPORTANT
// Street Fighter themed


