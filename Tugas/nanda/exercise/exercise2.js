//basic js selasa
const theNumber = [-1,-12,0,1,3,12,16,-25,12,71,32]
//1. buat function yang mereturn array pangkat 2 dari tiap-tiap element (hasil: [1,144,0,1, ...])
function Pangkat() {
    let temp = []
    for(i=0;i<theNumber.length;i++){
        temp.push(Math.pow(parseInt(theNumber[i]),2))
    }
    return temp;
}
console.log(Pangkat());
//2. buat function yang mereturn array perkalian 2 index berdekatan (hasil: [12, 0, 0, 3, 36, ... , -32])
function perkalian (){
    let temp2 = []
    for(i=0;i<theNumber.length;i++){
        temp2.push(parseInt(theNumber[i]) * parseInt(theNumber[i+1]));
    }
    return temp2;
}
console.log(perkalian());
//3. buat function yang mereturn banyaknya bilangan genap dan ganjil dalam bentuk object (hasil: {genap: 6, ganjil: 5})
function GenapGanjil (){
    let temp3 = []
    for(i=0;i<theNumber.length;i++){
        if(theNumber[i]%2==0){
            temp3.push("Genap")
        }else{
            temp3.push("Ganjil")
        }
    }
    let arrGabung = temp3.concat(theNumber)
    return arrGabung;
}
console.log(GenapGanjil());
//4. buat function yang mereturn array dengan urut dari bilangan terkecil ke besar
 
// Sorting an array using compare function
theNumber.sort(function(a, b) {
    return a - b;
});
console.log(theNumber);

//5. buat function yang mereturn array yang tiap elemennya terbalik tanda positif negatif nya (hasil: [1,12,0,-1,-3,-12 ...])
function terbalik(){
    let temp4 = []
    for(i=0;i<theNumber.length;i++){
        if(theNumber[i] = +theNumber[i]){
            temp4.push(-theNumber[i])
        }else{
            temp4.push(+theNumber[i])
        }
    }
    return temp4;
}
console.log(terbalik());

// basic js selasa (js condition)
//1. buat function dengan 2 parameters contoh myFunction(val1,val2)
// jika val1 > val2 dia mereturn string "Lebih Besar"
// jika val2 > val1 dia mereturn string "Lebih Kecil"
// jika val1 == val2 dia mereturn string "Sama Besar"
function learnTernary(val1, val2) {
    return typeof arg1 === "number"
      ? "Arg 1 is number"
      : val1 > val2
      ? "Lebih Besar"
      : val2 > val1
      ? "Lebih Kecil"
      : val1 === val2
      ? "Sama Besar"
      : "Gatau";
  }

  console.log(learnTernary(29,10));

//2. buat function konversi byte - bit dengan 3 parameters contoh myFunction(val1, str2, str3)
// jika myFunction(400, "bit", "byte") akan mereturn angka 50 (gak case sensitive)
// jika myFunction(50, "byte", "bit") akan mereturn angka 400 (gak case sensitive)
// jika myFunction(10) akan mereturn nilai 10
// default return string "Error"
function convertion (number, satuan1, satuan2){
    if(satuan1=="bit" && satuan2=="byte"){
        return number/8;
    }else if (satuan1=="byte" && satuan2=="bit"){
        return number*8;
    }
}
console.log(convertion(400,"bit","byte"));

//3. buat function konversi suhu (celcius, kelvin, fahrenheit) dengan 3 parameters contoh myFunction(val1, str1, str2)
// val1 = angka suhu awal, str1 = satuan suhu awal, str2 = satuan suhu akhir (mengkonversi suhu str1 ke str2)
// jika myFunction(0, "C", "F") akan mereturn angka 32
// jika myFunction(32, "F", "K") akan mereturn angka 273.15
// jika myFunction(32, "C", "K") akan mereturn angka 305.15
// notes: pakai konstanta yg "32" dan "273.15"
function ubahSuhu (suhu, satuanSuhu1, satuanSuhu2){
    if(satuanSuhu1 == "C" && satuanSuhu2 == "F"){
       return suhu += 32
    } else if(satuanSuhu1 == "F" && satuanSuhu2 == "K"){
       return suhu = (suhu - 32) * 5/9 + 273.15
    } else if (satuanSuhu1 == "C" && satuanSuhu2 == "K"){
       return suhu+=273.15
    }
}
console.log(ubahSuhu(32,"C","K"));

//4. buat function dengan 1 parameters contoh myFunction(num1) untuk mengecek kelipatan 3
// jika myFunction(6) akan mereturn "Kelipatan 3"
// jika myFunction(13) akan mereturn "Bukan Kelipatan 3"
function myFunction (num1){
    if(num1%3==0){
        return "Kelipatan 3"
    }else{
        return "Bukan Kelipatan 3"
    }
}
console.log(myFunction(6));