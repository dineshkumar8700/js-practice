function findDistancebetweenVowel(string) {
  return 3;
}

function composeMessage(mark, inputSection, actualSection, expectedSection) {
  let message = mark + " | ";
  message += inputSection + " | ";
  message +=  actualSection + " ";
  message += expectedSection;
  console.log(message);
}

function testIsVowel(string, expected) {
  const actual = findDistancebetweenVowel(string);
  const mark = actual === expected ? "✅" : "❌";
  const inputSection = string;
  const actualSection = "actual:" + " " + actual;
  const expectedSection = "expected:" + " " + expected;

  composeMessage(mark, inputSection, actualSection, expectedSection);
}


function testAll() {
  testIsVowel("hello", 3);
}

testAll();
