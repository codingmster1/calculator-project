//comment
//console.log("hi")
let operator = '';
let previousValue='';
let currentValue='';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('.clear');
    let equal = document.querySelector(".equal");


    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    numbers.forEach((number) => number.addEventListener("click", function(e){
          handleNumber(e.target.textContent)
          currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){

        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + "" + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        answer();
    })

})

function handleNumber(num){
    if(currentValue.length <= 10){
    currentValue += num;
    }
}

function handleOperator(op){
    operator= op;
    previousValue = currentValue;
    currentValue="";
}

function answer(){

}
