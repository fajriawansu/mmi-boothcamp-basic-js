// datatype string

const name = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
console.log(name.slice(0,7));

//2. Gunakan string method untuk mereturn panjang string
console.log(name.length);

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
let splitNama = name.replaceAll("a", "i").split(" ");
console.log(splitNama[0].toUpperCase()+" "+splitNama[1].toLowerCase());

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"
console.log(name.split("").reverse().join("").toLowerCase());

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
console.log(url1.endsWith("n"));
console.log(url2.endsWith("g"));
//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)
console.log(url1.startsWith("d"));
console.log(url2.startsWith("d"));

// datatype number

const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string
console.log(phoneNumber.toString());
//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)
console.log(num1.toFixed());
console.log(parseInt(num1));

// datatype object

const kucingku = {
    "nama": "Oren",
    "kaki": 4,
    "ekor": 1,
    "teman": ["Garong"]
  };

//1. ubah nama jadi "Si Oren"
console.log(kucingku.nama);
kucingku.nama = "Si Oren";
console.log(kucingku.nama);
//2. buat object baru, berisi data "kucingku" dan 2 properties baru
const copyKucingku = {
    ...kucingku,
    warna: "Oren Putih",
    panjang: 30
}
console.log(copyKucingku.warna+" "+copyKucingku.panjang);
//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)
const biodata = {
    nama_depan:"Dio",
    nama_belakang: "Harvandy",
    alamat:{
        kota: "Padang",
        provinsi: "Sumatra Barat",
        kodepos: 25666,
        alamat_lengkap: function(){
            return this.kota+" "+this.provinsi+" "+this.kodepos
        }
    },
    nama_lengkap: function(){
        return this.nama_depan+" "+this.nama_belakang
    }
}
//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap
const stringBiodata = biodata.nama_depan+", "+biodata.nama_belakang+", "+biodata.alamat.alamat_lengkap()+", "+biodata.alamat.kota+", "+biodata.nama_lengkap();
console.log(stringBiodata);

// datatype array
const dataDummy = require("./../fajriawan/dummyData")
const selai = ["cokelat", "stroberi", "alpukat"];
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)
const myArray = [
    ...selai,
    1,2,3,"a","b","c","d"
]
console.log(myArray)
//2. Buat nested array dengan nama "nestedArray"
const nestedArray = [
    "karnivora", "herbivora","omnivora", ["amfibi", "mamalia", "burung"]
]
console.log(nestedArray)

const arrayNum = [11,12,45,24,32,100]
console.log(arrayNum)
//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)
let myDataNum = [];
arrayNum.shift();
for(let a = 0; a<arrayNum.length; a++){
    myDataNum.push(arrayNum[a])
}
console.log(myDataNum)
//4. ubah data index 3 menjadi 44
arrayNum[3] = 44;
console.log(arrayNum)

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)
const myDataMultiArray = multiArray[3][0][2];
console.log(myDataMultiArray)

const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya
hewan.shift()
hewan.unshift("babi")
hewan.pop()
hewan.push("kambing")
hewan.push("dinosaurus")
console.log(hewan)
//7. ubah hewan jadi string yang dipisah koma
console.log(hewan.toString())
//8. ubah hewan jadi string yang dipisah pagar (#)
console.log(hewan.join("#"))

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas
const arr123 = [
    ...arr1,
    ...arr2,
    ...arr3
]
console.log(arr123)
//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja
const arr4 = [
    ...arr123.slice(1, 5)
]
console.log(arr4)
const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending
warga.sort(function a(a,b){ 
    let x = a.nama.toLocaleLowerCase();
    let y = b.nama.toLocaleLowerCase();
    if(x<y){return -1 };
    if(x>y){return 1 };
    return 0;
})
console.log(warga)
//12. urutkan berdasarkan umur, descending
console.log(warga.sort(function(a,b){return b.umur - a.umur}))
//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
console.log(warga.map((value)=> { return {data_lengkap: value.nama+" Umur "+value.umur}}))
// (contoh: {data_lengkap: "Asep umur 18"})
//14. buat array yang hanya menampilkan 'warga' di bawah umur 30
console.log(warga.filter((value)=> value.umur<30))
//15. buat function contoh myFunction(num1) yang berisi arguments umur
function myFunction(num){
    return warga.filter((value)=> value.umur==num).map((value)=> value.nama)
}
// jika myFunction(32) akan mereturn array ["Budi"]
console.log(myFunction(32))
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa"]
console.log(myFunction(23))