let modal = document.querySelectorAll(".produtos-carrinho");
let excluir = document.querySelectorAll(".bi-trash3");
let botaoCupom = document.querySelector("#botao-aplicar");
let botaoPagemento = document.querySelector("#botao-add-carrinho");
let excluirCarrinho = document.querySelector("#excluir-carrinho");

excluirCarrinho.addEventListener("click", function () {

    // Confirmar exclusão
    if (document.querySelectorAll(".produtos-carrinho").length > 0) {
        if (confirm("Confirma a exclusão do carrinho?")) {
            for (let i = 0; i < modal.length; i++) {
                modal[i].remove();
            }
            precoTotal.textContent = "R$ 0,00";
            precoDelivery.textContent = "R$ 0,00";
        }
    }
})

botaoCupom.addEventListener("click", function () {
    alert("Cupom aplicado.");
})
botaoPagemento.addEventListener("click", function () {
    if (document.querySelectorAll(".produtos-carrinho").length > 0) {
        alert("Pagamento realizado.");
    }
})

for (let i = 0; i < excluir.length; i++) {
    excluir[i].addEventListener("click", function (event) {
        if (!event.target.classList.contains(".bi-trash3")) {
            modal[i].remove();
            calcularTotaisCarrinho();
        }
    });
}

let mais = document.querySelectorAll(".bi-plus-square");
let menos = document.querySelectorAll(".bi-dash-square");
let qtdeProdutos = document.querySelectorAll(".num-qtde-produto");
let precosUnitarios = document.querySelectorAll(".valor-unitario")
let precoTotal = document.querySelector("#preco-total");
let precoDelivery = document.querySelector("#preco-delivery");

for (let i = 0; i < modal.length; i++) {
    mais[i].addEventListener("click", function () {
        let intQtdeProduto = parseInt(qtdeProdutos[i].textContent);
        intQtdeProduto++;
        qtdeProdutos[i].textContent = intQtdeProduto;
        calcularTotaisCarrinho();
    });
}

for (let i = 0; i < modal.length; i++) {
    menos[i].addEventListener("click", function () {
        let intQtdeProduto = parseInt(qtdeProdutos[i].textContent);
        intQtdeProduto--;
        if (intQtdeProduto < 1) {
            intQtdeProduto = 1;
        }
        qtdeProdutos[i].textContent = intQtdeProduto;
        precoTotal.textContent = precosUnitarios[i] * intQtdeProduto;
        calcularTotaisCarrinho();
    });
}


calcularTotaisCarrinho();

function calcularTotaisCarrinho() {

    modal = document.querySelectorAll(".produtos-carrinho");
    console.log(modal.length);
    let total = 0.0;
    for (let i = 0; i < modal.length; i++) {
        total += parseFloat(precosUnitarios[i].textContent.substring(3).replace(",", ".")) *
            parseInt(qtdeProdutos[i].textContent);
    }
    precoTotal.textContent = "R$ " + total.toFixed(2).toString().replace(".", ",");
    if (total == 0) {
        precoDelivery.textContent = "R$ " + "R$ 0,00";
    } else {
        precoDelivery.textContent = "R$ " + ((total + buscarTaxaDelivery()).toFixed(2)).toString().replace(".", ",");
    }
}

function buscarPreco(p) {
    return 2.0;
}

function buscarTaxaDelivery() {
    return 100.0;
}
