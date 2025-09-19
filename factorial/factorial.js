// Factorial of a number using while loop

const factorialOf = 5;
let factorial = 1;
let limit = 1;

while(limit <= factorialOf){
    factorial *= limit;
    limit++;
}

console.log("Factorial is", factorial)
