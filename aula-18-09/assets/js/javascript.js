var num1;
var num2;

function pegarValor(){
num1 = Number(document.getElementById("num1").value);
num2 = Number(document.getElementById("num2").value);
}

function somar(){
    pegarValor();
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = resultado;
}
function sub(){
    pegarValor();
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = resultado;
}
function mult(){
    pegarValor();
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = resultado;
}
function div(){
    pegarValor();
    var resultado = num1 / num2;
    document.getElementById("resultado").innerHTML = resultado.toFixed(2);
}
