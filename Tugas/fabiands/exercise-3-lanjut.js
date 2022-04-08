const { matkul } = require("../fajriawan/data-bank/dataMahasiswa");

const warna = require("./../fajriawan/dummyData").warna;
const resep = require("./../fajriawan/dummyData").resep;

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
    let obj = {};
    for (x in arguments){
        Array.isArray(arguments[x]) == true ? obj.hasOwnProperty("array") ? obj["array"]++ : obj["array"] = 1 : obj.hasOwnProperty(typeof(arguments[x])) ? obj[typeof(arguments[x])]++ : obj[typeof(arguments[x])] = 1
    }
    obj = Object.keys(obj).length == 1? "All Argument is "+ Object.keys(obj) : obj
    return obj;
}
console.log(typeCheck("a","b","c",1,{"a":3}, [1,2], [2,3], {"a":3}))
//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna
function colorHex(namecode){
    if(namecode.length < 4){
        nameHex = "Error"
    }
    else{
        nameHex = [];
        const nameHexTemp = warna.filter((value,index)=>{
            if(value.hex.includes(namecode)==true){
                nameHex.push(value.name);
            }
        });
    }
    return nameHex;
}
console.log(colorHex("#FF8"));

//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep
const resepTips = (foodName) =>{
    const tipsMasak = resep.filter((value,index)=>{
        return value.name.toLocaleLowerCase()===foodName.toLocaleLowerCase()
    });
    steps = [];
    ingredients = [];
    const tipsMasakSI = tipsMasak.map((value, index)=>{
        steps.push(value.steps);
        for(let i = 0; i<value.ingredients.length; i++){
            ingredients.push(value.ingredients[i].name);
        }
    });
    return {
        steps: steps,
        ingredients: ingredients
    }
}
console.log(resepTips("Crock Pot Roast"));

//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna
const colorRandom = () =>{
    const randomHex = warna[Math.floor(Math.random()*warna.length)];
    return randomHex.hex;
}
console.log(colorRandom());

//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const cookDuration = (minutes) =>{
    output = [];
    [...resep].forEach((v)=>{
        if(v.timers.reduce((total, value)=> total+value)<=minutes){
            output.push(v.name);
        }
    })
    return(output);
}
console.log(cookDuration(60));

//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const durationIngredients = (minutes, numIng) =>{
    output = [];
    [...resep].forEach((v)=>{
        if(v.timers.reduce((total, value)=> total+value)<=minutes){
            output.push(v);
        }
    });
    let ingredientsNumber = output.filter((value, index)=>{
        return value.ingredients.length === numIng;
    });
    const ingredientsName = ingredientsNumber.map((value,index)=>{
        return value.name;
    })
    return(ingredientsName);
}
console.log(durationIngredients(60, 3));

//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const cookIngredients = (foodIngredients) =>{
    let output = [];
    [...resep].forEach((v)=> {
        if(v.ingredients.some(value => value.name == foodIngredients)){
            output.push(v.name);
        }
    })
    return output;
}
console.log(cookIngredients("sugar"));

// data relation
//9. buat function contoh myFunc(), yang mereturn array mahasiswa yang 
// menambah 2 properties baru yaitu "data_matkul" dan "data_dosbing"
// tiap-tiap elementnya berisi object berdasarkan properties matkul_id dan dosbing_id
const mataKulliah = require("./../fajriawan/dummyData").matkul;
const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;
const dosen = require("./../fajriawan/dummyData").dosen;

const dataLengkap = () =>{
    arrayMatkul = [...mataKulliah];
    arrayMahasiswa = [...mahasiswa];
    arrayDosen = [...dosen];
    let outputMahasiswa = [];
    let outputMatkul = [];
    let outputDosen = [];

    for(let i = 0; i < arrayMahasiswa.length; i++){
        for(let j = 0; j < arrayMahasiswa[i].matkul_id.length; j++){
            for(let k = 0; k < mataKulliah.length; k++){
                if(arrayMahasiswa[i].matkul_id[j] == arrayMatkul[k].id){
                    outputMatkul.push(arrayMatkul[k]);
                }
            }
            for(let k = 0; k < arrayDosen.length; k++){
                if(arrayMahasiswa[i].dosbing_id[j] == arrayDosen[k].id){
                    outputDosen.push(arrayDosen[j]);
                }
            }
            if(j == arrayMahasiswa[i].matkul_id.length-1){
                outputMahasiswa[i] = arrayMahasiswa[i];
                outputMahasiswa[i].data_matkul = outputMatkul;
                outputMatkul = [];
                outputMahasiswa[i].data_dosen = outputDosen;
                outputDosen = [];
            }
        }
    }
    return outputMahasiswa;
}
console.log(dataLengkap());

//10. buat function contoh myFunc(namaDosen), yang mereturn array mahasiswa yang dibimbing oleh dosen tersebut
// jika myFunc("Pak Diki"), output ["Asep", "Udin"]
// notes: gunakan dataDummy bulk mahasiswa
const mahasiswaDosen = (namaDosen) =>{
    arrayDosen = [...dosen];
    arrayMahasiswa = [...mahasiswa];
    let outputNama = [];
    for(let i = 0; i < arrayMahasiswa.length; i++){
        for(let j = 0; j < arrayMahasiswa[i].dosbing_id.length; j++){
            for(let k = 0; k < arrayDosen.length; k++){
                if(arrayDosen[k].name == namaDosen){
                    if(arrayMahasiswa[i].dosbing_id == arrayDosen[k].id){
                        outputNama.push(arrayMahasiswa[i].name);
                    }
                }
            }
        }
    }
    return outputNama;
}
console.log(mahasiswaDosen("Bu Isyana"));

//11. buat function contoh myFunc(namaMahasiswa), yang mereturn number jumlah sks yang diambil
// jika myFunc("Dimas"), output 10
// notes: gunakan dataDummy bulk mahasiswa
const sksMahasiswa = (namaMahasiswa) =>{
    arrayMahasiswa = [...mahasiswa];
    arrayMatkul = [...matkul];
    let output = 0;

    for(let i = 0; i < arrayMahasiswa.length; i++){
        for(let j = 0; j < arrayMahasiswa[i].matkul_id.length; j++){
            for(let k = 0; k < arrayMatkul.length; k++){
                if(arrayMahasiswa[i].name === namaMahasiswa){
                    if(arrayMatkul[k].id == mahasiswa[i].matkul_id[j]){
                        output += arrayMatkul[k].sks;
                    }
                }
            }
        }
    }
    return output;
}
console.log(sksMahasiswa("Dini"))