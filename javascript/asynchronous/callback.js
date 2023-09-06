/*
Callback -> sebuah function yang dipanggil "setelah" melakukan sebuah proses, dalam kata lain akan dipanggil setelah sebuah proses telah berjalan.
*/

const buyer = (message, harga) => {
  console.log("Pesan martabak dong?", message, harga);
};

const seller = (callback) => {
  console.log("Pesan martabak dong? ... (wait sedang di masak)");
  setTimeout(() => {
    // <~ anggaplah ini sebagai simulasi ketika sebuah proses membutuhkan waktu
    // buyer("Sudah selesai kakak, harganya", 10000);
    callback("Sudah selesai kakak, harganya", 10000);
  }, 2000);
};

seller(buyer);
