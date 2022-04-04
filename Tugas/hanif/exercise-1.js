// datatype string

const fullname = "Isyana Sarasvati";

// 1. Gunakan string method untuk mereturn nama depan saja
// const returnFirstname = {
//     firstName: function () {
//         fullname.charAt(0);
//         return firstName;
//     }
// }

const returnFirstname = fullname.slice(0, 6);
console.log(returnFirstname);

//2. Gunakan string method untuk mereturn panjang string
const fullnameLength = fullname.length;
console.log(fullnameLength)

//3. Gunakan string method untuk mengubah menjadi  => "ISYINI sirisviti"
const replaceFullname = fullname.replace("a", "i") {
    repFullname: function () {
        fullname.replace("a", "i");
        return this.repFullname;
    }
}
//4. Gunakan string method untuk mengubahnya menjadi => "itavsaras anaysi"

const url1 = "/dashboard/main";
const url2 = "/dashboard/main/log";

//5. Gunakan string method yang mereturn nilai "true" apabila diterapkan untuk url1 dan url2 (pakai function 1 parameter)
//6. Gunakan string method yang mereturn nilai "false" apabila diterapkan untuk url1 dan url2  (pakai function 1 parameter)

console.log();