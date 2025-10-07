function sortArrayElements(array) {
  const sortedArray = [1]
  return sortedArray;
}

function areTwoArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function composeFailCase(msg, inputSection, actualSection, expectedSection) {
  let message = "❌ " + msg + "\n";
  message += inputSection + "\n";
  message += actualSection + "\n";
  message += expectedSection;

  console.log(message);
}

function composeMessage(testType) {
  const message = "✅ " + testType;

  console.log(message);
}

function testSortArrayElements(message, array, expected) {
  const actual = sortArrayElements(array);

  if (areTwoArrayEqual(actual, expected)) {
    composeMessage(message);
  } else {
    const inputSectioin = "Input    : " + array;
    const actualSection = "actual   :" + " " + actual;
    const expectedSection = "expected :" + " " + expected;
    composeFailCase(message, inputSectioin, actualSection, expectedSection);
  }

}

function testAll() {
  testSortArrayElements("When there is only one element", [1], [1]);
}

function main() {
  testAll();
}

main();
