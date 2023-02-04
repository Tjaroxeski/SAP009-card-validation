//export function
const validator = {
  isValid(creditCardNumber) {

    const arrayCreditCardNumber = creditCardNumber.split("").reverse(); //esse número vai gerar um array com 16 números e reverter
    //console.log("hello", arrayCreditCardNumber);//ok- ta funfando!
    let totalSum = 0 //variavel que irá guardar o valor da soma



    for (let i = 0; i <= arrayCreditCardNumber.length - 1; i++) {
      //console.log(arrayCreditCardNumber); //ok, funfando a array invertida
      let digit = parseInt(arrayCreditCardNumber[i]);
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }

      }

      totalSum += digit;
    }
    if (totalSum % 10 === 0) {
      return true
    }
    return false

  },

  maskify(custumerInput) {
    if (custumerInput.length <= 4) {
      return custumerInput
    }

    const lastDigits = custumerInput.slice(-4);
    const hashMask = "#";
    const charLength = custumerInput.length - 4;
    const maskifidNumber = hashMask.repeat(charLength) + lastDigits;
    return maskifidNumber
  }
}
export default validator;
