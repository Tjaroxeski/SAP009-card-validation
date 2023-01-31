import {isValid} from './validator.js';
//inserir as interaçoes do script com o html (realizar a manipulacao do DOM aqui)


const creditCardNumber= document.querySelector('#cc'); // chamar id ou classe do htmlcapturar o numero do cartão de crédito inserido, pelo ID  'cc'
const buttonSend= document.querySelector('#enviar');// chamar o botão do html
 
buttonSend.addEventListener('click', cardValidation); // adicionar evento no botao vai chamar funçao card validation 

function cardValidation(){ // criar funcao com as regras de digitacao para o card validation
// console.log("teste")
//evento.preventDefault() evento para pagina nao atualizar depois que a pagina atualizar 
  const custumerInput = creditCardNumber.value;
  console.log(custumerInput);
    
  //let validateCard = validator.isValid(custumerInput);
  //regras para aceitacao 
  if(
    custumerInput==='' || 
    custumerInput==='0000000000000000' ||
    custumerInput==='000000000000000' ||
    custumerInput==='00000000000000' ||
    custumerInput.length <=13
  ){
    alert("Dados incompletos, por favor verifique os números do cartão e digite novamente!");
  
  } else if {

  } (isValid(custumerInput) === true){
      return alert("numero válido!");
    } 
    return alert("numero invalidos");
    
  }

//      else if(custumerInput ===false){

//         return(messageConfirm.innerHTML= "sera a validacao do validador");
//         }
// }
//fazer a split do numero do crediCardNumber= "4137894711755904"

 
// // Criar uma variável para a somaFinal os valores com o valor = 0 var resultadoDaValidacao = false;
// var somaFinal=0;
// var resultadoDaValidacao= false;

// // Um looping(for, forEach) para percorrer as 16 posicoes do array
//  for(i=0; arrayCreditCardNumber==2; i= i+2 ){
//   if( arrayCreditCardNumber % ===2){
//     return(somaFinal)
//   }
// };

// Verificar se a Casa(ou Indice) do array é par (% 2)
// 	Verifiar usando %2, se o resultado for 0 é par. Se o resultado for impar --> somaFinal = somaFinal + valorAtualCasaDoArray(passo 3)


// 	Criar Uma variável para armerzar o resultado da multipliação, Faz a multiplicação por 2 e armazena o valor

 


// // if(valorMultipliado > 9) {
// 		var digitoRestante = valorMultipliado % 10; --> 16 % 10 = 6
// 		valorMultipliado = 1 + digitoRestante; --> 1 + 6 = 7
// 		somaFinal = somaFinal + valorMultiplicado (passo 3)
// 	} else {
// 		somaFinal = somaFinal + valorAtualCasaDoArray (passo 3)
// 	}






