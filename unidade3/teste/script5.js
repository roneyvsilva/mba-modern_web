function submissaoFormulario() {
    let meuForm = document.forms.meuFormulario;
    if (meuForm.mensagem.value == '') {
        alert('A mensagem é obrigatória!')
        return false;
    }
}
