import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRndInteger (min, max){
 return Math.floor(Math.random() * (max - min)) + min;
}
   
function randomIcon (){
  let icons = ["♦", "♥", "♠", "♣"];
  return icons [getRndInteger (0, icons.length)];
}

function randomNumber () {
  let randomNumber =[   "2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  return randomNumber[getRndInteger(0, randomNumber.length)];
}

function randomCardGen (){
  const icon = randomIcon();
  const num = randomNumber();

  const number = document.getElementById("number");
  const iconTop = document.getElementById("iconTop");
  const iconBottom = document.getElementById("iconBottom");

  number.innerHTML= num;
  iconTop.innerHTML= icon;
  iconBottom.innerHTML= icon;

  number.classList.remove("textRed", "textBlack");
  iconTop.classList.remove("textRed", "textBlack");
  iconBottom.classList.remove("textRed", "textBlack");

  if (icon==="♥" || signo === "♦"){
    number.classList.add("textRed");
    iconTop.classList.add("textRed");
    iconBottom.classList.add("textRed");
  } 
  else {
    number.classList.add("textBlack");
    iconTop.classList.add("textBlack");
    iconBottom.classList.add("textBlack");
  }
}

window.onload = randomCardGen;

document.querySelector("#refresh").addEventListener("click",randomCardGen)
