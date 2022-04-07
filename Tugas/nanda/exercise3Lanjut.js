//basic js
//1. buat function, yang mengecek tipe data arguments-arguments didalamnya
// jika semua arguments adalah number, return string "All Arguments is Number"
// jika semua arguments adalah string, return string "All Arguments is String"
// jika semua arguments adalah object, return string "All Arguments is Object"
// jika semua arguments adalah array, return string "All Arguments is Array"
// lanjut ---
// jika arguments lebih dari 1 tipe return object, banyaknya properties sesuai banyaknya tipe, valuenya adalah jumlah masing2 tipe
// contoh: {"strType": 1, "numType": 2} atau {"strType": 1, "arrType": 4}
var getType = (function() {

    var objToString = ({}).toString ,
        typeMap     = {},
        types = [ 
          "Boolean", 
          "Number", 
          "String",                
          "Function", 
          "Array", 
          "Date",
          "RegExp", 
          "Object", 
          "Error"
        ];

    for ( var i = 0; i < types.length ; i++ ){
        typeMap[ "[object " + types[i] + "]" ] = types[i].toLowerCase();
    };    

    return function( obj ){
        if ( obj == null ) {
            return String( obj );
        }
        let notif = "";
        if(typeof obj=="number"){
            notif="All Arguments is Number";
        }else if (typeof obj=="string"){
            notif="All Arguments is String";
        }else if(typeof obj=="Object"){
            notif="All Arguments is Object";
        }else if(typeof obj=="Array"){
            notif="All Arguments is Array";
        }
        
            console.log(notif);
    }
}());

getType("nanda");

//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna
const warna = require("./../fajriawan/dummyData").warna;
function myFunc(hexcode){
    const myObj = [...warna]
    let output = [];
    index=0;
    myObj.forEach((v) => {
        let tempHex = v.hex;
        if(tempHex.toString().toLowerCase().indexOf(hexcode.toLowerCase())!=-1){
            output.push(v);
        }
    })
    let namaHex = []
    for(i=0;i<output.length;i++){
        namaHex.push(output[i].hex);
    }
    return namaHex;
}

console.log(myFunc("#FF8"));

//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep
const resepMakanan = require("./../fajriawan/dummyData").resep;
function myFunc1(foodName){
    const myObj = [...resepMakanan]
    let stepsResep = []
    let ingredientsResep = []
    index=0;
    myObj.forEach((v) => {
        let tempName = v.name;
        if(tempName.toString().toLowerCase().indexOf(foodName.toLowerCase())!=-1){
            stepsResep.push(v.steps);
            for(i=0;i<v.ingredients.length;i++){
                ingredientsResep.push(v.ingredients[i].name);
            }
            
            
        }
    })
    let output = {
        steps: stepsResep,
        ingredients: ingredientsResep
    }
    console.log(output);
}
myFunc1("Crock Pot Roast");


//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna
function myFunc2 (){
    const myObj = [...warna]
    let tempatWarna = [];
    let randomColorString = '';
    myObj.forEach((v) => {
        let tempHex = v.hex;
        tempatWarna.push(tempHex);
    })

    let index = Math.floor(Math.random() * 16)
    let value =tempatWarna[index]
    
    randomColorString += value

    console.log(randomColorString)
}
myFunc2();

//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const foodBelowThisMinutes = (minutes) =>{
    let output = [];
    [...resepMakanan].forEach((v) => {
        if(v.timers.reduce((total,value)=> total+value) <= minutes){
            output.push(v.name);
        }
    })
    console.log(output);
}
foodBelowThisMinutes(60);

//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const durationIngredients = (minutes, totalIngredients) =>{
    output = [];
    [...resepMakanan].forEach((v)=>{
        if(v.timers.reduce((total, value)=> total+value)<=minutes){
            output.push(v);
        }
    });
    let ingredientsNumber = output.filter((value, index)=>{
        return value.ingredients.length === totalIngredients;
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
function myFunc5(theIngredients){
    const myObj = [...resepMakanan]
    let output = [];
    myObj.forEach((v) => {
        let tempIng = v.ingredients
        for(i=0;i<tempIng.length;i++){
            if(tempIng[i].name.toString().toLowerCase().indexOf(theIngredients.toLowerCase())!=-1){
                output.push(v.name);
            }
        }
        
        
    })
    console.log(output); 
}
myFunc5("raisins")

// data relation
//9. buat function contoh myFunc(), yang mereturn array mahasiswa yang 
// menambah 2 properties baru yaitu "data_matkul" dan "data_dosbing"
// tiap-tiap elementnya berisi object berdasarkan properties matkul_id dan dosbing_id
const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;
const dosen = require("./../fajriawan/dummyData").dosen;
const matkul = require("./../fajriawan/dummyData").matkul;

const fullDataMhs = () => {

    let output = [];
    [...mahasiswa].forEach((v) => {

        let tempMatkul = [];
        [...v.matkul_id].forEach((valId) => {
            // console.log(matkul.find(_matkulId => _matkulId.id == valId));
            tempMatkul.push(matkul.find(_matkulId => _matkulId.id == valId))
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
const fullDosen = (namaDosen) => {
    let output = [];
    let namaSiswa = [];
    [...dosen].forEach((v) => {
        let nama = v.name;
        if(nama.toString().toLowerCase().indexOf(namaDosen.toLowerCase())!=-1){
            output.push(v.id);
        }

    })
    
    // return output;
    const myObj = [...mahasiswa]
    myObj.forEach((v) => {
        let string_id = output.join()
        let dosenId = v.dosbing_id;
        if(dosenId.toString().toLowerCase().indexOf(string_id.toLowerCase())!=-1){
            namaSiswa.push(v.name)
        }

    })
    return namaSiswa;
}

console.log(fullDosen("Pak Gun"));



//11. buat function contoh myFunc(namaMahasiswa), yang mereturn number jumlah sks yang diambil
// jika myFunc("Dimas"), output 10
// notes: gunakan dataDummy bulk mahasiswa
const fullsksMhs = (namaMahasiswa) => {
    let output = [];
    let tempsks = [];
    [...mahasiswa].forEach((v) => { 
        let namaSiswa = v.name;
        if(namaSiswa.toString().toLowerCase().indexOf(namaMahasiswa.toLowerCase())!=-1){
            output.push(v.matkul_id);
        }
        
        [...output].forEach((valId) => {
            if(valId == matkul.find(_dosenId => _dosenId.id == valId).id ){
                tempsks.push(matkul[matkul.findIndex(__dosenId => __dosenId.id == valId)].sks)
            }
        })


    })
    return tempsks;
}

console.log(fullsksMhs("Udin"));

