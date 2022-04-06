const theNumber = [-1,-12,0,1,
                    3,12,16,-25,
                    12,71,32]
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])
function pangkatDua(num){
    let newNum = []
    for(x in num){
        newNum.push(Math.pow(num[x], 2))
    }
    return newNum
}
console.log(pangkatDua(theNumber))
//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])
function perkalianDuaIndex(num){
    let newNum = []
    for(let x = 0; x<num.length; x++){
        if(x != num.length-1){
            newNum.push(num[x]*num[x+1])
        }
        else{
            newNum.push(num[x]*num[0])
        }
    }
    return newNum
}
console.log(perkalianDuaIndex(theNumber))
//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})
function genapGanjil(num){
    let genap = 0;
    let ganjil = 0;
    for( x in num){
        if(num[x]%2==0){
            genap++
        }
        else{
            ganjil++
        }
    }
    return {"genap":genap, "ganjil":ganjil}
}
console.log(genapGanjil(theNumber))
//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar
function urutBil(num){
    let newNum = num //
    // let temp
    // for(let x = 0;  x<newNum.length; x++){
    //     for(let y = x; y<=x; y++){
    //         if(newNum[x]>=newNum[y]){
    //             temp = newNum[y]
    //             newNum[y] = newNum[x]
    //             newNum[x] = temp
    //         }
    //     }
    // }
    return newNum.sort(function(a,b){return a-b})
}
console.log(urutBil(theNumber))
//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])
function balikPositifNegatif(num){
    let newNum = []
    for (x in num){
        newNum.push(num[x]*-1)
    }
    return newNum
}
console.log(balikPositifNegatif(theNumber))
// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"
function myFunction(val1, val2){
    let mess
    if(val1>val2){
        mess = "Lebih Besar"
    }
    else if(val2>val1){
        mess = "Lebih Kecil"
    }
    else if(val1==val2){
        mess = "Sama Besar"
    }
    return mess
}
console.log(myFunction(5, 7))
//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"
function myFunction1(val1, str2, str3){
    if(str2.toLowerCase() === "bit" && str3.toLowerCase() ==="byte"){
        return val1/8
    }
    else if(str2.toLowerCase() === "byte" && str3.toLowerCase() ==="bit"){
        return val1*8
    }
    else if (val1){
        return val1
    }
    else{
        return "Error"
    }
}
console.log(myFunction1(50, "byte", "bit"))
//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"
function myFunction2(val1, str1, str2){
    if(str1.toLowerCase()=="c" && str2.toLowerCase()=="f"){
        return (val1*(9/5))+32
    }
    else if(str1.toLowerCase()=="f" && str2.toLowerCase()=="k"){
        return (val1-32)*(5/9)+273.15
    }
    if(str1.toLowerCase()=="c" && str2.toLowerCase()=="k"){
        return val1+273.15
    }
    else if (val1){
        return val1
    }
    else{
        return "Error"
    }
}
console.log(myFunction2(50, "c", "k"))
//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"
function myFunction3(num){
    if(num%3==0){
        return "Kelipatan 3"
    }
    else{
        return "Bukan Kelipatan 3"
    }
}
console.log(myFunction3(6))