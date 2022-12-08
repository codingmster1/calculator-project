//comment
//console.log("hi")
let operator = '';
let previousValue='';
let currentValue='';



document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('.clear');
    let equal = document.querySelector(".equal");

    

    let deleteBtn = document.querySelector('.delete');
    //let deletebtn = del[0]

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
        previousScreen.textContent='';
        currentScreen.textContent = previousValue;
    })

    deleteBtn.addEventListener("click", function(){

        //previousValue = '';
        //currentValue = '';
       //operator = '';
        //del();
        //currentScreen.textContent='';
        //currentValue = '';
        currentScreen.textContent= currentValue.slice(0, -1)
        currentScreen.textContent = previousValue;
        previousScreen.textContent = currentValue;
        //currentScreen.textContent = '';
       // currentScreen.textContent = previousValue;
        //currentScreen.textContent = currentScreen.textContent;
        //currentScreen.textContent = currentScreen.textContent.slice(0, -1)
        //previousValue = Number(previousValue);
        //previousScreen.textContent = currentScreen.textContent.slice(0, -1)
       //calculator.del()
        //calculator.currentScreen();
      })

    

   // deleteBtn.addEventListener("click", function(){

       // del();

       // currentScreen.textContent = previousScreen;
       // previousScreen.textContent = '';
        
    //})

   

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

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if (operator === "^") {
        previousValue **= currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

  function round(num){
   return Math.round(num * 1000) / 1000;
}

//function del(){
    //currentScreen.textContent = currentScreen.textContent.slice(0, -1)
//}
   
  
   
   
   
    
    
    //if (num.textContent.length == 1) {

  // num.textContent = '0';
  //} else (num.textContent = num.textContent = num.textContent.slice(0, -1))
 // current.textContent = previous.textContent
   // .toString()
   // .slice(0, -1)



