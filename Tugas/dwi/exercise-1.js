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

const kucingkuBaru = {
    ... kucingku,
    "nama" : "Si Oren"
}


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