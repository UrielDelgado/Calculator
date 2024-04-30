"use strict"

window.onload = init();

function init(){
    buttonAdd();

}

function buttonAdd(){
    let number1 = Number(document.getElementById('number1Feild').value);
    let number2 = Number(document.getElementById('number2Feild').value);
    let result = number1 + number2;
    let answer = document.getElementById('answerFeild');
    answer.value = result;
}
function buttonsubtract(){
    let number1 = Number(document.getElementById('number1Feild').value);
    let number2 = Number(document.getElementById('number2Feild').value);
    let result = number1 - number2;
    let answer = document.getElementById('answerFeild');
    answer.value = result;
}
function buttonmultiply(){
    let number1 = Number(document.getElementById('number1Feild').value);
    let number2 = Number(document.getElementById('number2Feild').value);
    let result = number1 * number2;
    let answer = document.getElementById('answerFeild');
    answer.value = result;
}
function buttondivide(){
    let number1 = Number(document.getElementById('number1Feild').value);
    let number2 = Number(document.getElementById('number2Feild').value);
    let result = number1 / number2;
    let answer = document.getElementById('answerFeild');
    answer.value = result;
}