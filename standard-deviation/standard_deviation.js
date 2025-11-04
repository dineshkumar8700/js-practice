function sort(data) {
  const sortedData = data.slice();

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}


function power(num) {
  return num ** 2;
}

function sumOf(data){
  let sum = 0;
  
  for (let index = 0; index < data.length; index++) {
    sum += data[index];    
  }
  
  return sum;
} 

function meanOf(data) {
  return sumOf(data)/data.length;
}

function calculateSD(data) {
  const sum = sumOf(data);
  return Math.sqrt(sum / data.length);
}

function standardDeviation(data) {
  const mean = meanOf(data);
  console.log("Mean:", mean);
  const differences = [];

  for (let index = 0; index < data.length; index++) {
    const difference = data[index] - mean;
    differences.push(power(difference));   
  }

  return calculateSD(differences);
}

const kohliIPL2025 = [59, 31, 7, 67, 22, 62, 1, 73, 70, 51, 62, 43, 54, 12, 43];

console.log("\nVirat Kohli in IPL season 2025");
console.log("SD  :", standardDeviation(kohliIPL2025));

const gillIPL2025 = [33, 38, 14, 61, 2, 60, 7, 90, 84, 76, 43, 93, 35, 13, 1];

console.log("\nShubhman Gill in IPL season 2025");
console.log("SD  :", standardDeviation(gillIPL2025));
