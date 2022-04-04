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