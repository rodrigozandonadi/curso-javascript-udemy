//if

var nota = 3, resultado;

if (nota <= 6){
    if (nota >= 5){
        resultado = "Recuperação";
    }else{
        resultado = "Reprovado";
    }
}else{
    resultado = "Aprovado";
}

console.log(resultado);

//outra maneira de usar if em javascript

var nota2 = 5;
var resultado2 = (nota2 >= 7)? "Aprovado" : "Reprovado";

console.log(resultado2);

//swith

var idade = 15;

switch (idade){
    case 10:
        console.log("criança");
        break;
    case 15:
        console.log("adolescente");
        break;
    case 20:
        console.log("jovem");
        break;
}

//for

for (var index = 0; index <= 10; index++) {
    console.log(index);
    
}