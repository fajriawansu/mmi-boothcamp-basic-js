const warna = require("./../fajriawan/dummyData").warna;
const resep = require("./../fajriawan/dummyData").resep;
const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;

// tambahan jam 12 siang

//basic js
//1. buat function, yang mengecek tipe data arguments-arguments didalamnya
// jika semua arguments adalah number, return string "All Arguments is Number"
// jika semua arguments adalah string, return string "All Arguments is String"
// jika semua arguments adalah object, return string "All Arguments is Object"
// jika semua arguments adalah array, return string "All Arguments is Array"
// lanjut ---
// jika arguments lebih dari 1 tipe return object, banyaknya properties sesuai banyaknya tipe, valuenya adalah jumlah masing2 tipe
// contoh: {"strType": 1, "numType": 2} atau {"strType": 1, "arrType": 4}

//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna
const hexcodeFunction = (hexcode) => {
  const myArray = [...warna];
  output = [];

  myArray.forEach((val, index) => {
    let tempHexcode = val.hex;
    if (hexcode.length < 4) {
      output.push("Data Salah")
    } else if (tempHexcode.includes(hexcode)) {
      output.push(val.hex);
    }
  });
  return output[0];
};
console.log(hexcodeFunction("#FF8"));

//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep
const stepIngreFunction = (foodName) => {
  const myArray = [...resep];
  let step = [];
  let ingredients = [];
  let output = {
    step: step,
    ingredients: ingredients,
  };

  myArray.forEach((val, index) => {
    const tempName = val.name;
    if (tempName.includes(foodName)) {
      step.push(val.steps);
      for (let i = 0; i < val.ingredients.length; i++) {
        ingredients.push(val.ingredients[i].name);
      }
    }
  });
  return output;
};
console.log(stepIngreFunction("Crock Pot Roast"));

//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna
const randomHex = () => {
  const myArray = [...warna];
  
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const item = myArray[randomIndex];
  let output = item.hex
  return output
};
console.log(randomHex())

//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const fungsiNo6 = (waktu) => {
  const myArray = [...resep];
  let output = [];

  myArray.forEach((val, index) => {
    let tempTimer = val.timers;
    if (tempTimer.reduce((total, timer) => total + timer < waktu)) {
      output.push(val.name);
    }
  });
  return output;
};
console.log(fungsiNo6(60));

//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const fungsiNo7 = (waktu, totalBahan) => {
  let output = [];

  [...resep].forEach((val, index) => {
    let tempTimer = val.timers;
    let tempBahan = val.ingredients;
    if (
      tempTimer.reduce((total, timer) => total + timer < waktu) &&
      tempBahan.length < totalBahan
    ) {
      output.push(val.name);
    }
  });
  return output;
};
console.log(fungsiNo7(60, 7));

//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const fungsiNo8 = (theIngredients) => {
  const myArray = [...resep];
  let output = [];

  myArray.forEach((val, index) => {
    const tempResep = val.ingredients;
    if (tempResep.some((bahanResep) => bahanResep.name == theIngredients)) {
      output.push(val.name);
    }
  });
  return output;
};
console.log(fungsiNo8("cinnamon"));

// data relation
//9. buat function contoh myFunc(), yang mereturn array mahasiswa yang 
// menambah 2 properties baru yaitu "data_matkul" dan "data_dosbing"
// tiap-tiap elementnya berisi object berdasarkan properties matkul_id dan dosbing_id


//10. buat function contoh myFunc(namaDosen), yang mereturn array mahasiswa yang dibimbing oleh dosen tersebut
// jika myFunc("Pak Diki"), output ["Asep", "Udin"]
// notes: gunakan dataDummy bulk mahasiswa

//11. buat function contoh myFunc(namaMahasiswa), yang mereturn number jumlah sks yang diambil
// jika myFunc("Dimas"), output 10
// notes: gunakan dataDummy bulk mahasiswa
