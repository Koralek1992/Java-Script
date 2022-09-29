// funcja argumentowa
// Zadanie 1
function hello(name, age) {
	console.log(`Cześć, mam na imię ${name} i mam ${age} lat`)
}

hello('Daria', 30)

// funcja strzałkowa
const nazwaFunkcji = () => {}

const days = ['poniedziałek', 'wtorek', 'środa']

const day2 = days.forEach(day => console.log(day))

const test = name => console.log(`Mam na imię ${name}`)
test('Bartosz')

const hi = (name = 'drogi użytkowniku') => {
	console.log(`Dzień dobry ${name}, jak się masz?`)
}

hi()
hi('Majka')

//  Zadanie 2

// let score
const add = (x, y) => {
	const score = x + y

	score % 2 === 0 ? evenMsg(score) : oddMsg(score)
}

const evenMsg = num => {
	console.log(`Liczba ${num} jest parzysta`)
}
const oddMsg = num => {
	console.log(`Liczba ${num} jest nieparzysta`)
}

add(10, 10)

// Zadanie 3

let celsius
let temp

const farenheit = c => {
	celsius = c
	temp = celsius * 1.8 + 32

	console.log(`${c}st C = ${temp}st F`)
}

farenheit(20)

// T(stF) = T(stC) x 1.8 + 32

// Zadanie 4

const num = 10
const numbers = []

for (let i = 0; i < num; i++) {
	numbers.push(i)
}
console.log(numbers)

const cehckNumbers = number => {
    if(number % 2 === 0 && number !== 0) {
        console.log(`${number} jest podzielne przez 3`);
    } else {
        console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0`);
    }
}
numbers.forEach(cehckNumbers)