

// const validator = {
    
	
// 	isValid(creditCardNumber){	
// 	const arrayNumber = [];
// 	  for (let indice = 0; indice < creditCardNumber.length; indice++) {
// 		const digit = parseInt(creditCardNumber[i]); //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
// 		arrayNumber.push(digit);
// 		//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
// 	  }
// 	  const reversedNumber = arrayNumber.reversedNumber(); //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
// 	  for (let indice = 0; indice < reversedNumber.length; indice++) { //A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0. 
// 		if ((indice + 1) % 2 === 0) {
// 			reversedNumber[indice] = reversedNumber[indice] * 2;
// 		}
// 		if (reversedNumber[indice] >= 10) {
// 			reversedNumber[indice] = reversedNumber[indice] - 9; // todo numero maior que 10 e menor que 20, se vc subtrair 9 o resultado é a soma deles
// 		}
// 	  }
	  
// 	  let totalSum = 0;
// 	  for (let indice = 0; indice < reversedNumber.length; indice++) {
// 		totalSum = totalSum + reversedNumber[indice];
// 	  }
// 	  return totalSum % 10 === 0
//  }
// }

// export default validator;
 
 
 
 
 

 
 
 
 
 export function isValid (creditCardNumber){

 
     const arrayCreditCardNumber= creditCardNumber.split("").reverse(); //esse número vai gerar um array com 16 números e reverter
     console.log("hello", arrayCreditCardNumber);//ok- ta funfando! 

     let totalSum = 0

     for (let i=0; i< arrayCreditCardNumber.length; i++){
        console.log(arrayCreditCardNumber);
        
        if ((i +1) % 2 ===0){
            arrayCreditCardNumber[i]= (Number(arrayCreditCardNumber[i]))*2
            
            if(Number(arrayCreditCardNumber[i] >= 10)){
                (arrayCreditCardNumber[i])= (Number(arrayCreditCardNumber[i]-9))
                
                
                totalSum = totalSum + Number(arrayCreditCardNumber[i])
            
           
             } else {
                totalSum = totalSum + Number(arrayCreditCardNumber[i])};
                console.log(totalSum);
        }
        if (totalSum % 10 === 0){
            return true
           
        } else { 
            return false
        }
        }
    } 

     

    //  maskify: (custumerInput) => {
    //     if (custumerInput.length <= 4){
    //         return custumerInput
    //     }
        
    //     const ultimosDigitos= custumerInput.slice(-4);
    //     const simboloMascara = "#";
    //     const qtdCaracteres = custumerInput.length -4;
    //     const numeroMascarado= simboloMascara.repeat(qtdCaracteres)+ ultimosDigitos;
    //     return numeroMascarado
    //  }
    
    // export default validator;
    // const pairPosition= arrayCreditCardNumber.length
    //    for (let i=0; i==2; i= i + 2){

    //    }
    //    console.log(pairPosition);
    
 


// // aplicar a operaçao para os numeros pares - 

// //pegar os numeros das posições pares e *2, se for =>10 somar os digitos do resultado e - 9


// //ver se é um cartao valido 

















// funçao mask (esconder numeros do cartao)
//pegar os input da digitaçao do cliente
// const masks= document.getElementById("cc");
// masks.addEventListener('keyup', maskify ); //puxei o evento pelo teclado e preciso criar funçao maskify para mascarar
// console.log("foi?");
//preciso que só aceite números inteiros
//preciso realizar a troca dos numeros digitados para # 

// const mask ={ 
// custumerInput(value){ 
  
//   return value.replace(/\D/g, "");
//   console.log(custumerInput);

//  }
// }

// document.querySelector("keyup").forEach((custumerInput) =>{
//   const field = $keyup.value
  
//   $keyup.addEventListener("keyup", (e) =>{
//     e.target.value = mask[field](e.target.value)
//   }, false)

// })

