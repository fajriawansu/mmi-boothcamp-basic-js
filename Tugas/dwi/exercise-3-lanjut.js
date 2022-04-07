const warna = require("./../fajriawan/dummyData").warna;
const resep = require("./../fajriawan/dummyData").resep;

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

function argumentFunc(){

    let numType = 0;
    let strType = 0;
    let objType = 0;
    let arrType = 0;

    let output = {};

    for (let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] == "number"){
            numType++;
            output["numType"] = numType; 
        }else if(typeof arguments[i] == "string"){
            strType++;
            output["strType"] = strType;
        }else if(Array.isArray(arguments[i])){
            arrType++;
            output["arrType"] = arrType;
        }else if(typeof arguments[i] == "object"){
            objType++;
            output["objType"] = objType;
        }
        
    }

    // if(numType != 0 && strType != 0 && objType != 0 && arrType != 0){
        
    if(numType != 0 && strType == 0 && objType == 0 && arrType == 0){
        output = "All Arguments is Number";
        return output;
    }else if(numType == 0 && strType != 0 && objType == 0 && arrType == 0){
        output = "All Arguments is String";
        return output;
    }else if(numType == 0 && strType == 0 && objType != 0 && arrType == 0){
        output = "All Arguments is Object";
        return output;
    }else if(numType == 0 && strType == 0 && objType == 0 && arrType != 0){
        output = "All Arguments is Array";
        return output;
    }else{
        return output;
    }

    
}

console.log(argumentFunc("a", 2, 44, [2,3,"rr",4], {"irena" : 2}))




//basic js map filter data banyak

//3. buat function contoh myFunc(hexcode), yang mereturn array data hex-hex yang mengandung arguments hexcode
// arguments hexcode harus memiliki minimal 4 karakter (#AAA), jika tidak maka mereturn string (string error message bebas apa saja)
// jika myFunc("#FF8") akan memiliki otput array ["#FF8C00", "#FF8243", "#FF85CF", ...]
// notes: gunakan dataDummy warna

// hex: "#B0BF1A"

const warnaHex = (hexcode) =>{

    
    let output;
    let arrOutput = [];

    if(hexcode.length < 4){
        return output = "Tolong masukkan minimal 4 karakter"
    }

    for (let i = 0; i < [...warna].length; i++) {
        if([...warna][i].hex.includes(hexcode)){
            arrOutput.push([...warna][i].hex)
        }      
    }
    return arrOutput;
}

console.log(warnaHex("#FF8"))

//4. buat function contoh myFunc(foodName), yang mereturn object dengan 2 properties (steps dan ingredients)
// steps dan ingredients merupakan data array
// jika myFunc("Crock Pot Roast") output {steps: ["Place beef roast in crock pot.", ...], ingredients: ["beef roast", "water", ...]}
// notes: gunakan dataDummy resep

const makananDetail = (foodName) => {
    let respNew = [...resep];

    let output = {};

    for (let i = 0; i < respNew.length; i++) {
        
        if (respNew[i].name.toLowerCase() == foodName.toLowerCase()) {
            output["steps"] = respNew[i].steps;
            output["ingredients"] = respNew[i].ingredients;
        }
    }
    return output;
}

console.log(makananDetail("Crock pot Roast"))




//5. buat function contoh myFunc(), yang mereturn string hexcode secara random
// jika myFunc() output "#FF8C00" (bisa yang lain, random)
// notes: gunakan dataDummy warna

const randomColor = () =>{
let allWarna = [...warna];
let output;
let angkaRandom = Math.round(Math.random() * allWarna.length);

for (let i = 0; i < allWarna.length; i++) {
    if(i == angkaRandom){
        output = allWarna[i].hex;
    }
    
}

return output;
}


console.log(randomColor());


//6. buat function contoh myFunc(minutes), yang mereturn array resep makanan yang bisa selesai <= arguments minutes
// jika myFunc(60), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep


const cookingTime = (minutes) =>{
    let resepNew = [...resep];
    let output = [];
    let waktuTemp = 0;
    for (let i = 0; i < resepNew.length; i++) {
        for (let j = 0; j < resepNew[i].timers.length; j++) {
            waktuTemp = waktuTemp + resepNew[i].timers[j];
            if(j == resepNew[i].timers.length - 1){
                if (waktuTemp <= minutes) {
                    output.push(resepNew[i].name);
                }
                waktuTemp = 0;
            }        
        }
        
    }

    return output;
}

console.log(cookingTime(15));



//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep

const cookingTimeIngrid = (minutes, totalIngredients) => {
    let resepNew = [...resep];
    let output = [];
    let waktuTemp = 0;
    let totalIngridTemp = 0;

    for (let i = 0; i < resepNew.length; i++) {
        for (let j = 0; j < resepNew[i].timers.length; j++) {
            waktuTemp = waktuTemp + resepNew[i].timers[j];
            if(j == resepNew[i].timers.length - 1){
                totalIngridTemp = resepNew[i].ingredients.length;
                if (waktuTemp <= minutes && totalIngridTemp <= totalIngredients) {
                    output.push(resepNew[i].name)
                }
                waktuTemp = 0;
            }
        }

        
    }
    return output;
}

console.log(cookingTimeIngrid(60, 5))


//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep


const kandunganBahan = (theIngredients) => {

    let resepKu = [...resep];
    let output = [];

    for (let i = 0; i < resepKu.length; i++) {
        for (let j = 0; j < resepKu[i].ingredients.length; j++) {
           if(resepKu[i].ingredients[j].name.toLowerCase() == theIngredients.toLowerCase()){
               output.push(resepKu[i].name);
           }
        }
        
    }

    return output;
}

console.log(kandunganBahan("Sugar"))