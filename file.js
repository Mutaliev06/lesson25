// Задание 1
let man = {
    name: 'Mukhammed',
    family: 'Mutaliev',
    year: 26,
    height: 187,
    login: 'Mutaliev',
    password: 'qwerty',
    cash: 10000
}

man.address = {
    city: 'Nazran',
    street: 'Mutalieva',
    house: 96
}

let men = prompt('Введите пароль');

if (men === man.password) {
    console.log(`Добро пожаловать, ${man.name} ${man.family}.  Ваш логин ${man.login}.`)
} else {
    console.log(`Указанный пароль [${men}] не верен. Попробуйте еще раз`);
}