const warna = require("./../fajriawan/dummyData").warna;


//basic js map filter data banyak

//1. buat function contoh myFunc(hexcode), yang mereturn string warna dari hexcode tersebut
// jika myFunc("#0048BA") akan memiliki output string "Absolute Zero"
//notes: gunakan dataDummy warna
function myFunc(hexcode){
    const myObj = [...warna]
    let output = [];
    myObj.forEach((v) => {
        let tempHex = v.hex;
        if(tempHex.includes(hexcode)){
            output.push(v);
        }
    })
    return output;
}

console.log(myFunc("#0048BA"));

//2. buat function contoh myFunc(colorName), yang mereturn array warna-warna yang mengandung kata2 colorName
// jika myFunc("grey") akan memiliki output array ["Battleship Grey", "Cadet Grey", ...]
//notes: gunakan dataDummy warna
function myFunc1(colorName){
    const myObj = [...warna]
    let output = [];
    index=0;
    myObj.forEach((v) => {
        let tempWarna = v.name;
        if(tempWarna.toString().toLowerCase().indexOf(colorName.toLowerCase())!=-1){
            output.push(v);
        }
    })
    let namaWarna = []
    for(i=0;i<output.length;i++){
        namaWarna.push(output[i].name);
    }
    return namaWarna;
}

console.log(myFunc1("grey"));