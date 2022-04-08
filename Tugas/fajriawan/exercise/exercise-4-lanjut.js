const dataResep = require("./../dummyData").resep

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
        const tempData = [...this.data].sort((a,b) => {
            let left = a.name.toLowerCase();
            let right = b.name.toLowerCase();
            if(left > right) return -1;
            if(right > left) return 1
        });
        return tempData
    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    }

    ///////////////tambahan////////////////
    showNameAndStepsOnly(){
        //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
        // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }
    }
    whatShouldICookToday(){
        //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random 
    }
    searchByFoodName(theName){
        //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
        // yang memiliki nama theName
    }
    isThisFoodNeedOneHour(theName){
        //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
        // true jika makanan dimasak >= 1 jam, false jika < 1 jam
    }
    howToMakeFood(theName){
        //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
        // makanan bernama theName
    }
    howLongToMakeFood(theName){
        //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
        // lamanya waktu (dalam menit) untuk membuat makanan bernama theName
    }
}

const RecipesFormula = new Recipes(dataResep);

// console.log(RecipesFormula.sortAscByFoodName());

module.exports = {
    MyRecipes: Recipes
}