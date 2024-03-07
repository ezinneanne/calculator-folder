const buttons = document.querySelectorAll("button");

const mainScreen = document.querySelector(".screen");

buttons.forEach(button => {
    button.addEventListener("click", displayText);
});

function displayText(event) {
    const buttonValue = event.target.value;

    if (buttonValue === "=") {
      if (mainScreen.value !== "") {
        mainScreen.value = eval(mainScreen.value);
      }
    }
    else if (buttonValue === "delete") {
      mainScreen.value = mainScreen.value.substring(0, mainScreen.value.length - 1);
    }
    else if (buttonValue === "clear") {
        mainScreen.value = "";
    }
    else {
      mainScreen.value += buttonValue;   
    }
}