// zadanie 1

const number = [1, 2, 3, 4, 5]

number.unshift(-1,0,)

number.shift()
console.log(number);


const color = ['red', 'black', 'white']

color.push('green')
color.pop()

console.log(color);


// zadanie 2 

const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0,2)
console.log(numbers2);

const numbers3 = numbers.slice(-3)
console.log(numbers3);

const randomStuff = colors.splice(-2)
console.log(randomStuff);

const newCars = cars.splice(2,4,'test')
console.log(cars);
console.log(newCars);