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

//Panggil
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