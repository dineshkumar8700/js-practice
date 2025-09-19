const primeCandidate = 7;
let factor = 2;
let hasFactor = false
let isPrime = true

while (isPrime && factor < primeCandidate) {
    if (primeCandidate % factor === 0 ) {
        isPrime = false
    }
    factor ++;              
}

isPrime = (isPrime)? "is Prime":"is Composite"

console.log(primeCandidate, isPrime)                                                                     
