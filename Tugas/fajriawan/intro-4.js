// panggil function

// invocation
// function sum2arg(a,b){
//     return a + b
// }
// sum2arg(1,4)

const orang = {
    fullName: function(lokasi){
        return this.first + this.last + " tinggal di = " + lokasi
    }
}

const dataPerOrang = {
    first: "Fajri",
    last: "Awan"
}

// console.log(orang.fullName.call(dataPerOrang, "Depok"))

// Js Class
class Mobil {
    constructor(name, year){
        this.namaMobil = name;
        this.tahunBuat = year
    }

    static hello(){
        return "hello"
    }

    age(){
        let currentYear = new Date().getFullYear();
        console.log(currentYear - this.tahunBuat);
    }
}

// let mobilku = new Mobil("Honda", 2000);
console.log(Mobil.hello())