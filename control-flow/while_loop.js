// Printing sum of n terms using While Loop

const inputNumber = 10;
let currentTerm = 1;
let sum = 0;

while(currentTerm <=inputNumber){
    sum += currentTerm;
    currentTerm +=1;
}

console.log("Sum of first", inputNumber, "Natural Number is:", sum);
