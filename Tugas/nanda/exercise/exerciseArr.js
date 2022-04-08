// datatype array
const selai = ["cokelat", "stroberi", "alpukat"];
const jumlah_selai = [1,2,3]
//1. Buat array baru "myArray" yang berisi string dan number (termasuk array selai)
var all_arr=selai.concat(jumlah_selai);
console.log(all_arr);
//2. Buat nested array dengan nama "nestedArray"
const nestedArr = [["kucing","anjing"], [3, 2]];
console.log(nestedArr);

const arrayNum = [11,12,45,24,32,100]
//3. buat variabel bernama "myDataNum" yang bernilai sama dengan array selai index 0  (gunakan bracket notation)
const myDataNum = selai[0]
console.log(myDataNum)
//4. ubah data index 3 menjadi 44
selai[2] = "44";
console.log(selai);

const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ]; //ini disebut multi dimensional array
//5. buat variabel bernama "myDataMultiArray" yang bernilai sama dengan 12 (gunakan bracket notation)
let myDataMultiArray = [...multiArray]
console.log(myDataMultiArray);
for(var i = 0; i < myDataMultiArray.length; i++) {
    var cube = myDataMultiArray[i];
    for(var j = 0; j < cube.length; j++) {
        console.log("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
console.log(myDataMultiArray [3][0][2])


const hewan = ["ayam", "bebek", "rusa", "tikus"]; // jadi ["babi", "bebek", "rusa", "kambing", "dinosaurus"]
//6. dengan methode push, pop, shift, unshift ubah array hewan jadi seperti di sebelahnya
hewan[0] = "babi"
hewan[3] = "kambing"
hewan.push("dinosaurus")
console.log(hewan)
//7. ubah hewan jadi string yang dipisah koma
console.log(hewan.toString(","))
//8. ubah hewan jadi string yang dipisah pagar (#)
console.log(hewan.join(" # "));

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
//9. buat variabel "arr123", dengan data berupa gabungan 3 array di atas
const arr123 = arr1.concat(arr2).concat(arr3);
console.log(arr123);
//10. buat variabel "arr4", merupakan copy-an "arr123" tetapi hanya index ke 1 sampai 4 saja
const arr4 = [...arr123]
arr4.pop("Linus")
arr4.pop("Robin")
arr4.pop("Morgan")
console.log(arr4);

// const warga = dataDummy.warga;
//11. urutkan berdasarkan nama, ascending
const dataDummy = require("./../fajriawan/dummyData")
const dummyWarga = dataDummy.warga;
function myStringSort(a,b){
    let before = dummyWarga["nama"];
    let after = dummyWarga["nama"];
    if (before < after){return -1};
    if (after < before){return 1};
}
console.log(dummyWarga.sort(myStringSort));
//12. urutkan berdasarkan umur, descending
function sortMember3(){
    return dummyWarga.sort((a,b) => {
        let before = a.umur;
        let after = b.umur;
        return after - before;
    });
}
console.log(sortMember3());
//13. ubah mapping data, dimana object pada tiap element array hanya memiliki properties "data_lengkap" berisi string gabungan nama dan umur
// (contoh: {data_lengkap: "Asep umur 18"})
const newMapping = dummyWarga.map((value, index) => {
    return {
        fullname: value.nama + " " + value.umur
    }
})
console.log(newMapping);


