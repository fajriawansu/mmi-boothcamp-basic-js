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
        //console.log(typeof(this.sortAscByFoodName));
        const ascData = isAsc?[...this.sortAscByFoodName] : [...this.sortDescByFoodName]
        return [...this.sortAscByFoodName].map(v => v.name);
        //3.k PlusMethods.showFoodNameOnly() akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan. ["Ayam Goreng", "Sate Padang", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    nameIncludes(hasString, isAsc){
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    
    searchFoodWithout(theIngred, isAsc){
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    searchFoodWith(theIngred, isAsc){
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
}

const multiFormula = new PlusMethods(dataResep);

console.log(multiFormula.sortAscByFoodName(true));