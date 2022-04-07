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
        let obj = []
        if(isAsc){
           obj = this.sortAscByFoodName().map((v)=> v.name) 
        }
        else{
           obj = this.sortDescByFoodName().map((v)=> v.name) 
        }
        return obj
    }
    nameIncludes(hasString, isAsc){
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        let obj = []
        if(isAsc){
            obj = this.sortAscByFoodName().filter((v)=> v.name.includes(hasString)).map((v)=> v.name)
        }
        else{
            obj = this.sortDescByFoodName().filter((v)=> v.name.includes(hasString)).map((v)=> v.name)
        } 
        return obj 
    }
    
    searchFoodWithout(theIngred, isAsc){
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        let obj = []
        if(isAsc){
            obj = this.sortAscByFoodName().filter((v)=> v.ingredients.filter((val)=> val.name.includes(theIngred)).length==0).map((v)=> v.name)
        }
        else{
            obj = this.sortDescByFoodName().filter((v)=> v.ingredients.filter((val)=> val.name.includes(theIngred)).length==0).map((v)=> v.name)
        }
        return obj
    }
    searchFoodWith(theIngred, isAsc){
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        let obj = []
        if(isAsc){
            obj = this.sortAscByFoodName().filter((v)=>  v.ingredients.filter((val)=> val.name.includes(theIngred)).length>0).map((v)=> v.name)
        }
        else{
            obj = this.sortDescByFoodName().filter((v)=>  v.ingredients.filter((val)=> val.name.includes(theIngred)).length>0).map((v)=> v.name)
        }
        return obj
    }
}

const multiFormula = new PlusMethods(dataResep);

console.log(multiFormula.sortAndShowFoodNameOnly(true));