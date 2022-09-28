// zadanie 1
const color = ['yellow', 'orange', 'red', 'violet', 'blue', 'green', 'black']

for(let i = 0; i < color.length; i++) {
    console.log(color[i]);
}

// zadanie 2 
const city = ['Poznań', 'Warszawa', 'Gdańsk', 'Gdynia', 'Sopot']

for(let i = 0; i < city.length; i++) {
    console.log(`To miasto nazywa się ${city[i].toUpperCase()}`);
}

// zadanie 3
let x = 0

while(x < 10) {
    x += 2
    console.log(x);
}

// zadanie 4 
let z = 20

do {
    z -= 3
} while (z > 0)

console.log(`Poza pętlą: ${z}`);

const numbers = [5, 8, 10, 23, 48, 60]

for(const number of numbers) {
    console.log(number / 5);
}

console.log('------');

for(const number of numbers) {
    if(number % 2 === 0) {
        console.log(`%cLiczba ${number} jest parzysta`, 'background-color: gold; color: black')
    } else {
        console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato; color: black');
    }
}