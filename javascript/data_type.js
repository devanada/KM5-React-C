/*
Tipe Data Primitive
1. Integer/Number -> 123, 12.3
2. Boolean -> true/false
3. String -> "Hello World", "test", "123", "12.3"
4. Null -> null
5. Undefined -> 

Tipe Data Collection
1. Object -> { name: "John", age: 34 }
2. Array -> [`Hello`, "World"], [1, 2, 3], [{}, {}, {}]
*/

// ---=== STRING ===---

/*
`` -> backtick
'' -> single quote
"" -> double quote
*/

let firstName = "Robert";
let lastName = "Summer";

// const fullName = firstName + lastName; // RobertSummer
// const fullName = firstName + " " + lastName; // Robert Summer
const fullName = `${firstName} ${lastName}`; // Robert Summer

// console.log(fullName);

// ---=== NUMBER/INTEGER ===---
let number = 123;
let number2 = "123";

const varA = 4;
const varB = 5;

const sum = varA + varB;
const difference = varB - varA;
const multiply = varA * varB;
const division = varA / varB;
const mod = varA % varB;

// console.log(sum, difference, multiply, division, mod);

let varC = 3;
let varD = 4;
// console.log(varC, varD);
// varC++; // varC = varC + 1
// varD++; // varD = varD + 1
varC = 2; // varC = varC + 2
varD += 2; // varD = varD + 2
// console.log(varC, varD);

// Comparison
// console.log(5 > 5); // false
// console.log(5 < 5); // false
// console.log(5 >= 5); // true
// console.log(5 <= 5); // true

// console.log((number = number2)); // merubah nilai / reassignment
// console.log(number == number2); // hanya di cek nilainya saja
// console.log(number === number2); // selain nilai, tipe data juga di cek

// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log("5" != 5); // false
// console.log("5" !== 5); // true

// ---=== LOGICAL ===---
const condition1 = 5 < 4; // false
const condition2 = 5 > 4; // true

/*
&& -> outputnya menjadi true kalau semua kondisi dalam keadaan true
|| -> outputnya menjadi true kalau salah satu kondisi dalam keadaan true
*/

// console.log(condition1 && condition2); // false && true = false
// console.log(condition1 || condition2); // false && true = true

// ---=== ASSIGNMENT ===---
let cobaA = 1;
let cobaB = 4;
let cobaC = 4;
let cobaD = 4;
let cobaE = 4;
cobaA += 2; // cobaA = cobaA + 2
cobaB -= 2; // cobaB = cobaB - 2
cobaC *= 2; // cobaC = cobaC * 2
cobaD /= 2; // cobaD = cobaD / 2
cobaE %= 2; // cobaE = cobaE % 2
// console.log(cobaA, cobaB, cobaC, cobaD, cobaE);
