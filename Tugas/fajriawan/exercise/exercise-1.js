// datatype string

const name = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja

//2. Gunakan string method untuk mereturn panjang string

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)

// datatype number

const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string
//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)

// datatype object

const kucingku = {
    "nama": "Oren",
    "kaki": 4,
    "ekor": 1,
    "teman": ["Garong"]
  };

//1. ubah nama jadi "Si Oren"
//2. buat object baru, berisi data "kucingku" dan 2 properties baru
//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)
//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap

// datatype array
const selai = ["cokelat", "stroberi", "alpukat"];
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)
//2. Buat nested array dengan nama "nestedArray"

const arrayNum = [11,12,45,24,32,100]
//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)
//4. ubah data index 3 menjadi 44

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)

const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya
//7. ubah hewan jadi string yang dipisah koma
//8. ubah hewan jadi string yang dipisah pagar (#)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas
//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja

// const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending
//12. urutkan berdasarkan umur, descending
//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
// (contoh: {data_lengkap: "Asep umur 18"})

//selasa nih

//14. buat array yang hanya menampilkan 'warga' di bawah umur 30
//15. buat function contoh myFunction(num1) yang berisi arguments umur
// jika myFunction(32) akan mereturn array ["Budi"]
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa

// selasa jam set 11 nih
//15. buat method .some() dengan array "warga" yang memiliki return "true"
//16. buat method .some() dengan array "warga" yang memiliki return "false"
//17. buat method .every() dengan array "warga" yang memiliki return "true"
//18. buat array "umurWarga" yang hanya menyimppan umur warga saja (tiap element adalah datatype number)
//19. total umur warga dari array 18 dengan metode .reduce()
//20. dari array "warga", buat suatu variabel berisi array method yang mereturn object berisi warga bernama "Dimas"