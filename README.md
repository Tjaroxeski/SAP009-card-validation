# Cartão de Crédito Válido
Clique no link para ver o projeto [validator cartão de crédito](https://tataschultz.github.io/SAP009-card-validation/)
## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Protótipo](#4-imagem-do-protótipo-original)
* [5. Testes unitários dos metódos](#5-testes-unitários-dos-métodos)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.


## 2. Resumo do projeto

Este foi meu primeiro projeto de desenvolvimento Web, o objetivo foi criar um aplicativo da Web que permita ao usuário
validar o número de um cartão de crédito.  Além disso, 
implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto
os quatro últimos.

Meu objetivo foi criar uma página simples e intuitiva, onde o usuário pudesse validar 
os números do cartão para finalizar uma compra. O publico alvo foi definido como mulheres de 14 a 50 anos. 


Utilizei os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções,
bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS.


### Objetivo de aprendizagem

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

## 3. Considerações gerais

* O projeto foi realizado individualmente e finalizado em 4 semanas.
* Realizei testes unitários.


## 4. Protótipo 

Utilizei uma prototipagem simples, desenhei a ideia original, porém alguns itens como 
campo para incluir CPF e apelido do cartão foram retirados durante a realização do projeto. 

## 5. Testes unitários dos métodos.**
Os métodos `validator` (`isValid` e `maskify`) devem ser cobertos por testes unitários.