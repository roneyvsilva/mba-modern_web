let minhaFuncao = function () {
    console.log(this);
};

let minhaFuncao2 = function (event) {
    event.stopPropagation();
    console.log(this);
};

document.querySelector('ul').addEventListener('click', minhaFuncao);
document.querySelector('li').addEventListener('click', minhaFuncao2);

document.querySelector('button').addEventListener('contextmenu',
    function (event) {
        event.preventDefault();
        console.log(this);
    })
