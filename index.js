// n = [1,2,3,4,5,6]
var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImages = "dice"+ randomnumber1 + ".png";
var randomImageSource = "images/" + randomDiceImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImages = "dice"+ randomnumber2+".png";
var randomImageSource = "images/"+ randomDiceImages;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML ="🚩Play 1 Win";
}
else if (randomnumber1<randomnumber2) {
  document.querySelector("h1").innerHTML = "Play 2 Win🚩";
}
else{
  document.querySelector("h1").innerHTML ="Draw";
}
