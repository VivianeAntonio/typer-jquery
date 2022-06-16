var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
console.log(tamanhoFrase);
tamanhoFrase.text(numPalavras);