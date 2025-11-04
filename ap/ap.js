// Finding AP from a number to a certain number 

const firstTerm = 2;
const difference = 4;
let limit = 7;
let numberOfTerms = 1;
let currentTerm = firstTerm;

console.log("First Term:", firstTerm, "Difference:", difference, "Limit:", limit);
console.log(firstTerm);

while (numberOfTerms < limit) {
  currentTerm += difference;
  console.log(currentTerm);
  numberOfTerms++;
}
