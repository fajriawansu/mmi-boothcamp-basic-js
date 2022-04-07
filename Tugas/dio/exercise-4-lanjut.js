const dataResep = require("./../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        //2.a Recipes.showData() akan mereturn string "Class running properly"
        return "Class running properly"
    }

    sortAscByFoodName(){
        //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara ascending
        return this.data.sort((a,b)=>{
           return a.name.toLowerCase()<b.name.toLowerCase()? -1 : a.name.toLowerCase()>a.name.toLowerCase() ? 1 : 0
        })
    }
    sortDescByFoodName(){
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
        return this.data.sort((a,b)=>{
            return a.name.toLowerCase()>b.name.toLowerCase()? -1 : a.name.toLowerCase()<a.name.toLowerCase() ? 1 : 0
         })
    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
        return this.data.sort((a,b)=> {
            return a.timers.reduce((sum, v)=> sum+v) - b.timers.reduce((sum, v)=> sum+v)
        }).map((v)=> v.name)
    }
}
const RecipesFormula = new Recipes(dataResep);
module.exports = {
    MyRecipes: Recipes
}

// const RecipesFormula = new Recipes(dataResep);

// console.log(RecipesFormula.sortAscByFoodName())
// console.log(RecipesFormula.sortDescByFoodName())
// console.log(RecipesFormula.sortAscByTimeToCook())