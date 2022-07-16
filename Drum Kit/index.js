
document.querySelectorAll("button")[0].addEventListener("click", handleClickW);
document.querySelectorAll("button")[1].addEventListener("click", handleClickA);
document.querySelectorAll("button")[2].addEventListener("click", handleClickS);
document.querySelectorAll("button")[3].addEventListener("click", handleClickD);
document.querySelectorAll("button")[4].addEventListener("click", handleClickJ);
document.querySelectorAll("button")[5].addEventListener("click", handleClickK);
document.querySelectorAll("button")[6].addEventListener("click", handleClickL);

for(var i = 0; i < document.querySelectorAll('.drum').length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    buttonAnimation(buttonInnerHTML);
  });
}

function handleClickW(){
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
}

function handleClickA(){
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
}
function handleClickS(){
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
}
function handleClickD(){
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
}
function handleClickJ(){
  var kick = new Audio('sounds/kick-bass.mp3');
  kick.play();
}
function handleClickK(){
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
}
function handleClickL(){
  var crash = new Audio('sounds/crash.mp3');
  crash.play();
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      handleClickS();
      break;
    case 'd':
      handleClickD();
      break;
    case 'j':
      handleClickJ();
      break;
    case 'k':
      handleClickK();
      break;
    case 'l':
      handleClickL();
      break;
    default:

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
