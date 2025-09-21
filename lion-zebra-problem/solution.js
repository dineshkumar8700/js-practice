const testCase1 = "L     L Z";
const testCase2 = "L   Z";
const testCase3 = "L   Z  L";
const testCase4 = "L  ZZ L Z";
const testCase5 = "L  Z   Z  L Z";
const testCase6 = "L  Z   Z L L   L";
const testCase7 = "L  Z L  Z";

let validTestCase = false;

const testCaseToUse = testCase2;

// Checking whether the provided input is valid or not.
for(let i = 0; i<testCaseToUse.length; i++){
    if(testCaseToUse[i] === "Z" || testCaseToUse[i] == "L" ){
        validTestCase = true;    
    }
}   

// Finding shortest number of spaces between any lion and any zebra
let shortestSpace = Infinity;
let currentSpace = 0;
let currentShortestSpace = 0;

for(let i = 0; i < testCaseToUse.length; i++){
    if(testCaseToUse[i] === "L"){
        for(let j = 1; j <testCaseToUse.length; j++){
            if(testCaseToUse[i+j] === "Z"){
                currentShortestSpace = currentSpace;
            }
            else if(testCaseToUse[i+j] === "L"){
                currentSpace = 0;
            }
            else{
                currentSpace += 1;
            }
        }
        shortestSpace = (currentShortestSpace < shortestSpace)? currentShortestSpace:shortestSpace
        currentSpace = 0;
    }
    else if(testCaseToUse[i] === "Z"){
        for(let j = 1; j < testCaseToUse.length; j++){
            if(testCaseToUse[i+j] === "L"){

                currentShortestSpace = currentSpace;
                shortestSpace = (currentShortestSpace < shortestSpace)? currentShortestSpace:shortestSpace;

            }
            else if(testCaseToUse[i+j] === "Z"){
                currentSpace = 0;
            }
            else{
                currentSpace += 1;
            }
        }
        shortestSpace = (currentShortestSpace < shortestSpace)? currentShortestSpace:shortestSpace;
    }
}      

shortestSpace = (currentShortestSpace < shortestSpace)? currentShortestSpace:shortestSpace;

if(validTestCase){
    console.log("Input:", testCaseToUse, "Output:",shortestSpace);
}
else{
    console.log("-1 \nInvalied Input. Kindly enter Z & L in the input string.");
}
