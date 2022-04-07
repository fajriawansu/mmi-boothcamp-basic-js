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

//console.log(warna[0]);
