const formElement = document.getElementById('form')
console.log(formElement)

formElement.addEventListener('submit',function(event) {

event.preventDefault()
//console.log('submit del form')
// VALIDATION NAME
const nameElement = document.getElementById('name')
const name = nameElement.value
console.log(name)
nameElement.classList.remove('is-invalid', name)
if(name === ''){
    nameElement.classList.add('is-invalid')
}
//VALIDATION SURNAME
const surnameElement = document.getElementById('surname')
const surname = surnameElement.value
console.log(surname)
surnameElement.classList.remove('is-invalid')
if(surname === ''){
    surnameElement.classList.add('is-invalid')
}
// VALIDATION EMAIL
const emailElement = document.getElementById('email')
const email = emailElement.value
console.log(email)
emailElement.classList.remove('is-invalid')
if(email === ''){
    emailElement.classList.add('is-invalid')
}

// CALCOLO PREZZO BASE
const onorarioBack = 20.50
const onorarioFront = 15.30
const onorarioProject = 33.60


const oreBase = 10

let prezzo = ''

const selectWork = document.getElementById('option')
const selectedWork = selectWork.value
console.log(selectedWork)
selectWork.classList.remove('is-invalid')
if (selectedWork === '1'){
   prezzo = onorarioBack*oreBase   
 }
else if (selectedWork === '2'){
   prezzo = onorarioFront*oreBase
 }
else if (selectedWork === '3'){
   prezzo = onorarioProject*oreBase
  }
console.log(prezzo)

const outputPriceElement = document.getElementById('price-output')

//VALIDATION OPTION
const codiceSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const codeElement = document.getElementById('code')
const code = codeElement.value



for (let i = 0; i < codiceSconto.length; i++ ) {

   let codeCorrente = codiceSconto[i] 

   codeElement.classList.remove('is-invalid','is-valid')

   if ( codiceSconto.includes(code) == false) {
      codeElement.classList.add('is-invalid')
   } else if ( code == '')
      codeElement.classList.add('is-valid')
}
console.log(code)

//outputPriceElement.innerHTML =   prezzo.toFixed(2) + '&#8364'
// CALCOLO PREZZO SCONTATO


let sconto = 0.25

let euroSconto = ''

 if (codiceSconto.includes(code) == true) {
    euroSconto = prezzo*sconto
   } 

let prezzoFinale = prezzo - euroSconto
console.log(prezzoFinale)

outputPriceElement.innerHTML =   prezzoFinale.toFixed(2) + '&#8364'


//VALIDATION CHECK-BOX

const checkElement = document.getElementById('check')
//const check = checkElement.value
console.log(check)
checkElement.classList.remove('is-invalid')
if(checkElement.checked ) {
    checkElement.classList.add('is-valid')
 } else {
    checkElement.classList.add('is-invalid')
 }

})