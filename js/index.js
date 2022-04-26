const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const fone = document.getElementById('fone')
const cep = document.getElementById('cep')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    // removendo o espaços do inicio e fim da string
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const foneValue = fone.value.trim()
    const cepValue = cep.value.trim()
    const cidadeValue = cidade.value.trim()
    const ufValue = uf.value.trim()
    

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }


    if(foneValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(fone, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(fone)
    }

    if(cepValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cep, 'Preencha esse campo')
    } else if(cepValue.length != 9){
        setErrorFor(cep, 'Cep deve ter 9 caracteres (0000-000)')
    } 
    else {
        // adicionar a classe de sucesso
        setSuccessFor(cep)
    }

    if(cidadeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cidade, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cidade)
    }

    if(ufValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(uf, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(uf)
    }

}

// function mensagem de erro
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

//function mensagem de sucesso
function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

// typeof Email
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

