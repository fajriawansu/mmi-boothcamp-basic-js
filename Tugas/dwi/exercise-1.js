// datatype string

const nama = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja

const namaDepan = nama.substring(0,6);

console.log("1. " + namaDepan);
//2. Gunakan string method untuk mereturn panjang string

const lengthName = nama.length;

console.log("2. " + lengthName);

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"

const replaceAtoI = nama.replace("Isyana Sarasvati", "Isyini Sirisviti");

const lengkap = replaceAtoI.substring(0,6).toUpperCase() + " " + replaceAtoI.substring(7,replaceAtoI.length).toLowerCase();

console.log("3. " + lengkap);
//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"

const reversLowNama = nama.split("").reverse().join("").toLocaleLowerCase();

console.log("4. " + reversLowNama);

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)

const cobaTrue = url1.startsWith("/dashboard/main");


//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)

const cobaFalse = url1.includes(url2);




// datatype number

const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string

const phoneString = phoneNumber.toString();
console.log("1. " + phoneString);

//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)

const bilBulat = num1.toFixed();
console.log("2. " + bilBulat);


// datatype object

const kucingku = {
    "nama": "Oren",
    "kaki": 4,
    "ekor": 1,
    "teman": ["Garong"]
  }

//1. ubah nama jadi "Si Oren"

kucingku.nama = "Si Oren";

console.log(kucingku);

//2. buat object baru, berisi data "kucingku" dan 2 properties baru
const newKucing = {
    ... kucingku,
    keturunan : "Persia",
    telinga : 2
}

console.log(newKucing);

//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)

const biodata = {
    nama_depan: "Jusuf",
    nama_belakang: "Hamka",
    full_name: function(){
        return this.nama_depan + this.nama_belakang
    },
    phone_number: "1213131",
    alamat: {
        "kota": "Jakarta Pusat",
        "provinsi": "DKI Jakarta",
        alamat_lengkap: function(){
            return this.kota + " " + this.provinsi
        }
    }
}




//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap


const namaDepanReturn = biodata.nama_depan;

const namaBelakangReturn = biodata.nama_belakang;

const alamatLengkapReturn = biodata.alamat.alamat_lengkap();

const kotaReturn = biodata.alamat.kota;

console.log(alamatLengkapReturn);



// datatype array
const selai = ["cokelat", "stroberi", "alpukat"];
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)

const myArray = [...selai, 1,2,3, "coba"];

console.log(myArray);

//2. Buat nested array dengan nama "nestedArray"

const nestedArray = [ 1, 2, 3, [4,5,6]];

const arrayNum = [11,12,45,24,32,100]
//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)

const myDataNum = selai[0];


//4. ubah data index 3 menjadi 44

arrayNum[3] = 44;



const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)


const myDataMultiArray = multiArray[3][0][2];
console.log(myDataMultiArray);

const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya

hewan.shift();
hewan.unshift("babi");

hewan.pop();
hewan.push("kambing");
hewan.push("dinosaurus");

console.log(hewan);


//7. ubah hewan jadi string yang dipisah koma

const hewanString = hewan.join(",");
console.log(hewanString)
//8. ubah hewan jadi string yang dipisah pagar (#)

const hewanPagar = hewan.join("#");
console.log(hewanPagar);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas

const arr123 = arr1.concat(arr2, arr3);

console.log(arr123);


//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja

const arr4 = arr123.splice(0, 4)

console.log(arr4)


const dataDummy = require("./../fajriawan/dummyData");
// const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending

function myWargaSortAsc(a,b){
    let before = a.nama;
    let after = b.nama;
    if (before < after){return -1};
    if (after < before){return 1};
}

console.log(dataDummy.warga.sort(myWargaSortAsc));



//12. urutkan berdasarkan umur, descending
function myWargaSortDesc(a,b){
    let before = a.umur;
    let after = b.umur;
    if (before > after){return -1};
    if (after > before){return 1};
}

console.log(dataDummy.warga.sort(myWargaSortDesc));
//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
// (contoh: {data_lengkap: "Asep umur 18"})


const newMapping = dataDummy.warga.map((value, index) => {
    return {
        data_lengkap: value.nama + " umur " + value.umur
    }
})

console.log(newMapping);



//selasa nih

//14. buat array yang hanya menampilkan 'warga' di bawah umur 30


const newFilter = dataDummy.warga.filter((value, index) => {
    return value.umur < 30
})

console.log(newFilter);

//15. buat function contoh myFunction(num1) yang berisi arguments umur

function myFunction(umur){
    const filterByAge = dataDummy.warga.filter((value,index) => {
       
       return value.umur == umur 
    })
    return filterByAge;
}

const tes = myFunction(23);

console.log(tes);

// jika myFunction(32) akan mereturn array ["Budi"]
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa


