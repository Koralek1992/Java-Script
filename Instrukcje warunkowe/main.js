// zadanie 1
const x = 50
const y = 30

if (x>y) {
    console.log(`${x} > ${y}`);
}

// zadanie 2
const color = 'blue'
const newColor = 'green'

if(color === newColor) {
    console.log('Kolory się zgadzają')
} else {
    console.log('Kolory się nie zgadzają');
}

// zadanie 3
const a = 100
const b = 50

if (a > b) {
    console.log('a > b');
} else if(a === b) {
    console.log('a = b');
} else {
    console.log('a < b');
}

// zadanie 4 
const promo = '30%'

switch (promo) {
    case '10%':
        console.log('Dziś mamy 10% zniżki!');
        break
    case '20%':
        console.log('Dziś mamy 20% zniżki!');
        break
    case '30%':
        console.log('Dziś mamy 30% zniżki!');
        break
    default: 
    console.log('Dzisiaj nie mamy zniżki'); 
}

// zadanie 5 
const z = 11
const check = (z % 2 === 0) ? 'Z jest parzyste' : 'Z jest nieparzyste'  

console.log(check);

// zadanie 6 

const k = 50
let text

if(k >= 100) {
   text = 'K >= 100'
} else if(k < 100 && k > 30) {
    text = 'K jest średniakiem'
} else {
   text = 'K jest małe'
}

console.log(text.toUpperCase());

// zadanie 7

const pass = 'odnjidiq!nwkkn'

if(pass.length > 10 && pass.includes('!')) {
    console.log('Masz perfekcyjne hasło');
} else if(pass.length > 10) {
    console.log('Masz dobre hasło');
} else {
    console.log('Masz słabe hasło');
}