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

// basic js loop
// 1. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 2 properties, penjumlahan semua bilangan sesama genap dan sesama ganjil
// contoh output: { "sum_all_genap" : 22, "sum_all_ganjil": 23 }
const loopJumlah = (loopNum)=>{
    genap = 0;
    ganjil = 0;
    total = 0;
    for(let i=0; i<loopNum;i++){
        total += i;
        if(i%2==0){
            genap += i;
        }
        else{
            ganjil +=i;
        }
    }
    return{
        total: total,
        sum_all_genap: genap,
        sum_all_ganjil: ganjil
    };
}
console.log(loopJumlah(21));

// 2. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 3 properties,
// tiap-tiap properties merupakan array yang berisi bilangan prima, bilangan genap, bilangan ganjil
// contoh output: { "genap" : [0,2,4,6, ...], "ganjil": [1,3,5,7], "prima": [2,3,5,7, ...] }
const arrayAngka = (loopNum)=>{
    genap = [];
    ganjil = [];
    prima = [];
    for(let i=0; i<loopNum;i++){
        if(i%2==0){
            genap.push(i);
        }
        else{
            ganjil.push(i);
        }
    }
    for (let i=0; i<=loopNum; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            prima.push(i);
        }
    }
    return{
        Bilangan_Genap: genap,
        Bilangan_Ganjil: ganjil,
        Bilangan_Prima: prima
    };
}
console.log(arrayAngka(21));

// 3. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// jika number adalah kelipatan 2, dia akan menjadi element array berupa string "lipat2"
// jika number adalah kelipatan 3, dia akan menjadi element array berupa string "lipat3"
// jika number adalah kelipatan 2 dan 3, dian akan menjadi element array berupa string "lipat2dan3"
// jika bukan merupakan kelipatan 2 ataupun 3, dia akan menjadi element array berupa angka itu sendiri
// output: [0, 1,"lipat2", "lipat3", "lipat2", 5, "lipat2dan3", 7, ... ]
const lipatArray = (loopNum) =>{
    arrayLipat = [];
    arrayLipat[0] = 0;
    for(let i=1; i<loopNum;i++){
        if(i%6==0){
            arrayLipat[i] = "Lipat 2 dan 3";
        }
        else if(i%2==0){
            arrayLipat[i] = "Lipat 2";
        }
        else if(i%3==0){
            arrayLipat[i] = "Lipat 3";
        }
        else{
            arrayLipat[i] = i;
        }
    }
    return arrayLipat;
}
console.log(lipatArray(21));

//4. buat function, berisi loop dari 1 sampai 99
// memiliki output (return) hasil penjumlahan bilangan-bilangan yang habis dibagi 5 atau 7
// notes: angka-angka yang ditotal berarti: 5,7,10,14,15,20,21,25,28,dst
const habisBagi = (loopNum) =>{
    arrayBagi = [];
    for(let i=1;i<loopNum;i++){
        if(i%5==0){
            arrayBagi.push(i);
        }
        else if(i%7==0){
            arrayBagi.push(i);
        }
    }
    return arrayBagi;
}
console.log(habisBagi(100))