function triangulo(){
	lado1 = parseInt(document.getElementById("val1").value);
	lado2 = parseInt(document.getElementById("val2").value);
	lado3 = parseInt(document.getElementById("val3").value);
	
	
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

