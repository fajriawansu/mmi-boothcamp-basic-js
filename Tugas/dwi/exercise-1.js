// datatype string

const nama = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja

const namaDepan = nama.substring(0,6);

console.log("1. " + namaDepan);
//2. Gunakan string method untuk mereturn panjang string

const lengthName = nama.length;

console.log("2. " + lengthName);

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"

const replaceAtoI = nama.replace("a", "i");

const lengkap = replaceAtoI.substring(0,6).toUpperCase() + " " + replaceAtoI.substring(7,replaceAtoI.length).toLowerCase();

console.log("3. " + lengkap);
//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"

const reversLowNama = nama.split("").reverse().join("").toLocaleLowerCase();

console.log(reversLowNama);

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)




//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)

const cobaFalse = url1.includes(url2);

console.log(cobaFlase);