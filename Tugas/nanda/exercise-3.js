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

// basic js loop
// 1. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 2 properties, penjumlahan semua bilangan sesama genap dan sesama ganjil
// contoh output: { "sum_all_genap" : 22, "sum_all_ganjil": 23 }
function loop(){
    let hasilGenap = 0;
    let hasilGanjil = 0;
    let genap = [];
    let ganjil = []
    for (let i = 0; i < 21; i++){
        if(i%2==0){
            genap.push([i])
        }else if(i%2==1){
            ganjil.push([i])
        }
    }
    for(i=0;i<genap.length;i++){
        hasilGenap=genap[i]+genap[i-1];
    }
    for(i=0;i<ganjil.length;i++){
        hasilGanjil=ganjil[i]+ganjil[i-1];
    }
    let output = {
        "sum_all_genap":hasilGenap,
        "sum_all_ganjil":hasilGanjil

    };
    console.log(output);
    
}
// loop();

// 2. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 3 properties,
// tiap-tiap properties merupakan array yang berisi bilangan prima, bilangan genap, bilangan ganjil
// contoh output: { "genap" : [0,2,4,6, ...], "ganjil": [1,3,5,7], "prima": [2,3,5,7, ...] }
function tentukanAngka (){
    let genap = [];
    let ganjil = [];
    let prima = [];
    let pembagi = 0;
    for (let i = 0; i < 21; i++){
        if(21%i==0){
            pembagi++
        }  
        if(pembagi==2){
            prima.push([pembagi]);
        } 
        if(i%2==0){
            genap.push([i])
        }else if(i%2==1){
            ganjil.push([i])
        }
    }
    let output = {
        "genap":[genap.join(",")],
        "ganjil":[ganjil.join(",")],
        "prima":[prima.join(",")]

    };
    console.log(output);
}
// tentukanAngka()

// 3. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// jika number adalah kelipatan 2, dia akan menjadi element array berupa string "lipat2"
// jika number adalah kelipatan 3, dia akan menjadi element array berupa string "lipat3"
// jika number adalah kelipatan 2 dan 3, dian akan menjadi element array berupa string "lipat2dan3"
// jika bukan merupakan kelipatan 2 ataupun 3, dia akan menjadi element array berupa angka itu sendiri
// output: [0, 1,"lipat2", "lipat3", "lipat2", 5, "lipat2dan3", 7, ... ]
function stringAngka(){
    let tempAngka = []
    for (let i = 0; i < 21; i++){
        tempAngka.push([i]);
    }
    for(x=0;x<tempAngka.length;x++){
        if(tempAngka[x]==0){
            tempAngka[x]
        }
        else if(tempAngka[x]%2==0){
            tempAngka[x]="lipat2"
        }else if(tempAngka[x]%3==0){
            tempAngka[x]="lipat3"
        }else if(tempAngka[x]%2==0 && tempAngka[x]%3==0){
            tempAngka[x]="lipat2dan3"
        }else{
            tempAngka[x];
        }
    }
    console.log([tempAngka.join(",")])
}
// stringAngka();

//4. buat function, berisi loop dari 1 sampai 99
// memiliki output (return) hasil penjumlahan bilangan-bilangan yang habis dibagi 5 atau 7
// notes: angka-angka yang ditotal berarti: 5,7,10,14,15,20,21,25,28,dst
function loopAngka(){
    let semuaAngka = [];
    let ArrFilter = [];
    let output = [];
    for(i=0;i<100;i++){
        semuaAngka.push([i])
    }
    for(x=0;x<semuaAngka.length;x++){
        if(semuaAngka[x]%5==0){
            ArrFilter.push(semuaAngka[x])
        }else if(semuaAngka[x]%7==0){
            ArrFilter.push(semuaAngka[x])
        }
    }
    for(x=1;x<semuaAngka.length;x++){
        output.push(ArrFilter[x]);
    }
    console.log(output.join(","));  
}
loopAngka();
