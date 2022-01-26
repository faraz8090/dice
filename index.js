var randomNumber1 = Math.floor((Math.random()*6))+1;
var imageSource1 = "images/dice"+randomNumber1+".png";
document.getElementById("player-1").setAttribute("src", imageSource1);

var randomNumber2 = Math.floor((Math.random()*6))+1;
var imageSource2 = "images/dice"+randomNumber2+".png";
document.getElementById("player-2").setAttribute("src", imageSource2);

if(randomNumber1>randomNumber2) {
  document.getElementById("game-title").innerHTML = "Faraz Won, Misbah is a Dumbo🤣";
}
else if (randomNumber1<randomNumber2) {
    document.getElementById("game-title").innerHTML = "Misbah accidently won";
}
else{
  document.getElementById("game-title").innerHTML = "It's a draw!";
}
