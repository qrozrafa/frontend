const form = document.getElementById('form')
const input = document.querySelectorAll('input')
// pegando o valor do nome pelos names
var nome = document.getElementById("username");
var email = document.getElementById("email");
var fone = document.getElementById("fone");
var cep = document.getElementById("cep");
var cidade = document.getElementById("cidade");
var uf = document.getElementById("uf");


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
        }

    });
}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero.length >= 8 && numero.length <=12) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            return false;
        }

    });
    

}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            return false;
        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');


for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validar();
    return input.classList.add('sucess');
})

// function validar 
function validar() {
    const input = document.querySelectorAll('input')
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const foneValue = fone.value.trim()
    const cepValue = cep.value.trim()
    const cidadeValue = cidade.value.trim()
    const ufValue = uf.value.trim()

    if(usernameValue == "") {
        alert("Nome não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        nome.classList.add('erro');
        return;
    }    

     if (emailValue == "") {
        alert("Email não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        email.classList.add('erro');
        return;
    } else if (!isEmail(emailValue)) {
        alert("Email invalido");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        email.classList.add('erro');
        return
    }    

    if(foneValue == "") {
        alert("Telefone não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        fone.classList.add('erro');
        return;
    }

    if(cepValue == "") {
        alert("CEP não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        cep.classList.add('erro');
        return;
    }

    if(cidadeValue == "") {
        alert("Cidade não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        cidade.classList.add('erro');
        return;
    }

    if(ufValue == "") {
        alert("Estado não informado");
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        cidade.classList.add('erro')
        return;
    } 


    alert("Cadastro realizado com sucesso!!");
    nome.classList.add('sucess');
    email.classList.add('sucess');
    fone.classList.add('sucess');
    cep.classList.add('sucess');
    cidade.classList.add('sucess');
    uf.classList.add('sucess');
    document.querySelector('.mensagemSucess').innerHTML = "Cadastro Realizado";

}

// typeof Email
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
