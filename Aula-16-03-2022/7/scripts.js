var nomevendendor = prompt ('Informe o seu nome');

var salariofixo = parseFloat(prompt ('Informe o seu salário fixo'));

var vendas = parseFloat(prompt ('Dígite o valor das vendas'));

var comissao = (vendas/100) * 15;

var total = comissao + salariofixo;

alert (nomevendendor + '\nTotal do seu salário será: ' + total );