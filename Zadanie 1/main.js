const userName = 'daria'

const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1)

console.log(newUserName)

const text1 = 'powiększ mnie'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '^&*#% wytnij te dziwne zanki na początku'
const text4 = 'sprawdź czy zawieram słowo "czy"'
const text5 = 'WyLoguj w konsoli tylko literę L, która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes('czy'));
console.log(text5.charAt(2));
console.log(text7.split(','));
console.log(text6.replaceAll('pies','kot'))


