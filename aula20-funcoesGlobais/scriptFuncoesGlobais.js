console.log(isFinite(10));
console.log(isFinite("1010"));
console.log(isFinite("Rodrigo"));
console.log(isFinite("Rodrigo Zan 456"));

console.log(isNaN(10));
console.log(isNaN("Rodrigo"));

console.log(Number(10));
console.log(typeof(Number(10)));
console.log(typeof(Number("10")));
console.log(typeof(Number("Rodrigo")));

console.log(typeof(parseFloat("123456Rodrigo")));

/*var uri = "http://rodrigozan.com/capitulo 2 - funções",
    uriCodificada = encodeURI(uri); /* codifica a uri 
    uriCodificadacomponente = encodeURIComponent(uri) /* codifica mais ainda 
    uriDecodificadacomponente = decodeURIComponent(uri)

console.log(uri);
console.log(uriCodificada);
console.log(uriCodificadacomponente);
console.log(uriDecodificadacomponente);*/