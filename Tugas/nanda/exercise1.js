// datatype string
const nameOrang = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
const namaDepan = nameOrang.slice(0,6)
console.log(namaDepan);

//2. Gunakan string method untuk mereturn panjang string
const panjangString = nameOrang.length
console.log(panjangString);


//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
const ubahNamex = nameOrang.replace(/a/g,"i");
const uppFullname = ubahNamex.toUpperCase().slice(0,6) + " " + ubahNamex.toLowerCase().slice(8,16);
console.log(uppFullname);

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"
const ubahName = nameOrang.toLowerCase()
console.log(ubahName.split('').reverse().join(''));

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
const trueStart1 = url1.startsWith("/dashboard");
const trueStart2 = url2.startsWith("/dashboard");
console.log(trueStart1);
console.log(trueStart2);

//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)
const falseStart1 = url1.endsWith("dashboard");
const falseStart2 = url2.endsWith("dashboard");
console.log(falseStart1);
console.log(falseStart2);

// datatype number

const phoneNumber = 628123456789;
const num1 = 12.456352;

//1. Ubah phoneNumber jadi string
const ubahString = phoneNumber.toString();
//2. Ubah num1 jadi bilangan bulat (global methods dan number methods)
const bilanganBulat = num1.toFixed();

// datatype object

const kucingku = {
    "nama": "Oren",
    "kaki": 4,
    "ekor": 1,
    "teman": ["Garong"]
  };

//1. ubah nama jadi "Si Oren"
kucingku.nama  = "Si Oren";
console.log(kucingku.nama);
//2. buat object baru, berisi data "kucingku" dan 2 properties baru
const copyKucingku = {...kucingku,
    punya_anak:"2",
    hobi: "Bermain"}
console.log(copyKucingku);
//3. buat object dengan nama variabel "biodata" (include nested object dengan properties name "alamant", include "this", include method)
const biodata = {
    nama_depan: "Nanda",
    nama_belakang: "Prasetya",
    phone_number: "1123232",
    nama_lengkap : function(){
        return this.nama_depan + this.nama_belakang;
    },
    alamat: {
        kota: "Tanggerang",
        provinsi: "Banten",
        alamat_lengkap:function(){
            return "Jalan Sawah Darat " + this.kota + " " + this.provinsi;
        }
    }
}
console.log(biodata);
//4. buat variabel yang mereturn nama depan, nama belakang, alamat lengkap, alamat (kota saja), nama lengkap
const namaDepan1 = biodata.nama_depan;
const namaBelakang = biodata.nama_belakang;
const alamatLengkap = biodata.alamat.alamat_lengkap();
const kotaTinggal = biodata.alamat.kota;
const namaLengkapOrg =  biodata.nama_lengkap();
console.log(namaDepan1);
console.log(namaBelakang);
console.log(alamatLengkap);
console.log(kotaTinggal);
console.log(namaLengkapOrg);