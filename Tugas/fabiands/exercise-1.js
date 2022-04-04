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

//Panggil
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

//Data Type Number
//1
console.log(angkaString, typeof(angkaString));
//2
console.log(bulat);

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