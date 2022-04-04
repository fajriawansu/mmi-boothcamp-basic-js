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