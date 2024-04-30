"use strict";

function displayMessage() {
  const messageDiv = document.getElementById("messageDiv");
  //display the innerText (innerHTML), replaces console.log
  messageDiv.innerHTML = "Hello World, this is Leslie!";
}

function displayFood() {
  const foodDiv = document.getElementById("foodDiv");
  //display the innerText (innerHTML), replaces console.log
  foodDiv.innerHTML = "My favorite food is Asian Food!";
}

let items = 0;

function addToCart() {
  items = items + 1;
  // let item += 1;
  document.getElementById("itemCount").innerHTML = items;
}

// displayMessage(); // call or run this piece of code

function grabData() {
  let myNumber = Number(document.getElementById("mynumber").value);
  let myNumber2 = Number(document.getElementById("mynumber2").value);
  return [myNumber, myNumber2];
}

function DisplayData(_result) {
  document.getElementById("result").innerHTML =
    "<h1><span class='bold-large'>" + _result + "</h1></span>";
}
function buttonAdd() {
  // This stores the data as a string of text

  //The text of the input will be stored in the variable myNumber and then displayed in the alert
  let numbers = grabData();

  let result = numbers[0] + numbers[1];
  alert(result);
  //Display it in element, on the screen so we use innerhtml
  DisplayData(result);
}

function buttonSub() {
  let numbers = grabData();
  //let myNumber = number[0];
  //let mynumer2 = number[1];
  let result = numbers[0] - numbers[1];

  DisplayData(result);
}

function buttonMulti() {
  grabData();

  let result = myNumber * myNumber2;
  DisplayData(result);
}

function buttonDiv() {
  let myNumber = Number(document.getElementById("mynumber").value);
  let myNumber2 = Number(document.getElementById("mynumber2").value);

  let result = myNumber / myNumber2;
  DisplayData(result);
}
