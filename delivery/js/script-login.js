let botaoLogin = document.querySelector("#login-button");
let login = document.querySelector("#login");
let senha = document.querySelector("#senha");

login.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        logar();
    }
});
senha.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        logar();
    }
});

botaoLogin.addEventListener("click", logar)

function logar() {
    if (login.value.trim() == "") {
        alert("Informe o login do usuário.");
        login.select();
        login.focus();
        return;
    }
    if (senha.value.trim() == "") {
        alert("Informe a senha do usuário.");
        senha.select();
        senha.focus();
        return;
    }
    if (!validarSenha(senha.value)) {
        alert("A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caracter especial.");
        senha.select();
        senha.focus();
        return;
    }
    let mensagem = document.querySelector("#mensagem");
    mensagem.insertAdjacentHTML("afterend",
        `<div class="div-mensagem">
        <span>Login efetuado com sucesso!</span>
        </div>`);
    let divMenagem = document.querySelector(".div-mensagem");
    setTimeout(() => {
        divMenagem.style.display = "none";
    }, 3000);
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
