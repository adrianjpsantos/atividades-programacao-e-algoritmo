var variavelA = parseInt(prompt("Digite o valor A"));

var variavelB = parseInt(prompt("Digite o valor B"));

var variavelAfixa = variavelA;

variavelA = variavelB;
variavelB = variavelAfixa;

alert("Invertendo...\nA variavel A é: "+ variavelA + " e variavel B é: " + variavelB);