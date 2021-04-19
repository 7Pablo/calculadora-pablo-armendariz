var num1;
var num2;
var resultado;

function suma(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) + parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function resta(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) - parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function multi(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) * parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function divid(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) / parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function potencia(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = Math.pow(num1, num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}