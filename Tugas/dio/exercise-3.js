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

// basic js loop
// 1. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 2 properties, penjumlahan semua bilangan sesama genap dan sesama ganjil
// contoh output: { "sum_all_genap" : 22, "sum_all_ganjil": 23 }
const genapGanjilFunc = ()=>{
    const output = {"sum_all_genap" : 0, "sum_all_ganjil" : 0}
    for(let i=0; i<=20; i++){
        i%2==0 ? output["sum_all_genap"]++ : output["sum_all_ganjil"]++
    }
    return output
}
console.log(genapGanjilFunc())
// 2. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// memiliki output berupa object dengan 3 properties,
// tiap-tiap properties merupakan array yang berisi bilangan prima, bilangan genap, bilangan ganjil
// contoh output: { "genap" : [0,2,4,6, ...], "ganjil": [1,3,5,7], "prima": [2,3,5,7, ...] }
const bilPriGeGaFunc = ()=>{
    output = {"genap": [], "ganjil": [], "prima": []}
    for(let i = 0; i<=20; i++){
        prim = 0
        for(let j = 1; j<=i; j++){
            i%j==0 ? prim++ : false
        }
        i%2==0 ? output["genap"].push(i) : ((i%2!=0) ? output["ganjil"].push(i) : false)
        prim == 2 ? output["prima"].push(i) : false
    }
    return output
}
console.log(bilPriGeGaFunc())
// 3. buat function, berisi loop sebanyak 21 kali (dari 0 sampai 20)
// jika number adalah kelipatan 2, dia akan menjadi element array berupa string "lipat2"
// jika number adalah kelipatan 3, dia akan menjadi element array berupa string "lipat3"
// jika number adalah kelipatan 2 dan 3, dian akan menjadi element array berupa string "lipat2dan3"
// jika bukan merupakan kelipatan 2 ataupun 3, dia akan menjadi element array berupa angka itu sendiri
// output: [0, 1,"lipat2", "lipat3", "lipat2", 5, "lipat2dan3", 7, ... ]
const kelipatanFunc = ()=>{
    let output = []
    for(let i = 0; i<=20; i++){
        i==0 ? output.push(i) : (i%2==0 && i%3==0 ? output.push("lipat2dan3") :
        (i%2==0 ? output.push("lipat2") : (i%3==0 ? output.push("lipat3") : output.push(i))))
    }
    return output
}
console.log(kelipatanFunc())
//4. buat function, berisi loop dari 1 sampai 99
// memiliki output (return) hasil penjumlahan bilangan-bilangan yang habis dibagi 5 atau 7
// notes: angka-angka yang ditotal berarti: 5,7,10,14,15,20,21,25,28,dst
const sumFunc = ()=>{
    let total = 0
    for(let i = 1; i<=99; i++){
        i%5==0 || i%7==0 ? total += i : false
    }
    return total
}
console.log(sumFunc())
