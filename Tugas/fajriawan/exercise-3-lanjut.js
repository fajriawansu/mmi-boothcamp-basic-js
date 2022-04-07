// tambahan jam 12 siang

const warna = require("./dummyData").warna;
const resep = require("./dummyData").resep;
const mahasiswa = require("./dummyData").mahasiswa;
const matkul = require("./dummyData").matkul;
const dosen = require("./dummyData").dosen;

//basic js
//1. buat function, yang mengecek tipe data arguments-arguments didalamnya
// jika semua arguments adalah number, return string "All Arguments is Number"
// jika semua arguments adalah string, return string "All Arguments is String"
// jika semua arguments adalah object, return string "All Arguments is Object"
// jika semua arguments adalah array, return string "All Arguments is Array"
// lanjut ---
// jika arguments lebih dari 1 tipe return object, banyaknya properties sesuai banyaknya tipe, valuenya adalah jumlah masing2 tipe
// contoh: {"strType": 1, "numType": 2} atau {"strType": 1, "arrType": 4}

//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna

const findHexcode = (str) => {
    if(str.length > 3){
        let output = [];
        [...warna].forEach((v) => {
            if(v.hex.includes(str)) output.push(v.hex);
        })
        return console.log(output);
    } else {
        return console.log("Kependekan")
    }
}

// findHexcode("#594");

//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep

//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna

//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep

const foodBelowThisMinutes = (minutes) => {
    let output = [];

    [...resep].forEach((v) => {
        if(v.timers.reduce((total, value) => total + value) <= minutes){
            output.push(v.name);
        }
    })
    return console.log(output)
}

// foodBelowThisMinutes(10);

//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep

//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep

const foodWithIngred = (theIngredients) => {

    let output = [];

    [...resep].forEach((v) => {
        // siapin array buat di aksesnya
        if(v.ingredients.some( value => value.name == theIngredients)){
            output.push(v.name);
        }
    })

    return console.log(output);
}

// foodWithIngred("raisins");

// data relation
//9. buat function contoh myFunc(), yang mereturn array mahasiswa yang 
// menambah 2 properties baru yaitu "data_matkul" dan "data_dosbing"
// tiap-tiap elementnya berisi object berdasarkan properties matkul_id dan dosbing_id

const fullDataMhs = () => {

    let output = [];
    [...mahasiswa].forEach((v) => {

        let tempMatkul = [];
        [...v.matkul_id].forEach((valId) => {
            // console.log(valId, matkul.find(_matkulId => _matkulId.id == valId).id)
            if(valId == matkul.find(_matkulId => _matkulId.id == valId).id ){
                tempMatkul.push(matkul[matkul.findIndex(_matkulId => _matkulId.id == valId)])
            }
        })
        let tempDosbing = [];
        [...v.dosbing_id].forEach((valId) => {
            if(valId == dosen.find(_dosenId => _dosenId.id == valId).id ){
                tempDosbing.push(dosen[dosen.findIndex(__dosenId => __dosenId.id == valId)])
            }
        })
        output.push({
            ...v,
            data_matkul: tempMatkul,
            data_dosbing: tempDosbing
        })
    })

    return console.log(output)
}

fullDataMhs();

//10. buat function contoh myFunc(namaDosen), yang mereturn array mahasiswa yang dibimbing oleh dosen tersebut
// jika myFunc("Pak Diki"), output ["Asep", "Udin"]
// notes: gunakan dataDummy bulk mahasiswa

//11. buat function contoh myFunc(namaMahasiswa), yang mereturn number jumlah sks yang diambil
// jika myFunc("Dimas"), output 10
// notes: gunakan dataDummy bulk mahasiswa