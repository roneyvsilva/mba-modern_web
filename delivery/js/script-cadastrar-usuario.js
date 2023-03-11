let campos = document.querySelectorAll(".input");
let form = document.querySelector("#form-cad-usuarios");


form.addEventListener("submit", function (event) {
    cadastrar();
    event.preventDefault();
})


function cadastrar() {

    if (!validarCampos()) {
        return;
    }
    alert("Cadastro realizado com sucesso!");
}

function validarCampos() {

    // Validar preenchimento dos campos
    for (let campo of campos) {
        if (campo.value.trim() == "") {
            alert("Informe o(a) " + campo.previousElementSibling.innerHTML + ".");
            campo.select();
            campo.focus();
            return false;
        }
    };

    // Validar a senha
    if (!validarSenha(senha.value)) {
        alert("A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caracter especial.");
        senha.select();
        senha.focus();
        return;
    }

    return true;
}

function validarSenha(s) {

    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/;
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[~|!|@|#|$|%|^|&|*|(|)|-|_|+|=|?|<|>]/;

    if (s.trim().length < 8) {
        return false;
    }
    if (!s.match(letrasMaiusculas) || !s.match(letrasMinusculas) || !s.match(numeros) || !s.match(caracteresEspeciais)) {
        return false;
    } else {
        return true;
    }
}
