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
function myFunct(minutes, totalIngredients){
    const myObj = [...resepMakanan]
    let output = [];
    myObj.forEach((v) => {
        let tempTime = v.timers;
        let tempTotal = v.ingredients;
        if(tempTime.toString().toLowerCase().indexOf(timerMasak.toLowerCase())!=-1 && tempTotal==tempTotal.length){
            output.push(v.name);
        }
        
    })
    console.log(output); 
}

// myFunct(60,5);

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