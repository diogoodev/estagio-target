/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/


function fibonacci(n) {
  let a = 0;
  let b = 1;
  const sequence = [];

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }

  return sequence;
}

function belongsToFibonacci(number, sequence) {
  return sequence.includes(number);
}

const userInput = parseInt(prompt("Digite um número: "));
const fibonacciSequence = fibonacci(100);


if (belongsToFibonacci(userInput, fibonacciSequence)) {
  console.log(`O número ${userInput} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${userInput} não pertence à sequência de Fibonacci.`);
}
