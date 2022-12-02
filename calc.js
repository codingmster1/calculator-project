//comment
//console.log("hi")
let operator = '0';
let displayValue='';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('#CR');
    let equal = document.querySelector(".equal");


    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    numbers.forEach((number) => number.addEventListener("click", function(e){
          handleNumber(e.target.textContent)
    }))



})

function handleNumber(num){
displayValue += num;
}


