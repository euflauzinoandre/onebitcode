function register(ev) {
    console.log(ev)
    const sectionEvent = ev.currentTarget.parentNode.children
    const username = sectionEvent.username.value
    const password = sectionEvent.password.value
    const passwordConfirmation = sectionEvent.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert("Usuário " + username + " criado!")
    } else {
        alert("Senhas não conferem")
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
    button.removeEventListener('click', register)
    alert("Evento removido!")
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev)
})