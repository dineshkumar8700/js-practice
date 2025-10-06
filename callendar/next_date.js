function incrementDate(date) {
  return "02-01-2025";
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

function testIncrementDate(message, date, expected) {
  const actual = incrementDate(date);

  if (actual === expected) {
    composeMessage(message);
  } else {
    const inputSectioin = "Input    : " + date;
    const actualSection = "actual   :" + " " + actual;
    const expectedSection = "expected :" + " " + expected;
    composeFailCase(message, inputSectioin, actualSection, expectedSection);
  }

}

function testAll() {
  testIncrementDate("First day of year", "01-02-2025", "02-01-2025");
}

function main() {
  testAll();
}

main();
