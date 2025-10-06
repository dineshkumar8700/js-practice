function paddWithZeroes(text, length) {
  return text.padStart(length, 0);
}

function formatDate(date, month, year) {
  const paddedDate = paddWithZeroes("" + date, 2);
  const paddedMonth = paddWithZeroes("" + month, 2);
  const paddedYear = paddWithZeroes("" + year, 4);

  return `${paddedDate}-${paddedMonth}-${paddedYear}`;
}

function isLastDayOfMonth(date, month) {
  return date === 31;
}

function incrementDate(date, month, year) {
  if (isLastDayOfMonth(date)) {
    date = 1;
    month = month + 1;
    return formatDate(date, month, year);
  }
  
  date += 1;
  return formatDate(date, month, year);
}

function nextDate(date) {
  const dateOfNumber = parseInt(date.slice(0, 2));
  const monthOfNumber = parseInt(date.slice(3, 5));
  const yearOfNumber = parseInt(date.slice(6));

  return incrementDate(dateOfNumber, monthOfNumber, yearOfNumber);
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
  const actual = nextDate(date);

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
  testIncrementDate("First day of year", "01-01-2025", "02-01-2025");
  testIncrementDate("Last day of month", "31-01-2025", "01-02-2025");
}

function main() {
  testAll();
}

main();
