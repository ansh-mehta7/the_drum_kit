
  for (let index = 0; index < document.querySelectorAll("button.drum").length; index++) {
    
    //detecting the button press
    document.querySelectorAll("button.drum")[index].addEventListener("click", function () {
      let drumCharacter=this.innerHTML;
        playSound(drumCharacter);
        Animation(drumCharacter);
      });
    }

    
// detecting the keyboard press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  Animation(event.key);
});


    // making the playsound function both for click and keypress
    function playSound(drumCharacter) {
      switch (drumCharacter) {
        case "w":
          var audio1 = new Audio("sounds/crash.mp3");
  
          audio1.play();
          break;
        case "a":
          var audio2 = new Audio("./sounds/kick-bass.mp3");
  
          audio2.play();
          break;
        case "s":
          var audio3 = new Audio("./sounds/snare.mp3");
  
          audio3.play();
          break;
        case "d":
          var audio4 = new Audio("./sounds/tom-1.mp3");
  
          audio4.play();
          break;
        case "j":
          var audio5 = new Audio("./sounds/tom-2.mp3");
  
          audio5.play();
          break;
        case "k":
          var audio6 = new Audio("./sounds/tom-3.mp3");
  
          audio6.play();
          break;
        case "l":
          var audio7 = new Audio("./sounds/tom-4.mp3");
  
          audio7.play();
          break;
  
        default:
          console.log("not admissible");
          break;
      }
    }
    // adding animation to the buttons 
    function Animation(detectedKey) {
      let detectedButton = document.querySelector("." + detectedKey);
      detectedButton.classList.add("pressed");
  // using the settimeout functiono
      setTimeout(function() {
          detectedButton.classList.remove("pressed");
      }, 100);
  }
  