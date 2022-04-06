const warna = require("./../fajriawan/dummyData").warna;

//basic js map filter data banyak

//1. buat function contoh myFunc(hexcode), yang mereturn string warna dari hexcode tersebut
// jika myFunc("#0048BA") akan memiliki output string "Absolute Zero"
//notes: gunakan dataDummy warna
function hexcodeFunction(warnaHex) {
  const myArray = [...warna];
  let output = "";

  myArray.forEach((val, index) => {
    let tempHexList = val.hex;
    if (tempHexList.includes(warnaHex)) {
      output = val.name;
    }
  });
  return output;
}
console.log(hexcodeFunction("#0048BA"));

//2. buat function contoh myFunc(colorName), yang mereturn array warna-warna yang mengandung kata2 colorName
// jika myFunc("grey") akan memiliki output array ["Battleship Grey", "Cadet Grey", ...]
//notes: gunakan dataDummy warna
function colorNameFunction(colorName) {
  const myArray = [...warna];
  let output = [];

  myArray.forEach((val, index) => {
    let tempNameList = val.name;
    if (tempNameList.includes(colorName)) {
      output.push(val.name);
    }
  });
  return output;
}
console.log(colorNameFunction("Grey"));

// basic js loop
// 1. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 2 properties, penjumlahan semua bilangan sesama genap dan sesama ganjil
// contoh output: { "sum_all_genap" : 22, "sum_all_ganjil": 23 }
function loopingNo1() {
  let genap = 0;
  let ganjil = 0;
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      genap += i;
    } else {
      ganjil += i;
    }
  }
  //let output = "sum_all_genap : " + genap + ", " + "sum_all_ganjil : " + ganjil;
  let output = {
    "sum_all_genap" : genap,
    "sum_all_ganjil" : ganjil
  }
  return output;
}
console.log(loopingNo1());

// 2. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 3 properties,
// tiap-tiap properties merupakan array yang berisi bilangan prima, bilangan genap, bilangan ganjil
// contoh output: { "genap" : [0,2,4,6, ...], "ganjil": [1,3,5,7], "prima": [2,3,5,7, ...] }
function loopingNo2() {
  let ganjil = []
  let genap = []
  let prima = []
  let output = {
    "ganjil" : ganjil,
    "genap" : genap,
    "prima" : prima
  }

  for (let i = 0; i <=20; i++) {
    if (i / i == 1 && i % 2 == 1 && i % 3 == 1) {
      prima.push(i)
    } else if (i % 2 == 0) {
      genap.push(i)
    } else {
      ganjil.push(i)
    }
  }
  return output
}
console.log(loopingNo2())

// 3. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// jika number adalah kelipatan 2, dia akan menjadi element array berupa string "lipat2"
// jika number adalah kelipatan 3, dia akan menjadi element array berupa string "lipat3"
// jika number adalah kelipatan 2 dan 3, dian akan menjadi element array berupa string "lipat2dan3"
// jika bukan merupakan kelipatan 2 ataupun 3, dia akan menjadi element array berupa angka itu sendiri
// output: [0, 1,"lipat2", "lipat3", "lipat2", 5, "lipat2dan3", 7, ... ]
function loopingNo3() {
  let output = []

  for (let i = 0; i <= 20; i++) {
    if (i == 0) {
      output.push(i)
    } else if (i % 2 == 0 && i % 3 == 0) {
      output.push("lipat2dan3")
    } else if (i % 3 == 0) {
      output.push("lipat3")
    } else if (i % 2 == 0) {
      output.push("lipat2")
    } else {
      output.push(i)
    }
  }
  return output
}
console.log(loopingNo3())

//4. buat function, berisi loop dari 1 sampai 99
// memiliki output (return) hasil penjumlahan bilangan-bilangan yang habis dibagi 5 atau 7
// notes: angka-angka yang ditotal berarti: 5,7,10,14,15,20,21,25,28,dst
function loopingNo4() {
  let output = 0
  for (let i = 0; i <= 99; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
      output += i
    }
  }
  return output
}
console.log(loopingNo4())

