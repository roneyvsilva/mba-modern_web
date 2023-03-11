let coracao = document.querySelector("#coracao");
let botaAdicionarCarrinho = document.querySelector("#botao-add-carrinho");

botaAdicionarCarrinho.addEventListener("click", function () {
    alert("Produto adicionado com sucesso!");
});

coracao.addEventListener("click", function (event) {
    if (event.target.className == "bi bi-heart") {
        coracao.setAttribute("class", "bi bi-heart-fill");
    } else {
        coracao.setAttribute("class", "bi bi-heart");
    }
});

let mais = document.querySelector(".bi-plus-square");
let menos = document.querySelector(".bi-dash-square");
let qtdeProduto = document.querySelector(".num-qtde-produto");
let intQtdeProduto = parseInt(qtdeProduto.textContent);
let precoUnitario = document.querySelector("#preco-unitario");
let precoTotal = document.querySelector("#preco-total");

mais.addEventListener("click", function () {
    intQtdeProduto++;
    qtdeProduto.textContent = intQtdeProduto;
    calcularTotal();
});

menos.addEventListener("click", function () {
    intQtdeProduto--;
    if (intQtdeProduto < 1) {
        intQtdeProduto = 1;
    }
    qtdeProduto.textContent = intQtdeProduto;
    calcularTotal();
});

function calcularTotal() {
    let total = 0.0;

    total = parseFloat(precoUnitario.textContent.substring(3).replace(",", ".")) * intQtdeProduto;
    precoTotal.textContent = "R$ " + (total.toFixed(2)).toString().replace(".", ",");
}
