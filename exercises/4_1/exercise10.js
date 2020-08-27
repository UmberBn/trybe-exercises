/*Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let custo = 30, valorVenda = 0;

let valorCustoTotal = custo+(custo*0.2);
let lucroTotal = valorVenda-valorCustoTotal;

if(custo > 0 && valorVenda > 0){
    lucroTotal*=1000;
    console.log("Lucro total: R$ "+lucroTotal)
}
else(console.log("Valores informados não são valídos"));

