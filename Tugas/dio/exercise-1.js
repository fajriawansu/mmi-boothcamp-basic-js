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