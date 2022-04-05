// datatype string

const name = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
function pisah(name){
    const namaPisah = name.split(" ");
    return namaPisah[0];
}

//2. Gunakan string method untuk mereturn panjang string
function panjang(name){
    const panjangNama = name.length;
    return panjangNama;
}

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
function ganti(name){
    const replaceNama = name.replaceAll("a", "i");
    return replaceNama;
}

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"
function tukar(name){
    let namaBalik = "";
    for(let i = name.length-1; i>=0; i--){
        namaBalik += name[i];
    }
    return namaBalik;
}

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
function checktrue(url){
    let checkurl = url.startsWith("/dashboard/main");
    return checkurl;    
}

//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)
function checkfalse(url){
    let checkurl = url.startsWith("/Dashboard/main");
    return checkurl;    
}


// datatype number
const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string
const angkaString = phoneNumber.toString();

//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)
const bulat = num1.toFixed();


// datatype object
const kucingku = {
    "nama": "Oren",
    "kaki": 4,
    "ekor": 1,
    "teman": ["Garong"]
  };

//1. ubah nama jadi "Si Oren"
kucingku.nama = "Si Oren";

//2. buat object baru, berisi data "kucingku" dan 2 properties baru
const kucingBaru = {
    ...kucingku,
    "warna" : "Oranye",
    "bulu" : "lebat",
}

//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)
const biodata = {
    nama_depan : "Fabian",
    nama_belakang : "Santonie",
    phone_number : "088888",
    alamat : {
        "kota" : "bekasi",
        "provinsi" : "jawa barat",
        alamat_lengkap : function () {
            return this.kota+" "+this.provinsi;
        }
    },
    nama_lengkap : function(){
        return this.nama_depan+" "+this.nama_belakang;
    }
}

//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap
const namaDepan = biodata.nama_depan;
const namaBelakang = biodata.nama_belakang;
const alamatLengkap = biodata.alamat.alamat_lengkap();
const alamatKota = biodata.alamat.kota;
const namaLengkap = biodata.nama_lengkap();

// datatype array
const dataDummy = require("./../fajriawan/dummyData");
const selai = ["cokelat", "stroberi", "alpukat"];
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)
const arraySelai = ["Kelapa", "123", "Jeruk"]
const arrayGabungan = arraySelai.concat(selai);

//2. Buat nested array dengan nama "nestedArray"
const nestedArray = [[1,"Jeruk"],[2,"Kelapa"],[3,"Alpukat"]];

//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)
const myDataNum = selai[0];

const arrayNum = [11,12,45,24,32,100]
//4. ubah data index 3 menjadi 44
arrayNum[2] = 44;

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)
const myDataMultiArray = multiArray[3][0][2];

const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya
hewan.pop();
hewan.shift();
hewan.push("kambing");
hewan.push("dinosaurus");
hewan.unshift("babi");

//7. ubah hewan jadi string yang dipisah koma
const komaHewan = hewan.toString();

//8. ubah hewan jadi string yang dipisah pagar (#)
const pagarHewan = hewan.join("#");

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas
const arr123 = arr1 + arr2 + arr3;

//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja
arr4 = arr123.slice(0,3);

// const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending
function myStringSort(a,b){
    let before = a.nama;
    let after = b.nama;
    if(before <= after) {return -1;};
    if(after > before) {return 1;};
}
const listWarga = dataDummy.warga;

//12. urutkan berdasarkan umur, descending
function sortMember(){
    return listWarga.sort(mySort);
}
function mySort(a,b){
    return b.umur - a.umur;
}

//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
// (contoh: {data_lengkap: "Asep umur 18"})
const dataLengkap = listWarga.map((value, index) => {
    return {
        fulldata: value.nama + " umur " + value.umur
    }
})

//14. buat array yang hanya menampilkan 'warga' di bawah umur 30
const filterUmur = listWarga.filter((value, index) => {
    return value.umur < 30;
})

//15. buat function contoh myFunction(num1) yang berisi arguments umur
// jika myFunction(32) akan mereturn array ["Budi"]
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa
function search(umurBanding){
    let searchUmur = listWarga.filter((value, index) => {
        return value.umur === umurBanding;
     })
     return searchUmur;
} 

//Panggil
console.log("---String---");
//Data Type String
//1
console.log(pisah(name));
//2
console.log(panjang(name));
//3
console.log(ganti(name));
//4
console.log(tukar(name));
//5
console.log(checktrue(url1));
console.log(checktrue(url2));
//6
console.log(checkfalse(url1));
console.log(checkfalse(url2));

console.log("---Number---");
//Data Type Number
//1
console.log(angkaString, typeof(angkaString));
//2
console.log(bulat);

console.log("---Object---");
//Data Type Object
//1
console.log(kucingku);
//2
console.log(kucingBaru);
//3
console.log(biodata);
//4
console.log(namaDepan);
console.log(namaBelakang);
console.log(alamatLengkap);
console.log(namaLengkap);
console.log(alamatKota);

//Data Type Array
console.log("---Array---");
//1
console.log(arrayGabungan);
//2
console.log(nestedArray);
//3
console.log(myDataNum);
//4
console.log(arrayNum);
//5
console.log(myDataMultiArray);
//6
console.log(hewan);
//7
console.log(komaHewan);
//8
console.log(pagarHewan);
//9
console.log(arr123);
//10
console.log(arr4);
//11
console.log(listWarga.sort(myStringSort));
//12
console.log(sortMember());
//13
console.log(dataLengkap);
//14
console.log(filterUmur);
//15
console.log(search(23));