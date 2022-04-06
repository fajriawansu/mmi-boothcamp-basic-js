//basic js selasa
const theNumber = [-1,-12,0,1,3,12,16,-25,12,71,32]
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])

function arrayPow(array){
const pangkat = [];
const y = 2;
for (let i = 0; i < array.length; i++) {    
    pangkat.push(Math.pow(array[i],y));    
}
return pangkat;
}

console.log(arrayPow(theNumber));


//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])

function perkalianDuaIndex(array){
const result = [];

for(let i = 0, j = 1; i < array.length; i++, j++){
    if(j === array.length){
        result.push(array[i]);
    }
    else{
        result.push(array[i]*array[j]);
    }

    if(result[i] == -0){
        result[i] = 0;
    }

}

return result;

}

console.log(perkalianDuaIndex(theNumber))


//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})

function habisBagiOddEven(array){
    let genap = 0;
    let ganjil = 0;

    for (let i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            genap += 1;
        }else{
            ganjil += 1;
        }
    }

    return "genap: " + genap + ", ganjil: " + ganjil;

}

console.log(habisBagiOddEven(theNumber));



//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar

function sorting(array){
    const tempArr = [...array]
    let result = [tempArr.sort(function(a, b){return a-b})];
    return result;
}

console.log(sorting(theNumber));


//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])

function reverseSign(array){
let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]*(-1));
    }
    return result;
}

console.log(reverseSign(theNumber));


// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"

function perbandingan(val1,val2){
    if(val1 > val2){
        return val1 + " Lebih Besar dari " + val2
    }else if(val1 < val2){
        return val1 + " Lebih Kecil dari " + val2
    }else if(val1 == val2){
        return val1 + " Sama Besar " + val2
    }
}

console.log(perbandingan(20,11))


//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"


function conversionByteBitSebaliknya(val1, str2, str3){
    if(str2 == "bit" && str3 == "byte"){
        return val1/8;
    }else if(str2 == "byte" && str3 == "bit"){
        return val1*8;
    }else if (val1 != null){
        return val1;
    }else{
        return "Error";
    }
}

console.log(conversionByteBitSebaliknya(10, "bit", "byte"))

//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"

function konversiSuhu(val1, str1, str2){
    const a = 32;
    const b = 273.15;
    if(str1 == "C" && str2 == "F"){
        return (9/5) * val1 + a;
    }else if(str1 == "F" && str2 == "K"){
        return (val1 - a) * (5/9) + b;
    }else if(str1 == "C" && str2 == "K"){
        return val1 + b;
    }
}

console.log(konversiSuhu(32, "F", "K"))

//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"


function cekKelipatanTiga(num1){
    if(num1%3 == 0){
        return "Kelipatan 3"
    }else{
        return "Bukan Kelipatan 3"
    }
}

console.log(cekKelipatanTiga(13))