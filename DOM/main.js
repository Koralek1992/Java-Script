const div = document.querySelector('div')
const p = document.createElement('p')
div.appendChild(p)

const ulList = document.createElement('ul')
const liItem = document.createElement('li')

liItem.textContent = 'cześć'

document.body.appendChild(ulList)
ulList.appendChild(liItem) 