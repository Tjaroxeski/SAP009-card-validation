Projeto / Card Validation.

Neste projeto, Eu precisei criar um aplicativo da Web, que permita ao usuário validar o número de um cartão de crédito.

url(https://tjaroxeski.github.io/SAP009-card-validation/)

Objetivos principais;

Inserir o número que desejamos validar.

 Use apenas caracteres numéricos (dígitos) no cartão para validar [0-9].
Constatar se o resultado é válido ou não.

Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres.

Não deve poder inserir um campo vazio.

 Os métodos validator (isValid e maskify) devem ser cobertos por testes unitários.
  O código final deve estar um repositório no GitHub. A interface, ou página da web, deve ser "implantada"
 (acessível online publicamente) usando o GitHub Pages.

Objetivos de aprendizagem
JavaScript/HTML/CSS/Web APIs

A validação é feita através do algortimo de Luhn, usando validator.isValid(creditCardNumber
