/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var fibonacciNumArr = [0, 1];

  while (fibonacciNumArr[1] < maxFibValue) {

    // first element becomes highest number of last 2 Fib numbers
    fibonacciNumArr[0] = fibonacciNumArr[0] + fibonacciNumArr[1];

    // sort by ascending number order (highest number becomes second element)
    fibonacciNumArr.sort( function(a, b) { return a > b; });

    // add the last Fib numnber, if it is even.
    if (fibonacciNumArr[1] % 2 === 0) {
      sum += fibonacciNumArr[1];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};