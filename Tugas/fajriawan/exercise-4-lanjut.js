const dataResep = require("./dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        //2.a Recipes.testMethod() akan mereturn string "Class running properly"
    }

    sortAscByFoodName(){
        //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara ascending
        const tempData = [...this.data].sort((a,b) => {
            let left = a.name.toLowerCase();
            let right = b.name.toLowerCase();
            if(left < right) return -1;
            if(right < left) return 1
        });
        return tempData
        
    }
    sortDescByFoodName(){
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
        return []
    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    }

    ///////////////tambahan////////////////

}

const RecipesFormula = new Recipes(dataResep);

// console.log(RecipesFormula.sortAscByFoodName());

module.exports = {
    MyRecipes: Recipes
}