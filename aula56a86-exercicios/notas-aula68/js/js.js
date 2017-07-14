function nota(){
	nome = document.getElementById("nome").value;
	nota1 = parseInt(document.getElementById("val1").value);
	nota2 = parseInt(document.getElementById("val2").value);
	nota3 = parseInt(document.getElementById("val3").value);
	nota4 = parseInt(document.getElementById("val4").value);
	
	media = (nota1 + nota2 + nota3 + nota4)/4;
	if(media > 7)
			res = "Aprovado com média " + media;
		else
			res = "Reprovado com média " + media;
	
	var solucao = 	"<hr><p>Nome: " + nome + "</p>" +
					"<p>Nota 1 = " + nota1 + "</p>" +
					"<p>Nota 2 = " + nota2 + "</p>" +
					"<p>Nota 3 = " + nota3 + "</p>" +
					"<p>Nota 4 = " + nota4 + "</p>" +
					"<p>Média = " + media.toFixed(2) + "</p>" +
					"<p>Resultado = " + res + "</p>" 
	
	document.getElementById("resultado").innerHTML = solucao;

}

