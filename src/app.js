import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



function getRandomItem(array){
  return array[Math.floor(Math.random() * array.length)];
}


window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let randomWho = getRandomItem(who)
  let randomAction = getRandomItem(action)
  let randomWhat = getRandomItem(what)
  let randomWhen = getRandomItem(when)
  let excuse = document.getElementById("excuse")
  excuse.innerText = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen
};
