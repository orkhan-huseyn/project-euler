/**
 * Find the sum of all the multiples of 3 or 4 below N.
 * @param {number} N
 * @returns {void}
 */
function multiplesOf3And5(N) {
  var n = BigInt(N);
  n = n - 1n;

  var sum = BigInt(0);

  var temp1 = n / 3n;
  var temp2 = n / 5n;
  var temp3 = n / 15n;

  // add sum of all numbers divisible by 3
  sum += (3n * temp1 * (temp1 + 1n)) / 2n;
  // add sum of all numbers divisible by 5
  sum += (5n * temp2 * (temp2 + 1n)) / 2n;
  // subtract sum of all numbers divisible by 3 and 5 (redundant)
  sum -= (15n * temp3 * (temp3 + 1n)) / 2n;

  // cut n from BigInt and log it
  console.log(sum.toString().substring(0, sum.toString().length));
}
