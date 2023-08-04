class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email == email && this.password === password) {
            console.log("Acesso realizado com sucesso");
        }
        else {
            console.log("Usuário/Senha inválido");
        }
    }
}


const user = new User("Fulano", "fulano@gmail.com", "123456")
console.log(user);
user.login("fulano@gmail.com", "123456")