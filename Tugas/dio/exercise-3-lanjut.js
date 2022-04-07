// tambahan jam 12 siang

//basic js
//1. buat function, yang mengecek tipe data arguments-arguments didalamnya
// jika semua arguments adalah number, return string "All Arguments is Number"
// jika semua arguments adalah string, return string "All Arguments is String"
// jika semua arguments adalah object, return string "All Arguments is Object"
// jika semua arguments adalah array, return string "All Arguments is Array"
// lanjut ---
// jika arguments lebih dari 1 tipe return object, banyaknya properties sesuai banyaknya tipe, valuenya adalah jumlah masing2 tipe
// contoh: {"strType": 1, "numType": 2} atau {"strType": 1, "arrType": 4}
function typeCheck(){
    let obj = {}
    for(x in arguments){
        Array.isArray(arguments[x]) == true ? obj.hasOwnProperty("array") ? obj["array"]++ : obj["array"] = 1 : obj.hasOwnProperty(typeof(arguments[x])) ? obj[typeof(arguments[x])]++ : obj[typeof(arguments[x])] = 1
    }
    obj = Object.keys(obj).length == 1 ?   "All Arguments is "+Object.keys(obj) :  obj
    return obj
}
console.log(typeCheck("a","b","c",1,{"a":3}, [1,2], [2,3], {"a":3}))
//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna
const warna = require("./../fajriawan/dummyData").warna;
const myFunc = (hex)=>{
  const obj =  hex.length>=4 ? warna.filter((v)=> v.hex.toLowerCase().includes(hex.toLowerCase())).map((v)=> v.hex) :  "Minimal 4 Character"
  return obj
}
console.log(myFunc("#FF8"))
//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep
const resep = require("./../fajriawan/dummyData").resep;
const myFunc1 = (foodName)=>{
    return resep.filter((v)=> v.name == foodName).map((v)=> {return {"steps":v.steps,"ingredients": v.ingredients.map((v)=> v.name)}} )
}
console.log(myFunc1("Crock Pot Roast"))
//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna
const myFunc2 = ()=>{
    const hex = warna.map((v)=> v.hex)
    const random = Math.floor(Math.random() * hex.length)
    return hex[random]
}
console.log(myFunc2())
//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const myFunc3 = (minutes)=>{
    const obj = []
    for (x in resep){
        resep[x].timers.reduce((sum, v)=> sum+v) <= minutes ? obj.push(resep[x].name) : false
    }
    return obj
}
console.log(myFunc3(60))
//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const myFunc4 = (minutes, totalIngredients)=>{
    return resep.filter((v)=> v.timers.reduce((sum, v)=> sum+v) <= minutes && v.ingredients.length <= totalIngredients).map((v)=> v.name)
}
console.log(myFunc4(60, 5))
//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const myFunc5 = (theIngredients)=>{
    return resep.filter((v)=> v.ingredients.filter((v)=> v.name.toLowerCase().includes(theIngredients.toLowerCase())).length > 0).map((v)=> v.name)
}
console.log(myFunc5("Sugar"))

//9. buat function contoh myFunc(), yang mereturn array mahasiswa yang 
const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;
const matkul = require("./../fajriawan/dummyData").matkul;
const dosen = require("./../fajriawan/dummyData").dosen;
// menambah 2 properties baru yaitu "data_matkul" dan "data_dosbing"
// tiap-tiap elementnya berisi object berdasarkan properties matkul_id dan dosbing_id
const myFunc6 = ()=>{
    mahasiswa.forEach((v,index)=>{
       const data_matkul = []
       const data_dosbing = []
       for(x in v.matkul_id){
        data_matkul.push(matkul.find((val)=> val.id == v.matkul_id[x]))
       }
       for(x in v.dosbing_id){
        data_dosbing.push(dosen.find((val)=> val.id == v.dosbing_id[x]))
       }
       mahasiswa[index]["data_matkul"] = data_matkul
       mahasiswa[index]["data_dosbing"] = data_dosbing
    })
    return mahasiswa
}
myFunc6().forEach((v)=>{
    console.log(v)
})
//10. buat function contoh myFunc(namaDosen), yang mereturn array mahasiswa yang dibimbing oleh dosen tersebut
// jika myFunc("Pak Diki"), output ["Asep", "Udin"]
// notes: gunakan dataDummy bulk mahasiswa
const myFunc7 = (namaDosen)=>{
    const datadosen = dosen.find((v)=> v.name.toLowerCase() == namaDosen.toLowerCase())
    return datadosen ? mahasiswa.filter((v)=> v.dosbing_id.filter((val)=> val == datadosen.id).length>0).map((v)=> v.name) : "Data Kosong"
}
console.log(myFunc7("Bu Isyana"))
//11. buat function contoh myFunc(namaMahasiswa), yang mereturn number jumlah sks yang diambil
// jika myFunc("Dimas"), output 10
// notes: gunakan dataDummy bulk mahasiswa
const myFunc8 = (namaMahasiswa)=>{
    const dataMahasiswa = mahasiswa.find((v)=> v.name.toLowerCase()==namaMahasiswa.toLowerCase())
    return dataMahasiswa ? matkul.filter((v)=> dataMahasiswa.matkul_id.filter((val)=> val==v.id).length>0).reduce((sum, v)=> sum+v.sks,0) : "Data Kosong"
}
console.log(myFunc8("Angga"))