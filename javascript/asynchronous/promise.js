/*
Promise -> sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output.
*/

const bentengTakeshi = (nama) => {
  return new Promise((resolve, reject) => {
    console.log("--- BENTENG TAKESHI MULAI ---");
    console.log("Doakan aku ya!!!");

    let rate = Math.random() * 100;

    setTimeout(() => {
      if (rate > 50) {
        resolve(`Selamat ${nama} berhasil menakhlukan benteng Takeshi!`);
      } else {
        console.log("Dia bodoh tuan...");
        reject("Sayang sekali, anda gagal menakhlukan benteng Takeshi");
      }
    }, 3000);
  });
};

const playTakeshi = (nama) => {
  let resultFromPromise = "";
  bentengTakeshi(nama)
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error;
    })
    .finally(() => {
      // Finally akan dijalan ketika promise selesai diproses (entah dia fulfill atau reject)
      console.log("Game selesai");
    });
  console.log(resultFromPromise);
};

const playTakeshi2 = async (nama) => {
  let resultFromPromise = "";
  await bentengTakeshi(nama)
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error;
    })
    .finally(() => {
      // Finally akan dijalan ketika promise selesai diproses (entah dia fulfill atau reject)
      console.log("Game selesai");
    });
  console.log(resultFromPromise);
};

const playTakeshi3 = async (nama) => {
  let resultFromPromise = "";
  try {
    // Try akan dijalankan ketika terpenuhi (fulfill)
    const result = await bentengTakeshi(nama);
    resultFromPromise = result;
  } catch (error) {
    // Catch akan dijalankan ketika tidak terpenuhi (reject)
    resultFromPromise = error;
  } finally {
    // Finally akan dijalan ketika promise selesai diproses (entah dia fulfill atau reject)
    console.log("Game selesai");
  }
  console.log(resultFromPromise);
};

// playTakeshi3("Ryu");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
