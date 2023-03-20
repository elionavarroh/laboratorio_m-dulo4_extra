//INPUTS
var numberA = () => parseInt(document.getElementById("number1").value);
var numberB = () => parseInt(document.getElementById("number2").value);

//FUNCIONES DE LAS OPERACIONES
var sum = () => numberA() + numberB();

var rest = () => numberA() - numberB();

var multiply = () => numberA() * numberB();

var dividy = () => numberA() / numberB();

//RESULTADOS
var showresultsum = () => { 
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, hay que introducir dos números positivos para realizar la operación";
    } else { 
        document.getElementById("result").innerText = sum();
    }
  };

var showresultrest = () => { 
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, hay que introducir dos números positivos para realizar la operación";
    } else { 
        document.getElementById("result").innerText = rest();
    }
  };

var showresultmultiply = () => { 
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, hay que introducir dos números positivos para realizar la operación";
    } else { 
        document.getElementById("result").innerText = multiply();
    }
  };

var showresultdividy = () => { 
    if (isNaN(numberA()) || isNaN(numberB())) {
        document.getElementById("result").innerText = "Error, hay que introducir dos números positivos para realizar la operación";
    } else { 
        document.getElementById("result").innerText = dividy();
    }
  };

//EVENTOS
document.getElementById("sum").addEventListener("click", showresultsum);

document.getElementById("rest").addEventListener("click", showresultrest);

document.getElementById("multiply").addEventListener("click", showresultmultiply);

document.getElementById("dividy").addEventListener("click", showresultdividy);
