import {isValid} from './validator.js'



const creditCardNumber = document.getElementById("cc"); // chamar id ou classe do html
const buttonSend= document.getElementById("enviar");// chamar o botão do html
//const messageConfirm= document.getElementById("mensagem");//fazer aparecer mensagem de confirmaçao ou erro 



buttonSend.addEventListener("click",  cardValidation); // adicionar evento no botao vai chamar funçao card validation 
// criar funcao com as regras de digitacao para o card validation

function cardValidation(){
   //console.log("teste")
  //evento.preventDefault() // evento para pagina nao atualizar depois que a pagina atualizar 
    let custumerInput = creditCardNumber.value;
    //console.log(custumerInput)
   //let validateCard = validator.isValid(custumerInput);
    //regras para aceitacao 
    if(
       custumerInput==="" || 
       custumerInput==="0000000000000000" ||
       custumerInput==="000000000000000" ||
       custumerInput==="00000000000000" ||
       custumerInput.length <=13

      ){
       alert("Dados incompletos, por favor verifique os números do cartão e digite novamente!");
    }

    else if(isValid(custumerInput)===true){
       return alert ("O cartão foi validado, em breve você receberá seu pedido!");
    }else { 
       (isValid(custumerInput) ===false)
       alert("Ops! Algo de errado aconteceu, por favor verifique os dados do cartão e tente novamente.")
       }
      }
    