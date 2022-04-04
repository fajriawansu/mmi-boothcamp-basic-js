// datatype string

const name = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
const namaPisah = name.split(" ");
console.log(namaPisah[0]);

//2. Gunakan string method untuk mereturn panjang string
const panjangNama = name.length;
console.log(panjangNama);

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
const replaceNama = name.replaceAll("a", "i");
console.log(replaceNama);

//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"
let namaBalik = "";
for(let i = name.length-1; i>=0; i--){
    namaBalik += name[i];
}
console.log(namaBalik);

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)