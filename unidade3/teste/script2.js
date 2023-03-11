// document.querySelector('#input').addEventListener('click',
//     function () {
//         console.log('cliquei!');
//     })

let minhaFuncao = function () { console.log('Cliquei!!!'); };

document.querySelector('#input').addEventListener('click', minhaFuncao);

let minhaFuncao2 = function () { console.log(this.value); };

document.querySelector('#input').addEventListener('keyup', minhaFuncao2);
