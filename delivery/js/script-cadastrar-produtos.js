let campos = document.querySelectorAll(".input");
let form = document.querySelector("#form-cad-produtos");


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

    return true;
}

