/*
- Synchronous -> setiap perintah/command itu dijalankan satu per satu sesuai urutan code (blocking)
- Asynchronous -> eksekusi atau output-nya tidak selalu berdasarkan urutan code, melainkan berdasarkan waktu proses (non-blocking)
*/

// console.log("Hello");
// console.log("JavaScript");
// console.log("Coder");

console.log("Hello");
setTimeout(() => {
  console.log("JavaScript");
}, 3000);
console.log("Coder");
