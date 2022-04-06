const warna = require("./../fajriawan/dummyData").warna;

//basic js map filter data banyak

//1. buat function contoh myFunc(hexcode), yang mereturn string warna dari hexcode tersebut
// jika myFunc("#0048BA") akan memiliki output string "Absolute Zero"
//notes: gunakan dataDummy warna
function colorHex(hexcode){
    let hex = warna.filter((value,index)=>{
        return value.hex === hexcode;
    });
    const nameHex = hex.map((value, index) => {
        return value.name;
    });
    return nameHex;
}
console.log(colorHex("#0048BA"));

//2. buat function contoh myFunc(colorName), yang mereturn array warna-warna yang mengandung kata2 colorName
// jika myFunc("grey") akan memiliki output array ["Battleship Grey", "Cadet Grey", ...]
//notes: gunakan dataDummy warna
function filterColor(colorName){
    nameFilter = [];
    const filter = warna.filter((value,index)=>{
        if(value.name.toLocaleLowerCase().includes(colorName.toLocaleLowerCase())==true){
            nameFilter.push(value.name);
        }
    });
    return nameFilter;
}
console.log(filterColor("GREY"));