const dataResep = require("./../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        return "Class running properly";
        //2.a Recipes.showData() akan mereturn string "Class running properly"
    }

    sortAscByFoodName(){
        const ascData = [...this.data].sort((a,b)=> {
            let left = a.name.toLowerCase();
            let right = b.name.toLowerCase();
            if(left<right) return-1;
            if(left>right) return 1;
        });
        // const nameAsc = ascData.map((value, index)=>{
        //     return value.name
        // });
        return ascData;

        //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara ascending
    }
    sortDescByFoodName(){
        const descData = [...this.data].sort((a,b)=> {
            let left = a.name.toLowerCase();
            let right = b.name.toLowerCase();
            if(left>right) return-1;
            if(left<right) return 1;
        });
        // const nameDesc = descData.map((value, index)=>{
        //     return value.name
        // });
        return descData;
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
    }
    sortAscByTimeToCook(){
        const ascTimers = [...this.data].sort((a,b)=> {
            let left = a.timers.reduce((a, b) => a + b, 0);
            let right = b.timers.reduce((a, b) => a + b, 0);
            if(left<right) return-1;
            if(left>right) return 1;
        });
        const ascTimer = ascTimers.map((value, index)=>{
            return value.name;
        });
        return ascTimer;
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    }
}

const RecipesFormula = new Recipes(dataResep);

//console.log(RecipesFormula.sortAscByFoodName());
// console.log(RecipesFormula.sortDescByFoodName());
// console.log(RecipesFormula.sortAscByTimeToCook());

module.exports = {
    MyRecipes: Recipes
}