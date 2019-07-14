function reverseNumber(n) {
  var number,
    outcome = 0;
  while (n) {
    number = n % 10;
    outcome = outcome * 10 + number;
    n = (n / 10) | 0;
  }
  return outcome;
}
alert("rev numbers: " + reverseNumber(+prompt("Enter number")));
