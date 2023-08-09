class Account {
    #password
    #balance

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        }
        else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "andre@email.com",
    password: "123456"
}

const userAccount = new Account(user)

console.log(userAccount);
// console.log(user.Account.#password); //
// console.log(user.Account.#balance); //
// console.log(user.Account.#authenticate); //
console.log(userAccount.getBalance("andre@email.com", "123456"));
console.log(userAccount.getBalance("andre@email.com", "000000"));