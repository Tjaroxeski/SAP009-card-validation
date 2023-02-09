const validator = {
  isValid(creditCardNumber) {

    const arrayNumber =[];
    for (let i = 0; i < creditCardNumber.length; i ++){
      const digit = parseInt(creditCardNumber[i]);
      arrayNumber.push(digit);
    }
    const reversedNumber = arrayNumber.reverse();
    for (let indice = 0; indice < reversedNumber.length; indice++){
      if((indice +1) % 2 ===0) { 
        reversedNumber[indice]= reversedNumber[indice] * 2;
      }
      if(reversedNumber[indice] >=10) { 
        reversedNumber[indice] = reversedNumber[indice]-9;
      }     
    }
    let total = 0;
    for( let indice=0; indice < reversedNumber.length; indice ++){
      total = total +reversedNumber[indice];
    }
    return total % 10 ===0
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
