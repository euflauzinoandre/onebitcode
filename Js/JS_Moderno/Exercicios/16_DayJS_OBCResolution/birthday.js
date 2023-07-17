const dayjs = require("dayjs")

function birthday(date) {

    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'y')
    const nextBirthday = birthday.add(ageInYears + 1, 'y')
    const daysToNextBirthday = nextBirthday.diff(today, 'd') + 1


    console.log(`Idade: ${ageInYears} anos`);
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
    console.log(`Faltam ${daysToNextBirthday} dia para completar ${ageInYears + 1} anos`);
}

birthday("1997-07-19")