const dayjs = require("dayjs");

function currentAge(birthday) {

    const age = dayjs().diff(dayjs(birthday), 'y')

    if (dayjs().isAfter(dayjs(birthday))) {

        var nextBirthday = dayjs(birthday).add(age + 1, 'y')

    } else {

        nextBirthday = dayjs(birthday).add(age, 'y')

    }

    const howManyDays = dayjs(nextBirthday).diff(dayjs(), 'd')

    console.log(`
    Idade atual: ${age} anos
    Próximo aniversário: ${nextBirthday.format("DD-MM-YYYY")}
    Faltam ${howManyDays} dias
    `);
}

currentAge("1997-03-17")