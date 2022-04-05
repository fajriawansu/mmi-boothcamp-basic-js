//basic js selasa
const theNumber = [-1,-12,0,1,3,12,16,-25,12,71,32]
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])
function pangkatDua(){
    theNumberPangkat = [];
    for(i = 0;i<theNumber.length;i++){
        theNumberPangkat[i] = Math.pow(theNumber[i],2);
    }
    return theNumberPangkat;
}
console.log(pangkatDua());

//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])
function kaliSamping(){
    theNumberSamping = [];
    for(i = 0;i<theNumber.length;i++){
        if(i!=theNumber.length-1){
            theNumberSamping[i] = theNumber[i]*theNumber[i+1];
        }
        else{
            theNumberSamping[i] = theNumber[i]*theNumber[0];
        }
    }
    return theNumberSamping;
}
console.log(kaliSamping());

//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})
function ganjilGenap(){
    let genap = 0;
    let ganjil = 0;
    for(i = 0;i<theNumber.length;i++){
        if(theNumber[i]%2 == 0){
            genap++;
        }
        else{
            ganjil++;
        }
    }
    let ganjilGenap = "Genap: "+genap+", Ganjil: "+ganjil;
    return ganjilGenap;
}
console.log(ganjilGenap());

//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar
function sortAscend(){
    let theNumberTemp = theNumber;
    theNumberTemp.sort(function(a, b){
        return a - b
    });
    return theNumberTemp;
}
console.log(sortAscend());

//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])
function balikAngka(){
    theNumberBalik = [];
    for(i = 0;i<theNumber.length;i++){
        theNumberBalik[i] = theNumber[i]*(-1);
    }
    return theNumberBalik;
}
console.log(balikAngka());

// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"
function bandingDua(val1, val2){
    stringTemp = "";
    if(val1>val2){
        stringTemp = "Lebih Besar";
    }
    else if(val2>val1){
        stringTemp = "Lebih Kecil";
    }
    else{
        stringTemp = "Sama Besar";
    }
    return stringTemp;
}
console.log(bandingDua(5,5));

//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"
function konversiBit(val1, str1, str2){
    hitungBit = 0;
    if(str1 == "bit" && str2 =="byte"){
        hitungBit = val1/8;
    }
    else if(str1 == "byte" && str2 == "bit"){
        hitungBit = val1*8;
    }
    else{
        hitungBit = val1;
    }
    return hitungBit;
}
console.log(konversiBit(400,"bit","byte"))

//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"
function konversiSuhu(val1, str1, str2){
    hitungSuhu = 0;
    if(str1 == "C"){
        if(str2 == "F"){
            hitungSuhu = (val1*9/5)+32;
        }
        else if(str2 == "K"){
            hitungSuhu = val1+273.15;
        }
        else{
            hitungSuhu = "Tidak Diketahui";
        }
    }
    else if(str1 == "F"){
        if(str2 == "C"){
            hitungSuhu = (val1-32)*5/9;
        }
        else if(str2 == "K"){
            hitungSuhu = ((val1-32)*5/9)+273.15;
        }
        else{
            hitungSuhu = "Tidak Diketahui";
        }
    }
    else if(str1 == "K"){
        if(str2 == "C"){
            hitungSuhu = val1-273.15;
        }
        else if(str2 == "F"){
            hitungSuhu = ((val1-273.15)*9/5)+32;
        }
        else{
            hitungSuhu = "Tidak Diketahui";
        }
    }
    else{
        hitungSuhu = "Tidak Diketahui";
    }
    return hitungSuhu;
}
console.log(konversiSuhu(5,"C","F"));

//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"
function kelipatanTiga(num1){
    let kelipatanTiga = "";
    if(num1%3==0){
        kelipatanTiga = "Kelipatan 3";
    }
    else{
        kelipatanTiga = "Bukan Kelipatan 3";
    }
    return kelipatanTiga;
}
console.log(kelipatanTiga(6));