const dataResep = require("./../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        
        //2.a Recipes.showData() akan mereturn string "Class running properly"
    }

    sortAscByFoodName(){
        const ascData = [...this.data].sort((a,b)=> {
            let left = a.name.toLowerCase();
            let right = b.name.toLowerCase();
            if(left<right) return-1;
            if(left>right) return 1;
        });
        return ascData;

        //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara ascending
    }
    sortDescByFoodName(){
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    }
}

const RecipesFormula = new Recipes(dataResep);

console.log(RecipesFormula.sortAscByFoodName());

module.exports = {
    MyRecipes: Recipes
}