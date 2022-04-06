const warna = require("./../fajriawan/dummyData").warna;

//basic js map filter data banyak

//1. buat function contoh myFunc(hexcode), yang mereturn string warna dari hexcode tersebut
// jika myFunc("#0048BA") akan memiliki output string "Absolute Zero"
//notes: gunakan dataDummy warna
function myFunc(hexcode){
    let name = "Undifined";
    warna.forEach((v)=>{
        if(v.hex == hexcode){
            name = v.name
        }
    })
    return name;
}
console.log(myFunc("#0048BA"))
//2. buat function contoh myFunc(colorName), yang mereturn array warna-warna yang mengandung kata2 colorName
// jika myFunc("grey") akan memiliki output array ["Battleship Grey", "Cadet Grey", ...]
//notes: gunakan dataDummy warna
function myFunc1(colorname){
  return warna.filter((v)=>
            v.name.toLowerCase().includes(colorname.toLowerCase())
         ).map((v)=> v.name)
}
console.log(myFunc1("grey"))