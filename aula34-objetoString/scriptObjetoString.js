var str = "Rodrigo Zan - JavaScript Developer";
var str1 = " - Curso ", str2 = "de Node.js ", str3 = "gratuito.";


var letra = str.charAt(10);
var letra2 = str[5];
var codigoCaracter = str.charCodeAt(2);//código ASCII
var procuraCaracter = str.indexOf("Rod");
var procuraUltimoCaracter = str.lastIndexOf("a", 22);//procura a partir da última posiçao
var comecaCom = str.startsWith("R");
var terminaCom = str.endsWith('r');
var outroComecaCom = str.startsWith("Z", 7);
var concatenando = str.concat(str1, str2, str3);
var comparando = str.localeCompare(str1);// se for igual mostra 0, se for diferente mostra 1
var transformaEmArray = concatenando.split(' ');
var subString1 = str.slice(0, 5);
var subString2 = str.substring(5);
var caixaAlta = str.toUpperCase();
var letrasMinusculas = str.toLowerCase();
var mudandoCaracteres = str.replace('-', '|')



console.log(letrasMinusculas);