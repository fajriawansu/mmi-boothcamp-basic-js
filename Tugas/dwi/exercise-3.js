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



// basic js loop
// 1. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 2 properties, penjumlahan semua bilangan sesama genap dan sesama ganjil
// contoh output: { "sum_all_genap" : 22, "sum_all_ganjil": 23 }
const sumGenapGanjil = () =>{
    let sum_all_genap = 0;
    let sum_all_ganjil = 0;
        for (let i = 0; i < 21; i++) {
            if(i%2 == 0){
                sum_all_genap = sum_all_genap + i;
            }else{
                sum_all_ganjil = sum_all_ganjil + i;
            }
    
        }
    let output = {sum_all_genap, sum_all_ganjil}
    return output;
}

console.log(sumGenapGanjil());

// 2. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 3 properties,
// tiap-tiap properties merupakan array yang berisi bilangan prima, bilangan genap, bilangan ganjil
// contoh output: { "genap" : [0,2,4,6, ...], "ganjil": [1,3,5,7], "prima": [2,3,5,7, ...] }

const allBilangan = () =>{
    let genap = [];
    let ganjil = [];
    let prima = [];
    let output = {};
    for (let i = 0; i < 21; i++) {
        if(i%2 == 0){
            genap.push(i);
            output["genap"]= genap;
        }else{
            ganjil.push(i);
            output["ganjil"]= ganjil;
        }

        //Prima
        let num =0;
        let counter=0; 	  
        for(num =i; num>=1; num--){
            if(i%num==0){
                counter = counter + 1;
            }
        }
       if (counter ==2)
       {
          prima.push(i);
          output["prima"] = prima;
       }	
        
    }
    return output;
}

console.log(allBilangan());


// 3. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// jika number adalah kelipatan 2, dia akan menjadi element array berupa string "lipat2"
// jika number adalah kelipatan 3, dia akan menjadi element array berupa string "lipat3"
// jika number adalah kelipatan 2 dan 3, dian akan menjadi element array berupa string "lipat2dan3"
// jika bukan merupakan kelipatan 2 ataupun 3, dia akan menjadi element array berupa angka itu sendiri
// output: [0, 1,"lipat2", "lipat3", "lipat2", 5, "lipat2dan3", 7, ... ]


const lipatLipat = () =>{
    let output = [];
    for (let i = 0; i < 21; i++) {
        if(i == 0){
            output.push(i)
        }else if(i%2 == 0 && i%3 ==0){
            output.push("lipat2dan3");
        }else if(i%2 == 0){
            output.push("lipat2");
        }else if(i%3 == 0){
            output.push("lipat3")
        }else{
            output.push(i);
        }
        
    }
    return output;
}

console.log(lipatLipat());

//4. buat function, berisi loop dari 1 sampai 99
// memiliki output (return) hasil penjumlahan bilangan-bilangan yang habis dibagi 5 atau 7
// notes: angka-angka yang ditotal berarti: 5,7,10,14,15,20,21,25,28,dst

const loopLimaTujuh = () =>{
    let output = 0;
        for (let i = 1; i < 100; i++) {
            
            if(i%5 == 0){
                output = output + i;
            }else if(i%7 == 0){
                output = output + i;
            }
            
        }
    return output;
}

console.log(loopLimaTujuh());