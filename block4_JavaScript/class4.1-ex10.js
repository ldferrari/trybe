
let custoProduto = 120;
let valorVenda = 200;

if(custoProduto>=0 && valorVenda>=0){
    console.log("Lucro liquido igual a: " +((valorVenda-custoProduto-(custoProduto*0.2))*1000));
}
else{
    console.log("Valor de custo ou de venda não permitido");
}
