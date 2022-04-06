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
    const cookDur = resep.filter((value, index)=>{
        for(let i=0; i<value.length; i++){
            return value.minutes[i] === minutes;
        }
    })
    return cookDur;
}
console.log(cookDuration(60))

//7. buat function contoh myFunc(minutes, totalIngredients), yang mereturn array resep makanan
// yang selesai <= minutes dan total ingredients <= totalIngredients
// jika myFunc(60, 5), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep

//8. buat function contoh myFunc(theIngredients), yang mereturn array resep makanan yang membutuhkan bahan theIngredients
// jika myFunc("Sugar"), output ["Ayam Goreng", "Sate Padang", ...]
// notes: gunakan dataDummy resep
const cookIng = (foodIngredients) =>{
    const foodRecipe = resep.filter((value,index)=>{
            return value.ingredients.name === foodIngredients;
        })
    return foodRecipe;
}
console.log(cookIng(" beef roast"));