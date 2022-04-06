const warna = require("./../fajriawan/dummyData").warna;

//basic js map filter data banyak

//1. buat function contoh myFunc(hexcode), yang mereturn string warna dari hexcode tersebut
// jika myFunc("#0048BA") akan memiliki output string "Absolute Zero"
//notes: gunakan dataDummy warna

function warnaFunction(hexcode){
    let tempArr = [...warna]
    let nama = tempArr.find((v) => v.hex == hexcode);
    return nama.name;

}

console.log(warnaFunction("#0048BA"))


//2. buat function contoh myFunc(colorName), yang mereturn array warna-warna yang mengandung kata2 colorName
// jika myFunc("grey") akan memiliki output array ["Battleship Grey", "Cadet Grey", ...]
//notes: gunakan dataDummy warna

function cariWarna(colorName){

    let tempArr = [...warna];
    let output = [];
    for (let i = 0; i < tempArr.length; i++) {
        
        if (tempArr[i].name.toLocaleLowerCase().includes(colorName.toLocaleLowerCase())) {
            output.push(tempArr[i].name)
        }
        
    }

return output;

}


console.log(cariWarna("GrEy"));
//console.log(warna[0]);