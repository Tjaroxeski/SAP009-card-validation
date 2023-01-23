//import validator from './validator.js';

//console.log(validator);

//inserir as interaçoes do script com o html (realizar a manipulacao do DOM aqui)

// capturar o numero do cartão de crédito inserido, pelo ID  'cc'


 const creditCardNumber = document.querySelector("#cc"); // chamar id ou classe do html
 const buttonSend= document.querySelector("#enviar");// chamar o botão do html
 const messageConfirm= document.getElementById("mensagem");//fazer aparecer mensagem de confirmaçao ou erro 
 


 buttonSend.addEventListener("click",  cardValidation); // adicionar evento no botao vai chamar funçao card validation 
// criar funcao com as regras de digitacao para o card validation

function cardValidation(){
    console.log("teste")
   //evento.preventDefault() // evento para pagina nao atualizar depois que a pagina atualizar 
     let custumerInput = creditCardNumber.value;
     console.log(custumerInput)
    //let validateCard = validator.isValid(custumerInput);
     //regras para aceitacao 
     if(
        custumerInput==="" || 
        custumerInput==="0000000000000000" ||
        custumerInput==="000000000000000" ||
        custumerInput==="00000000000000" ||
        custumerInput.length <=13

       ){
        return(messageConfirm.innerHTML= "Dados inválidos, por favor verifique os números do cartão e digite novamente!")
     }

     else if(custumerInput){
        return(messageConfirm.innerHTML= "Dados validados com sucesso! O pedido foi confirmado.")
     }
     else if(custumerInput ===false){
        return(messageConfirm.innerHTML= "sera a validacao do validador");
        }
}

 

// function clone(){
//     let valueI= document.getElementById('cc').value // pegar o que for digitado no input (value)
//     let esconde= validator.maskify(value); // esconder valor 

// }























