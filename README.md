# Drum Kit 🥁

A simple Drum Kit web application that allows users to play drum sounds by pressing corresponding keys on the keyboard.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Demo](#demo)
- [Styling](#styling)
- [JavaScript](#javascript)
- [License](#license)

## Features

- Press keys (w, a, s, d, j, k, l) to play different drum sounds.
- User-friendly interface for a fun and interactive experience.

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/drum-kit.git
    ```

2. Open the `index.html` file in your web browser.

3. Press the designated keys (w, a, s, d, j, k, l) to trigger drum sounds.

## Installation

No installation is required. Just clone the repository and open the HTML file in your browser.

## Demo

You can see a live demo of the Drum Kit [here](#).

[//]: # (Add the live demo link when available)

## Styling

The Drum Kit is styled using CSS for a visually appealing experience.

### JavaScript

The functionality of the Drum Kit is implemented using JavaScript. The code below handles button clicks, keyboard presses, plays sounds, and adds animations to the buttons.

```javascript
for (let index = 0; index < document.querySelectorAll("button.drum").length; index++) {
  // Detecting the button press
  document.querySelectorAll("button.drum")[index].addEventListener("click", function () {
    let drumCharacter = this.innerHTML;
    playSound(drumCharacter);
    Animation(drumCharacter);
  });
}

// Detecting the keyboard press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  Animation(event.key);
});

// Making the playSound function for both click and keypress
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

// Adding animation to the buttons
function Animation(detectedKey) {
  let detectedButton = document.querySelector("." + detectedKey);
  detectedButton.classList.add("pressed");
  // Using the setTimeout function
  setTimeout(function () {
    detectedButton.classList.remove("pressed");
  }, 100);
}
