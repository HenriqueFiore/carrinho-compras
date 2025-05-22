let totalGeral = 0;

function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span> 
          ${nomeProduto} <span class="texto-azul"> R$${valorUnitario}</span>
        </section>` 

    totalGeral = totalGeral + preco;
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$${totalGeral}`;

    document.getElementById('quantidade').value = 0;

}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    let total = document.getElementById('valor-total');

    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span> 
           <span class="texto-azul"></span>
        </section>` 

    total.innerHTML = `R$0`;
}

