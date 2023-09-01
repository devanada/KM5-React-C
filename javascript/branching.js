/*
if (condition 1) {
    ...
} else if (condition 2) {
    ...
} else {
    ...
}
*/
function greeting(jam) {
  if (jam < 12) {
    console.log("Selamat Pagi");
    return;
  } else if (jam < 18) {
    console.log("Selamat Sore");
    return;
  }
  console.log("Selamat Malam");
  return;
}

function greeting2(jam) {
  if (jam < 12) {
    return "Selamat Pagi";
  } else if (jam < 18) {
    return "Selamat Sore";
  }
  return "Selamat Malam";
}

function greetingTernary(jam) {
  return jam < 12
    ? "Selamat Pagi"
    : jam < 18
    ? "Selamat Sore"
    : "Selamat Malam";
}

/*
switch (number) {
    case 1:
        ...
    case 2:
        ...
    default:
        ...
}
*/

function greetingSwitch(jam) {
  switch (true) {
    case jam < 12:
      return " Selamat Pagi";
    case jam < 18:
      return "Selamat Sore";
    default:
      return "Selamat Malam";
  }
}

// console.log(greetingSwitch(16));

function isOdd(number) {
  const calculate = number % 2;
  //   if (calculate == 0) {
  //     return "EVEN";
  //   } else {
  //     return "ODD";
  //   }

  //   switch (calculate) {
  //     case 0:
  //       return "EVEN";
  //     default:
  //       return "ODD";
  //   }

  /*
  Ternary operator
  condition ? true : false
  */
  return calculate == 0 ? "EVEN" : "ODD";
}

console.log(isOdd(6));
