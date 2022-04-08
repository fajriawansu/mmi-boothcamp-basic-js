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
    showNameAndStepsOnly(){
        //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
        // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }
        return this.data.map((v)=> {
            return {"name":v.name, "steps": v.steps}})
    }
    whatShouldICookToday(){
        //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random 
        const foodName = this.data.map((v)=> v.name)
        const random = Math.floor(Math.random() * foodName.length)
        return foodName[random]
    }
    searchByFoodName(theName){
        //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
        // yang memiliki nama theName
        return this.data.find((v)=> v.name == theName)
    }
    isThisFoodNeedOneHour(theName){
        //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
        // true jika makanan dimasak >= 1 jam, false jika < 1 jam
        return this.data.find((v)=> v.name == theName && v.timers.reduce((sum, v)=> sum+v,0)>=60) ? true : false
    }
    howToMakeFood(theName){
        //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
        // makanan bernama theName
        return this.data.find((v)=> v.name == theName).steps
    }
    howLongToMakeFood(theName){
        //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
        // lamanya waktu (dalam menit) untuk membuat makanan bernama theName
        return this.data.find((v)=> v.name == theName).timers.reduce((sum, v)=> sum+v,0)
    }
}
const RecipesFormula = new Recipes(dataResep);
//console.log(RecipesFormula.howLongToMakeFood("Big Night Pizza"))
module.exports = {
    MyRecipes: Recipes
}
