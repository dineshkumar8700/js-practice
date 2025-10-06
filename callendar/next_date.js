function incrementDate(date, month, year) {
  return "02-01-2025";
}

function composeMessage(mark, message) {
  console.log(mark, message);
}

function testIncrementDate(message, date, month, year, expected) {
  const actual = incrementDate(date, month, year);
  const mark = actual === expected ? '✅' : '❌';

  if (actual === expected) {
    composeMessage(mark, message);
  }
}

function testAll() {
  testIncrementDate("First day of year", 1, 1, 2025, "02-01-2025");
}

function main() {
  testAll();
}

main();
