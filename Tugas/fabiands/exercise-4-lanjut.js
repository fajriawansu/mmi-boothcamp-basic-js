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
    showNameAndStepsOnly(){
        const output = [...this.data].map((value,index)=>{
            return{
                nama: value.name,
                steps: value.steps
            }  
        })
        return output;
        //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
        // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }
    }
    whatShouldICookToday(){
        const outputTemp = [...this.data]
        const output = outputTemp[Math.floor(Math.random()*outputTemp.length)];
        return output.name;
        //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random 
    }
    searchByFoodName(theName){
        const output = [];
        [...this.data].forEach((v)=>{
            output.push(v.name);
        });
        let output2 = [];
        for(let i = 0; i < output.length; i++){
            if(output[i] == theName){
                output2.push(output[i]);
            }
        }
        return output2;
        //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
        // yang memiliki nama theName        
    }
    isThisFoodNeedOneHour(theName){
        const output = [...this.data];
        let output2 = [];
        for(let i = 0; i < output.length; i++){
            if(output[i].name == theName){
                output2.push(output[i].timers)
                // output2.push(output[i].timers);
            }
        }
        let timer = 0;
        for(let i = 0; i < output.length; i++){
            timer = timer + output2[0][i];
        }

        let output3 = "";
        if(timer<60){
            output3 = true;
        }
        else{
            output3 = false;
        }
        return output3;
        //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
        // true jika makanan dimasak >= 1 jam, false jika < 1 jam
    }
    howToMakeFood(theName){
        const output = [...this.data];
        
        let output2 = [];
        for(let i = 0; i < output.length; i++){
            if(output[i].name == theName){
                output2.push(output[i]);
            }
        }
        let output3 = [];
        output3.push(output2[0].steps);
        return output3
        //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
        // makanan bernama theName
    }
    howLongToMakeFood(theName){
        const output = [...this.data];
        let output2 = [];
        for(let i = 0; i < output.length; i++){
            if(output[i].name == theName){
                output2.push(output[i].timers)
                // output2.push(output[i].timers);
            }
        }
        let timer = 0;
        for(let i = 0; i < output.length; i++){
            timer = timer + output2[0][i];
        }

        return timer + " minutes";
        //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
        // lamanya waktu (dalam menit) untuk membuat makanan bernama theName
    }
}

const RecipesFormula = new Recipes(dataResep);

console.log(RecipesFormula.howLongToMakeFood("Curried chicken salad"));
//console.log(RecipesFormula.sortAscByFoodName());
// console.log(RecipesFormula.sortDescByFoodName());
// console.log(RecipesFormula.sortAscByTimeToCook());

module.exports = {
    MyRecipes: Recipes
}