/*
1. for loop
2. while / do while loop
3. forEach loop
4. for of loop
5. for in loop
6. map
*/

const variabel = ["Apel", "Jeruk", "Tomat"];

function forLoop(arr) {
  /*
    for (init; condition; post) {
        ...
    }
    */
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let i = 0;
  /*
    while (condition) {
        ...
    }
    */
  //   while (i < arr.length) {
  //     console.log(arr[i]);
  //     i++;
  //   }

  /*
  do {
    ...
  } while (condition)
  */
  do {
    console.log(arr[i]);
    i++;
  } while (i < arr.length);
}

function forInLoop(arr) {
  /*
  selain array, bisa juga dipakai untuk object
    for (const key in object) {
        ...
    }
    */
  for (const key in arr) {
    console.log(arr[key]);
  }
}

function forOfLoop(arr) {
  /*
    for (const element of array) {
        ...
    }
    */
  for (const element of arr) {
    console.log(element);
  }
}

// forOfLoop(variabel);

let jual_kendaraan = [
  {
    name: "Rubicon",
    harga: 10000,
    deskripsi: "Beli pakai uang rakyat",
  },
  {
    name: "Harley Davidson",
    harga: 5000,
    deskripsi: "Klub motornya bubar",
  },
  {
    name: "Pajero",
    harga: 7500,
    deskripsi: "Dijual karena arogan di jalan",
  },
];

const objVariabel = {
  id: 1,
  name: "Juminten",
  kuliah: "Washington",
  hobi: "Main ke Las Vegas",
};

jual_kendaraan.forEach((kendaraan, index) => {
  kendaraan.id = index + 1;
  kendaraan.isSold = false;
});

const dupeArray = jual_kendaraan.map((kendaraan) => {
  //   return { ...kendaraan }; // <~~ spread operator
  return {
    id: kendaraan.id,
    name: kendaraan.name,
    deskripsi: kendaraan.deskripsi,
    harga: kendaraan.harga,
    isSold: kendaraan.isSold,
  };
});

console.log(jual_kendaraan);
console.log(dupeArray);

// ---=== AKSES PROPERTY/VALUE DI DALAM OBJECT/ARRAY ===---

// console.log(jual_kendaraan[jual_kendaraan.length - 1]);
// console.log(jual_kendaraan[0].name);

// console.log(objVariabel.name); // dot notation
// console.log(objVariabel["kuliah"]); // bracket notation
