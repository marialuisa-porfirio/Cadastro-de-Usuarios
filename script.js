// Seleciona o formulário
const formulario = document.querySelector("form");

// Seleciona os campos do formulário
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const senha = document.querySelector("#senha");

// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    limparMensagens();

    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const telefoneValido = validarTelefone();
    const senhaValida = validarSenha();

    if (
        nomeValido &&
        emailValido &&
        telefoneValido &&
        senhaValida
    ) {
        cadastrarUsuario();
    }
});


// Validação do nome
function validarNome() {
    const valor = nome.value.trim();

    if (valor === "") {
        mostrarErro(nome, "Digite seu nome.");
        return false;
    }

    if (valor.length < 3) {
        mostrarErro(nome, "O nome deve ter pelo menos 3 caracteres.");
        return false;
    }

    return true;
}


// Validação do e-mail
function validarEmail() {
    const valor = email.value.trim();

    if (valor === "") {
        mostrarErro(email, "Digite seu e-mail.");
        return false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(valor)) {
        mostrarErro(email, "Digite um e-mail válido.");
        return false;
    }

    return true;
}


// Validação do telefone
function validarTelefone() {
    const valor = telefone.value.trim();

    if (valor === "") {
        mostrarErro(telefone, "Digite seu telefone.");
        return false;
    }

    const apenasNumeros = valor.replace(/\D/g, "");

    if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
        mostrarErro(
            telefone,
            "Digite um telefone válido com DDD."
        );

        return false;
    }

    return true;
}


// Validação da senha
function validarSenha() {
    const valor = senha.value;

    if (valor === "") {
        mostrarErro(senha, "Digite uma senha.");
        return false;
    }

    if (valor.length < 6) {
        mostrarErro(
            senha,
            "A senha deve ter pelo menos 6 caracteres."
        );

        return false;
    }

    return true;
}


// Mostra uma mensagem de erro abaixo do campo
function mostrarErro(campo, mensagem) {
    const mensagemErro = document.createElement("small");

    mensagemErro.classList.add("mensagem-erro");
    mensagemErro.textContent = mensagem;

    campo.insertAdjacentElement(
        "afterend",
        mensagemErro
    );

    campo.classList.add("campo-erro");
}


// Remove as mensagens de erro anteriores
function limparMensagens() {
    const mensagens = document.querySelectorAll(".mensagem-erro");

    mensagens.forEach(function (mensagem) {
        mensagem.remove();
    });

    const campos = document.querySelectorAll("input");

    campos.forEach(function (campo) {
        campo.classList.remove("campo-erro");
    });
}


// Executado quando o cadastro é válido
function cadastrarUsuario() {
    alert("Usuário cadastrado com sucesso!");

    formulario.reset();
}