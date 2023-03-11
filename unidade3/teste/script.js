/* comentário
de
blocos */

// comentário de linha

alert("Testando...")

let lista = ['ronim', 'dani', 'filipe', 'alice'];
let listElement = document.querySelector('ul');

function listarNomes() {
    let nomes = '';

    for (let nome of lista) {
        nomes += `<li>Nome: ${nome}</li>`
    }
    listElement.innerHTML = nomes;
}

listarNomes();
