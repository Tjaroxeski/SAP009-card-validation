import validator from "./validator.js";


const inputNumeros = document.getElementById ("cardNumber") 
const button = document.getElementById   ("button")
const mensagem = document.getElementById ("mensagem")

button.addEventListener("click",verificado);


function verificado (e){

  e.preventDefault();
  const  digito = inputNumeros.value
  const validar = validator.isValid(digito);

    
  if (
    digito.trim() === "" ||    
      digito === "0000000000000000" ||
      digito === "000000000000000" ||
      digito === "00000000000000" ||
      digito.length <= 13
  ) {
    return (mensagem.innerHTML = "Por favor, digite o número do cartão!");
  }  
  else if (validar === true) {
    return (mensagem.innerHTML = "Cartão válido!");
  }
  else if (!validar) {  
    return (mensagem.innerHTML = "Cartão inválido. Digite novamente!");
  } 

  else if (validator === true) {
  return (messagem.innerHTML=`Cartão válido ${validator.maskify(digito)} `)

  }
 
  else if (!validator === true)  {
 return(mensagem.innerHTML = 'Cartão inválido')

}


