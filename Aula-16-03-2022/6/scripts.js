var custofabrica = parseFloat(prompt("Digite o custo de fabrica"));

var porcentagemvendedor = custofabrica / 4;

var valorimposto = (custofabrica/100) * 45;

alert("O valor final do carro é: " + (custofabrica + porcentagemvendedor + valorimposto));