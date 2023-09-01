const variabel = ["Apel", "Jeruk", "Tomat"];
// console.log(variabel);

variabel.push("Anggur"); // menambahkan element di akhir array
// console.log(variabel);

variabel.unshift("Strawberry"); // menambahkan element di awal array
// console.log(variabel);

variabel.pop(); // menghapus element terakhir di sebuah array
// console.log(variabel);

variabel.shift(); // menghapus element pertama di sebuah array
// console.log(variabel);

variabel.splice(2, 0, "Melon"); // tidak melakukan penghapusan element karena delete count yang ditulis adalah 0, sehingga menambahkan element baru dimulai dari index 2
// console.log(variabel);

// ---=== DUPLIKASI SEBUAH ARRAY ===---
let sample = ["A", "B", "C", "D", "E", "F"];
let dupeSample = sample.slice(); // menduplikasi keseluruhan element
let halfDupe = dupeSample.slice(0, dupeSample.length / 2); // menduplikasi element dimulai dari index 0 sampai index tengah
let endDupe = dupeSample.slice(dupeSample.length / 2); // menduplikasi element dimulai dari index tengah sampai akhir

// ---=== MENGGABUNGKAN SEBUAH ARRAY DENGAN ARRAY LAIN ===---
let spreadDupe = [...halfDupe, ...endDupe]; // menggunaan spread operator
// ["A", "B", "C", "D", "E", "F"]
let concatDupe = halfDupe.concat(endDupe); // menggunakan method concat

// console.log(concatDupe);
