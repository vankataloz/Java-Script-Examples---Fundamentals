function calculator(num1, operator, num2) {
  let sum;
  /* if (operator == '+') {
        result = num1 + num2;
    }
    else if (operator == '/') {
        result = num1 / num2;
    }
    else if (operator == '-') {
        result = num1 - num2;
    }
    else if (operator == '*') {
        result = num1 * num2;
    }
    console.log(result.toFixed(2)); */
  switch (operator) {
    case "+":
      sum = num1 + num2;
      console.log(sum.toFixed(2));
      break;
    case "-":
      sum = num1 - num2;
      console.log(sum.toFixed(2));
      break;
    case "*":
      sum = num1 * num2;
      console.log(sum.toFixed(2));
      break;
    case "/":
      sum = num1 / num2;
      console.log(sum.toFixed(2));
      break;
  }
}
calculator(5, "+", 10);
