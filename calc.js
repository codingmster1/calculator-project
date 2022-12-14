//comment
//console.log("hi")
let operator = '';
let previousValue='';
let currentValue='';

//let deleteBtn = document.getElementById('delete')


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('.clear');
    let equal = document.querySelector(".equal");
    let backspace = document.querySelector('.delete');
    
    

    //let deletes = document.querySelector('.delete');
    
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


   // backspace.addEventListener('click', (e) => {

       // handleOperator(e.target.textContent)
        //bs();
        //previousValue ='';
       // currentScreen.textContent='';
       // currentValue='';
        //currentValue=previousValue.textContent;

       // currentScreen.textContent= currentScreen.textContent.toString(e).slice(0, -1)

   // });

    backspace.addEventListener("click", function(){

        let temp;
        if (currentValue === 'You cant divide by 0!'){
        currentValue=0;
        temp = currentValue;
    }

        
        //temp = currentValue.toString().slice(0,-1)

        else {
            temp = currentValue.toString().slice(0,-1)
        }
        
        if (temp ===''|| temp === 0){
            temp = 0;
            currentValue = temp;

            upDateDisplay();


        }
        else {
            currentValue = parseFloat(temp)
            upDateDisplay();

        }
        
function upDateDisplay(){
    currentScreen.textContent = currentValue;
    previousScreen.textContent = previousValue;

}
        
        
        //back();
       // previousValue = '';
       // currentValue = '';
       //operator = '';
        //del();
        //currentScreen.textContent='';
        //currentValue = '';
        //currentScreen.textContent= currentScreen.textContent.toString().slice(0, -1)
        //previousScreen.textContent = previousScreen;
       //previousScreen.textContent = currentValue;
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

function back(backspace){

    currentScreen('backspace', -1);

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



//function bs(){
    //currentScreen.textContent = currentScreen.textContent.slice(0, -1)
    //currentScreen.textContent= currentScreen.textContent.toString().slice(0, -1)

    //num.textContent = '-1';
//}

   
  
   
   
   
    
    
    //if (num.textContent.length == 1) {

  // 
  //} else (num.textContent = num.textContent = num.textContent.slice(0, -1))
 // current.textContent = previous.textContent
   // .toString()
   // .slice(0, -1)



