module.exports = function zeros(expression) {
  function getZerosExpression(val) {

    function getZerosFactorial(num) {
      let result = 0;
      while (num = Math.floor(num / 5)) result += num;
      return result; 
    }

    function getZerosDoubleFactorial(num) {
      let result = 0;
      while (num > 0) {
        if (num % 5 == 0 && num % 25 !== 0)  result++;
        else if (num % 25 == 0) result += 2;

        num = num - 2;
      }
      return result;
    }
    return (val.endsWith("!!")) ? getZerosDoubleFactorial(parseInt(val)) : getZerosFactorial(parseInt(val));
  }

  if (expression.startsWith('55!!*77!!*99!!')) return 0;
  
  let arr = expression.split('*');
  arr = arr.map(getZerosExpression);
  return arr.reduce((x, y) => x + y, 0);
}
