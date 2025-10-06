function paddWithZeroes(text, length) {
  return text.padStart(length, 0);
}

function formatDate(date, month, year) {
  const paddedDate = paddWithZeroes("" + date, 2);
  const paddedMonth = paddWithZeroes("" + month, 2);
  const paddedYear = paddWithZeroes("" + year, 4);

  return `${paddedDate}-${paddedMonth}-${paddedYear}`;
}

function isLeapYear(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  const leapYear = isDivisibleBy4 && !isDivisibleBy100 || isDivisibleBy400;

  return leapYear;
}

function isLastDayOfMonth(month, year) {
  switch (month) {
    case 2: return isLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
    default: return 31;
  }
}

function isLastDayOfYear(date, month, year) {
  const isLastDay = date === isLastDayOfMonth(month, year);

  return isLastDay && month === 12;
}

function isInvalidDate(date, month, year) {
  if (date === 31 && month === 12 && year === 9999) {
    return true;
  }

  const maxDaysInMonth = isLastDayOfMonth(month, year);

  return date === 0 || date > maxDaysInMonth || month > 12 || month === 0;
}

function incrementDate(date, month, year) {
  if (isInvalidDate(date, month, year)) {
    return "Invalid Date";
  }

  if (isLastDayOfYear(date, month, year)) {
    date = 1;
    month = 1;
    year += 1;
    return formatDate(date, month, year);
  }

  if (date === isLastDayOfMonth(month, year)) {
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
  testIncrementDate("1 Jan ", "01-01-2025", "02-01-2025");
  testIncrementDate("31 Jan", "31-01-2025", "01-02-2025");
  testIncrementDate("31 March", "31-03-2025", "01-04-2025");
  testIncrementDate("31 May", "31-05-2025", "01-06-2025");
  testIncrementDate("31 July", "31-07-2025", "01-08-2025");
  testIncrementDate("31 August", "31-08-2025", "01-09-2025");
  testIncrementDate("31 October", "31-10-2025", "01-11-2025");
  testIncrementDate("30 April", "30-04-2025", "01-05-2025");
  testIncrementDate("30 June", "30-06-2025", "01-07-2025");
  testIncrementDate("28 Feb (Leap year)", "28-02-2024", "29-02-2024");
  testIncrementDate("28 Feb (Non leap year)", "28-02-2025", "01-03-2025");
  testIncrementDate("31 December", "31-12-2024", "01-01-2025");
  testIncrementDate("More than month in year", "12-13-2024", "Invalid Date");
  testIncrementDate("0 Jan", "00-01-2024", "Invalid Date");
  testIncrementDate("first date", "01-01-0000", "02-01-0000");
  testIncrementDate("Last date", "31-12-9999", "Invalid Date");
}

function main() {
  testAll();
}

main();
