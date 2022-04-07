// datatype string
const dataDummy = require("./../fajriawan/dummyData");
const fullname = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
// const returnFirstname = {
//     firstName: function () {
//         fullname.charAt(0);
//         return firstName;
//     }
// }

const returnFirstname = fullname.slice(0, 6);
console.log(returnFirstname);

//2. Gunakan string method untuk mereturn panjang string
const fullnameLength = fullname.length;
console.log(fullnameLength);

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
const replaceFullname = fullname.replaceAll("a", "i");

console.log(replaceFullname);

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"
function tukar(fullname) {
  let changeNama = "";
  for (let i = fullname.length - 1; i >= 0; i--) {
    changeNama += fullname[i];
  }
  return changeNama;
}

console.log(tukar(fullname));

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
function checktrue(url) {
  let checkurl = url.startsWith("/dashboard/main");
  return checkurl;
}

console.log(checktrue(url1));

//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)
function checkfalse(url) {
  let checkurl = url.startsWith("/Dashboard/main");
  return checkurl;
}

console.log(checkfalse(url2));

// datatype number

const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string
const numToString = phoneNumber.toString();
console.log(numToString, typeof numToString);

//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)
const floatToInteger1 = parseInt(num1);
const floatToInteger2 = num1.toFixed();
console.log(floatToInteger1, floatToInteger2);
// datatype object

const kucingku = {
  nama: "Oren",
  kaki: 4,
  ekor: 1,
  teman: ["Garong"],
};

//1. ubah nama jadi "Si Oren"
const copykucingku = {
  ...kucingku,
  nama: "Si oren",
};
console.log(copykucingku);

//2. buat object baru, berisi data "kucingku" dan 2 properties baru
const copykucingku2 = {
  ...copykucingku,
  warna: "Putih Abu-Abu",
  makanan: "Ikan bakar",
};
console.log(copykucingku2);

//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)
const biodata = {
  nama_depan: "Hanif Dwitama",
  nama_belakang: "Putera",
  full_name: function () {
    return this.nama_depan + " " + this.nama_belakang;
  },
  phone_number: "12345678",
  alamat: {
    kota: "Jakarta",
    provinsi: "DKI Jakarta",
    alamat_lengkap: function () {
      return this.kota + " " + this.provinsi;
    },
  },
};
console.log(biodata);
//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap
const namaDepan = biodata.nama_depan;
const namaBelakang = biodata.nama_belakang;
const alamat = biodata.alamat.alamat_lengkap();
const alamatKota = biodata.alamat.kota;
const namaLengkap = biodata.full_name();
const namaLengkap2 = biodata.nama_depan + " " + biodata.nama_belakang;

console.log(namaDepan);
console.log(namaBelakang);
console.log(alamat);
console.log(alamatKota);
console.log(namaLengkap);

// datatype array
const selai = ["cokelat", "stroberi", "alpukat"];
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)
const myArray = ["Ayam", "Ikan", "Sapi", 1, 2, 3].concat(selai);
console.log(myArray);

//2. Buat nested array dengan nama "nestedArray"
const nestedArray = [
  {
    id: 1,
    nama_depan: "Hanif Dwitama",
    nama_belakang: "Putera",
    phone_number: "12345",
    alamat: {
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
    },
  },
  {
    id: 2,
    nama_depan: "Agung",
    nama_belakang: "Bisa",
    phone_number: "54321",
    alamat: {
      kota: "Bekasi",
      provinsi: "Jawa Barat",
    },
  },
];

const arrayNum = [11, 12, 45, 24, 32, 100];
//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)
const myDataNum = selai[0];
console.log(myDataNum);

//4. ubah data index 3 menjadi 44
const changeArrayNum = arrayNum.splice(2, 2, 44);
console.log(changeArrayNum);

const multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)
const myDataMultiArray = multiArray[3][0][2];
console.log(myDataMultiArray);

const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya
hewan.pop();
hewan.shift();
hewan.push("kambing");
hewan.push("dinosaurus");
hewan.unshift("babi");

console.log(hewan);

//7. ubah hewan jadi string yang dipisah koma
const stringHewanKoma = hewan.toString();
console.log(stringHewanKoma, typeof stringHewanKoma);

//8. ubah hewan jadi string yang dipisah pagar (#)
const stringHewanPagar = hewan.join(" # ");
console.log(stringHewanPagar, typeof stringHewanPagar);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas
const arr123 = arr1.concat(arr2, arr3);
console.log(arr123.toString());

//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja
const arr4 = arr123.slice(1, 5);
console.log(arr4);

// const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending
const warga = dataDummy.warga;
function sortWarga(a, b) {
  let before = a.nama;
  let after = b.nama;
  if (before < after) {
    return -1;
  }
  if (after < before) {
    return 1;
  }
}

console.log(warga.sort(sortWarga));

//12. urutkan berdasarkan umur, descending
function sortWargaUmur(a, b) {
  let before = a.umur;
  let after = b.umur;
  if (before < after) {
    return 1;
  }
  if (after < before) {
    return -1;
  }
}

console.log(warga.sort(sortWargaUmur));

//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
const newMapping = warga.map((value, index) => {
  return {
    data_lengkap: value.nama + " umur " + value.umur,
  };
});
// (contoh: {data_lengkap: "Asep umur 18"})

//selasa nih

//14. buat array yang hanya menampilkan 'warga' di bawah umur 30
const filter30 = warga.filter((value, index) => {
  return value.umur < 30;
});

console.log(filter30);

//15. buat function contoh myFunction(num1) yang berisi arguments umur
// jika myFunction(32) akan mereturn array ["Budi"]
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa
function myFunction(num) {
  let filterNum = warga.filter((value, index) => {
    return value.umur == num;
  });
  const searchNama = filterNum.map((value, index) => {
    return value.nama;
  });
  return searchNama;
}

console.log(myFunction(32));

// selasa jam set 11 nih
//15. buat method .some() dengan array "warga" yang memiliki return "true"
const someWargaTrue = warga.some((val) => val.umur > 23);
console.log(someWargaTrue);

//16. buat method .some() dengan array "warga" yang memiliki return "false"
const someWargaFalse = warga.some((val) => val.umur > 80);
console.log(someWargaFalse);

//17. buat method .every() dengan array "warga" yang memiliki return "true"
const everyWargaTrue = warga.some((val) => val.umur > 5);
console.log(someWargaTrue);

//18. buat array "umurWarga" yang hanya menyimppan umur warga saja (tiap element adalah datatype number)
const umurWarga = warga.map((value, index) => {
    return {
        umur: value.umur
    }
});
console.log(umurWarga);

//19. total umur warga dari array 18 dengan metode .reduce()
const reduceUmurWarga = warga.reduce((total, value, index) => {
    return total + parseInt(value.umur)
}, 0);
console.log(reduceUmurWarga);

//20. dari array "warga", buat suatu variabel berisi array method yang mereturn object berisi warga bernama "Dimas"
const indexOfWargaByName = warga.find(val => val.nama === "Dimas");
console.log(indexOfWargaByName);