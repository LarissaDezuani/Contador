//currentNumberWrapper = span = numero atual

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    //innerHTML = que o html que esta dentro dele e ai
    //quando o html q esta dentro inicia como  = 0
    //vai mudar para o numero apartir deste calculo 
    
    if(currentNumber >= 0){
        document.getElementById('currentNumber').style.color = 'blue'
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red'
    }
}


