const testCase1 = 12924832252;
const subString = 2;
let subStringLength = ("" + subString).length;
let currentSubString = "";

const testCaseToUse = testCase1;
let testCaseToUseInString = ""+ testCaseToUse;

let subStringOccurance = 0;
for(let i = 0; i < testCaseToUseInString.length-(subStringLength-1); i++){
    for(let j = 0; j < subStringLength; j++){
        currentSubString += testCaseToUseInString[i+j];
    }
    if( currentSubString=== "" + subString){
        subStringOccurance += 1;
    }
    currentSubString = "";
}

console.log("Input:", testCaseToUse, "Sub String:", subString, "Occurance:", subStringOccurance);
