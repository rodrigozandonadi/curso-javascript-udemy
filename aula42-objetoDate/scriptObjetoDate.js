var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var hor = data.getHours();
var min = data.getMinutes();
var sec = data.getSeconds();

var horaCompleta = hor + ":" + min + ":" + sec;
var diaDaSemana = "Hoje é o " + data.getDay() + "º dia da semana";
var dataCompleta = dia + "/" + mes + "/" + ano;

var arrayDia = new Array(7);
arrayDia[0] = "Domingo";
arrayDia[1] = "Segunda";
arrayDia[2] = "Terça";
arrayDia[3] = "Quarta";
arrayDia[4] = "Quinta";
arrayDia[5] = "Sexta";
arrayDia[6] = "Sábado";

var arrayMes = new Array(12);
arrayMes[0] = "Janeiro";
arrayMes[1] = "Fevereiro";
arrayMes[2] = "Março";
arrayMes[3] = "Abril";
arrayMes[4] = "Maio";
arrayMes[5] = "Junho";
arrayMes[6] = "Julho";
arrayMes[7] = "Agosto";
arrayMes[8] = "Setembro";
arrayMes[9] = "Outubro";
arrayMes[10] = "Novembro";
arrayMes[11] = "Dezembro";

var dataExtensa = "Hoje é " + arrayDia[3] + " - feira. Estamos no mês de " + arrayMes[5] + " do ano de " + ano;

console.log(horaCompleta);
console.log(dataCompleta);
console.log(diaDaSemana);
console.log(arrayDia);
console.log(dataExtensa);