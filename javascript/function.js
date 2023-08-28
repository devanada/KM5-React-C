/*
function funcName(param) {
    ..........
}

Function adalah sebuah hal dimana kita bisa membuat coding kita lebih segmented dan bisa dipergunakan kembali

- funcName | nama dari fungsi tersebut, ditulis secara deskriptif dari apa yang dia proses didalamnya
- param | parameter yang didapat di luar dari function tersebut, parameter didalam fungsi bisa lebih dari satu
*/

// ---=== FUNCTION EXPRESSION ===---
function greeting(jam) {
  if (jam < 12) {
    console.log("Selamat Pagi");
  } else if (jam < 18) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat Malam");
  }
}

// greeting(18);

function multiply1(a, b) {
  const result = a * b;
  return result;
}

// function multiply1(a, b) {
//   return a * b;
// }

function multiply2(a, b) {
  const result = a * b;
  console.log(result);
}

// multiply1(2, 2); // kosongan
// multiply2(2, 2); // 4
// console.log(multiply1(2, 2)); // 4
// console.log(multiply2(2, 2)); // 4 & undefined

// ---=== ARROW FUNCTION ===---
const arrowMultiply1 = (a, b) => {
  const result = a * b;
  return result;
  //   return a * b;
};

const arrowMultiply2 = (a, b) => a * b;

console.log(arrowMultiply1(2, 2)); //
console.log(arrowMultiply2(2, 2)); //

const HOURS_IN_DAY = 24;
