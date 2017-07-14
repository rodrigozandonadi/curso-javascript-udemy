/*Salário de um funcionário

var nome = "Rodrigo", idade = 35, salBruto = 1000;
console.log("Nome: " + nome + " | Idade: " + idade + " anos | Salário Bruto: " + salBruto + " reais.");

var reajuste = salBruto * 0.38;
console.log("Reajuste: R$ " + reajuste + " reais");

var gratificacao = salBruto * 0.20;
console.log("Gratificação: R$ " + gratificacao + " reais");

var salario = salBruto + reajuste + gratificacao;
console.log("Salario sem os descontos: R$ " + salario + " reais");

var descontos = salario * 0.15;
console.log("Total de descontos: R$ " + descontos + " reais");

var salarioLiquido = salario - descontos;
console.log("Salário Total: R$ " + salarioLiquido + " reais");

//Dias de vida de uma pessoa

function calculaIdade(){

    var anos = document.getElementById("anos").value * 365;
    var meses = document.getElementById("meses").value * 30;
    var dias = document.getElementById("dias").value;

    var total = "O total de dias que esta pessoa viveu é " + (anos + meses + dias);

    document.getElementById("resultado").innerHTML = total;

}

//Gerente de loja

function calculaPreco(){
    
    var preco = document.getElementById("preco").value;
    var entrada = Math.floor(preco / 3) + preco % 3;
    var parcela = Math.floor(preco / 3);

    var totalParcelas = "O produto custa R$ " + preco + 
    ", podendo ser parcelado em 1 entrada de R$ " + 
    entrada.toFixed(2) + 
    " e 2 parcelas fixas de fixas de R$ " + 
    parcela;

    document.getElementById("resultado").innerHTML = totalParcelas;
}

//Salário Líquido

function calculaSalario(){

    var nome = document.getElementById("nome").value;
    var horas = document.getElementById("horas").value;
    var dependentes = document.getElementById("dependentes").value;

    //salário e acrescimo por dependente
    var salarioPorHora = horas * 12;
    var acrescimoDependentes = salarioPorHora * dependentes;
    var salBruto = salarioPorHora + acrescimoDependentes;

    //descontos
    var inss = salBruto * 0.085;
    var ir = salBruto * 0.05;

    //salario total
    var salTotal = salBruto - inss - ir;

    var resultado = "<p>Nome: " + nome + "</p>" +
                    "<p>Salário Bruto: R$ " + salBruto.toFixed(2).replace('.', ',') + "</p>" +
                    "<p>Desconto INSS: R$ " + inss.toFixed(2).replace('.', ',') + "</p>" +
                    "<p>Desconto IR: R$ " + ir.toFixed(2).replace('.', ',') + "</p>" +
                    "<p><strong>Salário Líquido: R$ " + salTotal.toFixed(2).replace('.', ',') + "</strong></p>";


    document.getElementById("resultado").innerHTML = resultado;
}

//Maior Valor

function calculaNumero(){

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 > num2){
        resultado = "O maior número é num1: " + num1;
    }else{
        resultado = "O maior número é num2: " + num2;        
    }

    document.getElementById("resultado").innerHTML = resultado;

}

//Media de quatro notas bimestrais

function calculaMedia(){

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 + nota4)/4;

    if(media >= 7){
        resultado = "As notas do aluno foram:<br /><br />Nota 01: " +
                    nota1.toFixed(1) + " | Nota 02: " + nota2.toFixed(1) + " | Nota 03: " + nota3.toFixed(1) +
                    " | Nota 04: " + nota4.toFixed(1) + ". <p>O aluno foi aprovado com a media " + media.toFixed(1);
    }else{
         resultado = "As notas do aluno foram:<br /><br />Nota 01: " +
                    nota1.toFixed(1) + " | Nota 02: " + nota2.toFixed(1) + " | Nota 03: " + nota3.toFixed(1) +
                    " | Nota 04: " + nota4.toFixed(1) + ". <p>O aluno foi reprovado com a media " + media.toFixed(1);
    }

    document.getElementById("resultado").innerHTML = resultado;

}

//Lados de umm triângulo

function calcularTriangulo(){
	lado1 = parseInt(document.getElementById("lado1").value);
	lado2 = parseInt(document.getElementById("lado2").value);
	lado3 = parseInt(document.getElementById("lado3").value);
	
	
	if((lado1 < lado2 + lado3) && ( lado2 < lado1 + lado3) && ( lado3 < lado1 + lado2)){
			if(( lado1== lado2) && ( lado2== lado3))
				res = "É um triângulo Equilátero";
			else if (( lado1 !=lado2) && ( lado2 != lado3) && ( lado1!= lado3))
				res = "É um triângulo Escaleno";
			else
				res = "É um triângulo Isósceles";
		}else
			res = "Não é Triângulo";
	
	var solucao = 	"<hr>"  +
					"<p>lado 1 = " + lado1 + "</p>" +
					"<p>lado 2 = " + lado2 + "</p>" +
					"<p>lado 3 = " + lado3 + "</p>" +
					"<p>Resultado = " + res + "</p>" 
	
	document.getElementById("resultado").innerHTML = solucao;

}

//Salário de um funcionário

function calcularSalario2(){

    var salario = parseInt(document.getElementById("salario").value);

    var n100 = salario / 100;
    var n50 = n100 / 50;
    var n20 = n50 / 20;
    var n10 = n20 / 10;
    var n5 = n10 / 5;
    var n2 = n5 / 2;
    var n1 = n2 / 1;

    var resultado = "Salário do funcionário: R$ " + salario.toFixed(2) + "<br />" +
                    "Total de cédulas de R$ 100,00: " + n100+ "<br />" +
                    "Total de cédulas de R$ 50,00: " + n50 + "<br />" +
                    "Total de cédulas de R$ 20,00: " + n20 + "<br />" +
                    "Total de cédulas de R$ 10,00: " + n10 + "<br />" +
                    "Total de cédulas de R$ 5,00: " + n5 + "<br />" +
                    "Total de cédulas de R$ 2,00: " + n2 + "<br />" +
                    "Total de cédulas de R$ 1,00: " + n1;

    document.getElementById("resultado").innerHTML = resultado;

}

//Soma de 05 valores

function calcularValor(){

    var valor = parseInt(document.getElementById("valor").value);
    var soma = 0;

    for (var i = 0; i.length < 5; i++) {
        
        soma += valor;
        alert("Insira outro valor");

    }

}*/

