import validator from './validator.js'



const creditCardNumber = document.getElementById("cc"); // chamar id ou classe do html
//const buttonSend = document.getElementById("enviar");// chamar o botão do html
//const messageConfirm= document.getElementById("mensagem");//fazer aparecer mensagem de confirmaçao ou erro 
const formulario = document.getElementById("formulario");// chamar o botão do html



formulario.addEventListener("submit", cardValition); // adicionar evento no botao vai chamar funçao card validation 
// criar funcao com as regras de digitacao para o card validation

function cardValition(e) {
  e.preventDefault();
  //console.log("teste")
  //evento.preventDefault() // evento para pagina nao atualizar depois que a pagina atualizar 
  const custumerInput = creditCardNumber.value;
  //console.log(custumerInput)
  //regras para aceitacao 
  if (
    custumerInput === "" 
  ) {
    alert("Dados incompletos, por favor verifique os números do cartão e digite novamente!");
  }

  else if (validator.isValid(custumerInput) === true) {
    alert("O cartão foi validado, em breve você receberá seu pedido!");
  } else {
    (validator.isValid(custumerInput) === false)
    alert("Ops! Algo de errado aconteceu, por favor verifique os dados do cartão e tente novamente.")
  }
  creditCardNumber.value = validator.maskify(custumerInput)
}
