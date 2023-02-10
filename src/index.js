import validator from './validator.js'

const creditCardNumber = document.getElementById("cc"); 
const formulario = document.getElementById("formulario");
const aviso= document.getElementById("mensagem")
formulario.addEventListener("submit", cardValidation); 
function cardValidation(e) {
  e.preventDefault();
  const custumerInput = creditCardNumber.value;
  if (
    custumerInput === "" 
  ) {
    alert("Dados incompletos, por favor digite os números do cartão!");
  }
  else if (validator.isValid(custumerInput)) {
    creditCardNumber.value = validator.maskify(custumerInput)
    return (aviso.innerHTML="O cartão foi validado, em breve você receberá seu pedido!"); 
  } else {
    (validator.isValid(custumerInput))
    creditCardNumber.value = validator.maskify(custumerInput)
    return (aviso.innerHTML= "Ops! Algo de errado aconteceu, por favor verifique os números do cartão e tente novamente.")
  }
}