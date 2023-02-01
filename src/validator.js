
const validator = {
	
isValid(creditCardNumber){	
const arrayNumero = [];
 for (let indice = 0; indice < creditCardNumber.length; indice++) {
const digit = parseInt(creditCardNumber[indice]); //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
arrayNumero .push(digit);
//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
}
 const reverterNumero = arrayNumero .reverse(); //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
 for (let indice = 0; indice < reverterNumero.length; indice++) { //A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0. 
if ((indice + 1) % 2 === 0) {reverterNumero[indice] = reverterNumero[indice] * 2;
}
if (reverterNumero[indice] >= 10) {
reverterNumero[indice] = reverterNumero[indice] - 9; // todo numero maior que 10 e menor que 20, se vc subtrair 9 o resultado é a soma deles
}
}
 
let total = 0;
 for (let indice = 0; indice < reverterNumero.length; indice++) {
total = total + reverterNumero[indice];
 }
 return total % 10 === 0
 }
}

maskify(creditCardNumber) {
    
    const fourDigits = creditCardNumber.slice(-4)
    const qtdMask = creditCardNumber.length - 4
    const mask = "#".repeat(qtdMask) + fourDigits
    return mask

}




export default validator;