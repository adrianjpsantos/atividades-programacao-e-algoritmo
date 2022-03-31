var a = prompt ('quantidade de prestações');

var b = prompt ('parcelas pagas');

var c = prompt ('valor da parcela');

var d = parseInt (a) * parseInt (c)

var e = parseInt (b) * parseInt(c); 

var f = parseInt (d) - parseInt(e);

alert ('você pagou: ' + e +' e ainda deve ' + f); 