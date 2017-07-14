var a = 2, b = 3;

function somar(){
    return alert("A soma de a e b é: " + (a + b)) ;
}

function subtrair(valor1, valor2){
    console.log("Quantidade de parametros:" + arguments.length);
    console.log("O primeiro parametro é: " + arguments[0]);
    return valor1 - valor2;
}

console.log(subtrair(5, 4));

