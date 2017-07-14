var num = 50;
var str = "50";
var numeroDecimal = 15.5648971;

var con = Number(str);//convertendo string em número
var txt = num.toString();
var tipoDaVariavael = typeof txt;
var maiorNumero = Number.MAX_VALUE;//maior número que o JavaScript consegue trabalhar
var menorNumero = Number.MIN_VALUE;//menor número que o JavaScript consegue trabalhar
var decimal = numeroDecimal.toFixed(2);//deixa o número com apenas duas casas decimais
var precision = numeroDecimal.toPrecision(4);//deixa o número com quatro números precisos
var exponential = numeroDecimal.toExponential(4);//transforma o número em forma expoente

console.log(decimal);