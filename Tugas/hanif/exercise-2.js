//basic js selasa
const theNumber = [-1, -12, 0, 1, 3, 12, 16, -25, 12, 71, 32];
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])
const squareNum = theNumber.map((number) => {
  return number * number;
});
console.log(squareNum);

//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])
const lengthTheNumber = theNumber.length;
function squareNumNext() {
  a = [];
  for (i = 0; i < lengthTheNumber; i++) {
    if (i != theNumber.length - 1) {
      a[i] = theNumber[i] * theNumber[i + 1];
    } else {
      a[i] = theNumber[i] * theNumber[0];
    }
  }
  return a;
}
console.log(squareNumNext());

//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})
function oddEvenNum() {
  a = 0;
  b = 0;
  for (i = 0; i < lengthTheNumber; i++) {
    if (theNumber[i] % 2 == 0) {
      a += 1;
    } else if (theNumber[i] % 2 != 0) {
      b += 1;
    } else if (theNumber[i] == 1) {
      b += 1;
    }
  }
}
//console.log(oddEvenNum())

//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar
const tempTheNumber1 = [...theNumber].sort(function (a, b) {
  return a - b;
});
console.log(tempTheNumber1);

//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])
const tempTheNumber2 = [...theNumber].sort(function (a, b) {
  return b - a;
});
console.log(tempTheNumber2);

// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"
function ratioFunction(val1, val2) {
  if (val1 > val2) {
    return "Lebih Besar";
  } else if (val2 > val1) {
    return "Lebih Kecil";
  } else {
    return "Sama Besar";
  }
}
console.log(ratioFunction(2, 1), ratioFunction(1, 2), ratioFunction(1, 1));

//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"
function conversFunction(val1, str2, str3) {}

//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"
function tempConversFunction(val1, val2, val3) {
  a = 0;
  if (val2 == "C" && val3 == "F") {
    a = val1 + 32;
    return a;
  } else if (val2 == "F" && val3 == "K") {
    a = ((val1 - 32) * 5) / 9 + 273.15;
    return a;
  } else if (val2 == "C" && val3 == "K") {
    a = val1 + 273.15;
    return a;
  }
}
console.log(tempConversFunction(32, "F", "K"));

//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"
function times3Function(num1) {
  if (num1 % 3 == 0) {
    return "Kelipatan 3";
  } else {
    return "Bukan Kelipatan 3";
  }
}
console.log(times3Function(6) + " , " + times3Function(13));
