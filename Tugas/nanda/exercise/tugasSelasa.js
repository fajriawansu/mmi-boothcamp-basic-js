//selasa nih

//14. buat array yang hanya menampilkan 'warga' di bawah umur 30
const dataDummy = require("./../fajriawan/dummyData")
const dummyWarga = dataDummy.warga;

const newFilter = dummyWarga.filter((value, index) => {
    return value.umur < 30
})

console.log(newFilter);

//15. buat function contoh myFunction(num1) yang berisi arguments umur

const myFunction = dummyWarga.filter((value, index,num1) => {
    num1 = 20
    return value.umur > num1
})
console.log(myFunction);
// jika myFunction(32) akan mereturn array ["Budi"]
const myFunction2 = dummyWarga.filter((value, index,num1) => {
    num1 = 32
    return value.umur == num1
})
console.log(myFunction2);
// jika myFunction(23) akan mereturn array ["Dindin", "Raisa
const myFunction3 = dummyWarga.filter((value, index,num1) => {
    num1 = 23
    return value.umur == num1
})
console.log(myFunction3);

// selasa jam set 11 nih
//15. buat method .some() dengan array "warga" yang memiliki return "true"
const everyWarga = dummyWarga.some((val) => val.umur > 23 )
console.log(everyWarga);

//16. buat method .some() dengan array "warga" yang memiliki return "false"
const everyWarga2 = dummyWarga.some((val) => val.umur < 0 )
console.log(everyWarga2);
//17. buat method .every() dengan array "warga" yang memiliki return "true"
const everyWarga3 = dummyWarga.every((val) => val.umur > 8 )
console.log(everyWarga3);
//18. buat array "umurWarga" yang hanya menyimppan umur warga saja (tiap element adalah datatype number
let umurWarga = [];
for(i=0;i<dummyWarga.length;i++){
    umurWarga.push(dummyWarga[i].umur);
}
console.log(umurWarga);
//19. total umur warga dari array 18 dengan metode .reduce()
let umurWarga2 = [];
    for(i=3;i<dummyWarga.length;i++){
        umurWarga2.push(dummyWarga[i].umur);
    }
console.log("test",umurWarga2);
const reduceUmurWarga = umurWarga2.reduce((total, value, index) => {
    
    return total + parseInt(umurWarga2)
}, 0)

 console.log(reduceUmurWarga)
//20. dari array "warga", buat suatu variabel berisi array method yang mereturn object berisi warga bernama "Dimas"
const indexOfWargaByName = dummyWarga.find(val => val.nama === "Dimas")
console.log(indexOfWargaByName)