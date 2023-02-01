export function 
isValid(creditCardNumber) { 

 const arrayCreditCardNumber= creditCardNumber.split("").reverse(); //esse número vai gerar um array com 16 números e reverter
  //console.log("hello", arrayCreditCardNumber);//ok- ta funfando!
  let totalSum = 0
  
    
    
         for (let i = 0; i <= arrayCreditCardNumber.length -1; i++){
           //console.log(arrayCreditCardNumber); //ok, funfando a array invertida
           let digit = parseInt(arrayCreditCardNumber[i]);
            if ( i % 2 === 0) {
                digit *= 2;
                if (digit > 9){
                  digit -=9;
                } 
                
            }

            totalSum += digit;
         }
        if ( totalSum % 10 === 0){
          return true 
        }
        return false

        }
        
    

        //     if ((i +1) % 2 ===0){
        //         arrayCreditCardNumber[i]= (Number(arrayCreditCardNumber[i]))*2
               
        //         if(Number(arrayCreditCardNumber[i] >= 10)){
        //             (arrayCreditCardNumber[i])= (Number(arrayCreditCardNumber[i]-9))
                   
                   
        //             totalSum = totalSum + Number(arrayCreditCardNumber[i])
               
               
        //          } else {
        //             totalSum = totalSum + Number(arrayCreditCardNumber[i])};
        //             console.log(totalSum);
        //     }
        //     if (totalSum % 10 === 0){
        //         return true
               
        //     } else {
        //         return false
        //     }
        //     }
        // }
    
    
         
    
    
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
       
       //export default validator;
        // const pairPosition= arrayCreditCardNumber.length
    