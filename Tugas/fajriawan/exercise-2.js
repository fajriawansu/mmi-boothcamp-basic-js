//basic js selasa
const theNumber = [-1,-12,0,1,3,12,16,-25,12,71,32];
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])
//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])
//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})
function evenOddChecker(myArray = theNumber){
    let tempOutput = {
        genap: 0,
        ganjil: 0
    }
    if(myArray?.length > 0){
        myArray.forEach((v) => {
            Math.abs(v) % 2 > 0 ? tempOutput.ganjil ++ : tempOutput.genap ++
        })
        return tempOutput

    } else {
        return "Arraynya kosong"
    }
}

// console.log(evenOddChecker(theNumber))

//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar
function sortFunction(){
    let myArray = [...theNumber]
    if(Array.isArray(myArray)){
        return myArray.sort((a,b) => a - b);
    }
}

console.log(sortFunction(theNumber), theNumber)


//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])

// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"

//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"
function bitByteConversion(number, satuanAwal, satuanAkhir){
    if(satuanAwal == 'bit' && satuanAkhir == 'byte'){
        return number / 8
    }
    // belom kelar
}

// console.log(bitByteConversion(400, 'bit', 'byte'))


//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"

//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"