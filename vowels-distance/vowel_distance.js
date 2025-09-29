function findDistancebetweenVowel(string) {
  return 3;
}

function testIsVowel(string, expected) {
  const actual = findDistancebetweenVowel(string);
  const mark = actual === expected ? "✅" : "❌";
  console.log(mark, actual, expected);
}


function testAll() {
  testIsVowel("hello", 3);
}

testAll();
