// zadanie 1

const number = [1, 2, 3, 4, 5]

number.unshift(-1, 0)

number.shift()
console.log(number)

const color = ['red', 'black', 'white']

color.push('green')
color.pop()

console.log(color)

// zadanie 2

const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0, 2)
console.log(numbers2)

const numbers3 = numbers.slice(-3)
console.log(numbers3)

const randomStuff = colors.splice(-2)
console.log(randomStuff)

const newCars = cars.splice(2, 4, 'test')
console.log(cars)
console.log(newCars)

// zadanie 3

const letters = ['c', 'd']
letters.unshift('a', 'b')
letters.push('e', 'f')
console.log(letters)
console.log(letters.includes('c'))

// zadanie 4

const a = [1, 2, 3]
const food = ['hamburger', 'pizza', 'frytki']

const newArr = a.concat(food)
console.log(newArr)

const newArr2 = [...a, ...food]
console.log(newArr2)

// zadanie 5

const tables = [1, 5, 13, 26, 48]
const newTables = tables.map(table => table *5)
console.log(newTables);

for(const table of newTables) {
    if(table % 2 === 0) {
        console.log(`Liczba przysta: ${table}`);
    } else {
        console.log(`Liczba nieprzysta: ${table}`);
    }
}
// zadanie 6

const kolor = ['niebieski']
kolor.unshift('zielony')
kolor.push('czerwony')
console.log(kolor);

for(let i = 0; i < kolor.length; i++) {
    console.log(`Mój ulubiony kolor to ${kolor[i].charAt(0).toUpperCase() + kolor[i].slice(1)}`);
}

// zadanie 7

const auta = 'Audi, Mercedes, BMW, Nissan, Dodge'
const noweAuta = auta.split(', ');
console.log(noweAuta);

noweAuta.length > 3 ? console.log(`Jest OK`) : console.log(`Nie jest OK`);
 if(noweAuta.includes('Audi')) {
    noweAuta.push('Lamborghini')
 } else {
    noweAuta.pop()
 }

 console.log(noweAuta);