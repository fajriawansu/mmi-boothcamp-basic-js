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

// Js Class
class Mobil {
    constructor(name, year){
        this.namaMobil = name;
        this.tahunBuat = year ? year : 2010
    }

    static hello(){
        return "hello"
    }

    age(){
        let currentYear = new Date().getFullYear();
        console.log(currentYear - this.tahunBuat);
        return currentYear - this.tahunBuat
    }
}

class Model extends Mobil {
    constructor(brand, year, warna){
        super(brand, year);
        this.warnaMobil = warna
    }
    show(){
        return "Mobil ini berumur " + this.age();
    }
}

let myCar = new Model("CRV", 2000, "Merah");
console.log(myCar.show());