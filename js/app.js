console.log('ciao')

const formElement = document.getElementById('form')
console.log(formElement)

formElement.addEventListener('submit',function(event) {

event.preventDefault()
//console.log('submit del form')

const nameElement = document.getElementById('name')
const name = nameElement.value
console.log(name)
nameElement.classList.remove('is-invalid')
if(name === ''){
    nameElement.classList.add('is-invalid')
}

const surnameElement = document.getElementById('surname')
const surname = surnameElement.value
console.log(surname)
surnameElement.classList.remove('is-invalid')
if(surname === ''){
    surnameElement.classList.add('is-invalid')
}

const emailElement = document.getElementById('email')
const email = emailElement.value
console.log(email)
emailElement.classList.remove('is-invalid')
if(email === ''){
    emailElement.classList.add('is-invalid')
}




const codeElement = document.getElementById('code')
const code = codeElement.value
codeElement.classList.remove('is-invalid')

if(code === ''){
    codeElement.classList.add('is-invalid')
} 




const onorarioBack = 20.50
const onorarioFront = 15.30
const onorarioProject = 33.60


const oreBase = 10
let prezzo = ''


const selectWork = document.getElementById('option')
const selectedWork = selectWork.value
console.log(selectedWork)
selectWork.classList.remove('is-invalid')
if (selectedWork === '1')[
   prezzo = onorarioBack*oreBase   
] 
else if (selectedWork === '2')[
   prezzo = onorarioFront*oreBase
] 
else if (selectedWork === '3')[
   prezzo = onorarioProject*oreBase
]
console.log(prezzo)

const outputPriceElement = document.getElementById('price-output')

outputPriceElement.innerHTML =   prezzo.toFixed(2) + '&#8364'

const codiceSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
let sconto = 1
let prezzoFInale = prezzo*sconto

for(let i = 0; i < codiceSconto.length; i++ ) {

    let codiceCorrente = codiceSconto[i]
    console.log(codiceCorrente)


    if ( codiceSconto.includes[codiceCorrente]) {
        sconto === 0.25
    }

}

console.log(prezzoFInale)




const checkElement = document.getElementById('check')
const check = checkElement.value
console.log(check)
checkElement.classList.remove('is-invalid')
if(check.value === 0 ){
    checkElement.classList.add('is-valid')
} else {
    checkElement.classList.add('is-invalid')

}

















})