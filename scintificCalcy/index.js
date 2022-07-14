function deleteChar(input) {
  return (value = input.substring(0, input.length - 1));
}

function sqr(input) {
  return (value = input ** 2);
}
function oneby(input) {
  if (input == 0) {
    return "Cannot divide by zero";
  } else {
    return (value = 1 / input);
  }
}

function sqrt(input) {
  return Math.sqrt(input);
}

function expo(value) {
  if (value.indexOf("^") > -1) {
    var base = value.slice(0, value.indexOf("^"));
    var exponent = value.slice(value.indexOf("^") + 1);
    return (value = eval("Math.pow(" + base + "," + exponent + ")"));
  } else {
    return (value = eval(Result.value));
  }
}

function factorial(input) {
  if (input == 0) {
    return 1;
  } else if (input < 0) {
    return "undefined";
  } else {
    var fact = 1;
    for (var i = input; i > 0; i--) {
      fact = fact * i;
    }
    return fact;
  }
}

function changeSign(input) {
  if (input.substring(0, 1) == "-") {
    return input.substring(1, input.length);
  } else {
    return (intput = "-" + input);
  }
}
