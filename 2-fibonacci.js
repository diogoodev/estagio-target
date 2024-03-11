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
