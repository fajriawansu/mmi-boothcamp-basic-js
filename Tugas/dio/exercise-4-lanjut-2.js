const Recipes = require("./exercise-4-lanjut").MyRecipes
const dataDummy = require("./../fajriawan/dummyData");

const dataResep = dataDummy.resep

// 3. membuat inheritance class 

class PlusMethods extends Recipes {
    constructor(passedInData, passedInName){
        super(passedInData)
        this.created_by = passedInName ? passedInName : "Administrator"
    }
    sortAndShowFoodNameOnly(isAsc){
        //3.k PlusMethods.showFoodNameOnly() akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan. ["Ayam Goreng", "Sate Padang", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        const obj = isAsc ? this.sortAscByFoodName() : this.sortDescByFoodName()
        return obj.map((v)=> v.name) 
    }
    nameIncludes(hasString, isAsc){
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        const obj = isAsc ? this.sortAscByFoodName() : this.sortDescByFoodName()
        return obj.filter((v)=> v.name.includes(hasString)).map((v)=> v.name) 
    }
    
    searchFoodWithout(theIngred, isAsc){
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        const obj = isAsc ? this.sortAscByFoodName() : this.sortDescByFoodName()
        return obj.filter((v)=> v.ingredients.filter((val)=> val.name.includes(theIngred)).length==0).map((v)=> v.name)
    }
    searchFoodWith(theIngred, isAsc){
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        const obj = isAsc ? this.sortAscByFoodName() : this.sortDescByFoodName()
        return obj.filter((v)=>  v.ingredients.filter((val)=> val.name.includes(theIngred)).length>0).map((v)=> v.name)
    }
    showOnlyFromTo(argIndex1, argIndex2, isAsc){
        //2.m PlusMethods.showOnlyFromTo(argIndex1, argIndex2) akan mereturn array passedInData
        // dimulai dari index ke-argIndex1 sampai index ke-argIndex2
        // addnotes: PlusMethods.showOnlyFromTo(0,10, true) akan menampilkan 11 data (index 0 sampai 10)
        // addnotes: jika argIndex1 < 0, akan terbaca sebagai index 0
        // addnotes: jika argIndex1 > index data terakhir, otomatis terbaca sebagai index terakhir
        // adnotes: jika arg2 > arg1 = tetap menampilkan data pada index arg1 sampai arg2
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        let obj = isAsc ?  this.sortAscByFoodName() :  this.sortDescByFoodName()
        argIndex1 = argIndex1 < 0 ? 0 : argIndex1 > obj.length ? obj.length-1 : argIndex1
        argIndex2 = argIndex2 < 0 ? 0 : argIndex2 > obj.length ? obj.length-1 : argIndex2
        if (argIndex2 < argIndex1){
           obj = obj.filter((v,index)=> index>=argIndex2 && index<=argIndex1)
        }
        else if (argIndex1 < argIndex2){
           obj = obj.filter((v,index)=> index>=argIndex1 && index<=argIndex2)
        }
        else if (argIndex1 == argIndex2){
            obj = obj.filter((v,index)=> index==argIndex1)
        }
        return obj.map((v)=> v.name)
    }
}

const multiFormula = new PlusMethods(dataResep);

console.log(multiFormula.showOnlyFromTo(0,2,true));