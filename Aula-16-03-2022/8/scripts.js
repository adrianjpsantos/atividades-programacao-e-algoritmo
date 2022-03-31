var cotacaodolar = parseFloat(prompt("Qual é a cotação atual do dolar em relação ao Real?"));

var quantidadedolar = parseFloat(prompt("Sua quantidade em dolar?"));

var totalreal = cotacaodolar * quantidadedolar;


//toFixed(#) arredonda os numeros apos a virgula. (# é a quantidade de casas decimais).
alert("O total em Real será: " + totalreal.toFixed(2));