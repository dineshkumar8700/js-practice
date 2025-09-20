const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
let validTestCase = false;
let shortestSpace;
let currentSpace;

const testCaseToUse = testCase1;

// Checking whether the provided input is valid or not.
for(let i = 0; i<testCaseToUse.length; i++){
    if(testCaseToUse[i] === "Z" || testCaseToUse[i] == "L" ){
        validTestCase = true;    
    }
}   

if(validTestCase){
    console.log("Input:", testCaseToUse, "Output:", "0");
}
else{
    console.log("-1 \nInvalied Input. Kindly enter Z & L in the input string.")
}
