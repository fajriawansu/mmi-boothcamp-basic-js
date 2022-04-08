const dataResep = require("./../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        //2.a Recipes.testMethod() akan mereturn string "Class running properly"
        return "Class running properly"
    }

    sortAscByFoodName(){
        //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara ascending
        
        function myResepSortAsc(a,b){
            let before = a.name;
            let after = b.name;
            if (before < after){return -1};
            if (after < before){return 1};
        }
        
        
        return this.data.sort(myResepSortAsc);

    }
    sortDescByFoodName(){
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
        function myResepSortDesc(a,b){
            let before = a.name;
            let after = b.name;
            if (before > after){return -1};
            if (after > before){return 1};
        }
        
        
        return this.data.sort(myResepSortDesc);


    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    
        let arrTime = [];
        let arrName = [];
        let objNameTime = {};

        let arrObj = [];
        for (let i = 0; i < this.data.length; i++) {
           arrTime.push( this.data[i].timers.reduce((prevValue, currentValue)=>{
               return prevValue + currentValue
           })
           )
           arrName.push(this.data[i].name)
        }


        for (let i = 0; i < arrName.length; i++) {
           objNameTime = {name: arrName[i], timers: arrTime[i]};
           arrObj.push(objNameTime);
            objNameTime = {};
            
        }
        
        function myResepSortAscByTime(a,b){
            let before = a.timers;
            let after = b.timers;
            if (before < after){return -1};
            if (after < before){return 1};
        }

        let finalSort = [];
        finalSort = arrObj.sort(myResepSortAscByTime);

        let output = [];

        for (let i = 0; i < finalSort.length; i++) {
            output.push(finalSort[i].name);
            
        }
        
        return output;


    }


    
    ///////////////tambahan////////////////
    showNameAndStepsOnly(){
        //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
        // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }

        let temp = {};
        let output = [];

        for (let i = 0; i < this.data.length; i++) {
            temp.name = this.data[i].name
            temp.steps = this.data[i].steps
            output.push(temp);
            temp = {};
        }

        return output;

    }
    whatShouldICookToday(){
        //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random 
        let angkaRandom = Math.round(Math.random() * this.data.length);
        let output;
        
        for (let i = 0; i < this.data.length; i++) {
            if (i == angkaRandom) {
                output = this.data[i].name
            }     
        }

        return output;
    }
    searchByFoodName(theName){
        //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
        // yang memiliki nama theName

        let output = {};

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].name.toLowerCase() == theName.toLowerCase()) {
                output = this.data[i]
            }    
        }

        return output;

    }
    isThisFoodNeedOneHour(theName){
        //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
        // true jika makanan dimasak >= 1 jam, false jika < 1 jam

        let output;
        let time = 0;

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].name.toLowerCase() == theName.toLowerCase()) {
                for (let j = 0; j < this.data[i].timers.length; j++) {
                    time = time + this.data[i].timers[j]
                }
            }
            
            if (time >= 60) {
                output = true;
            }else if(time < 60){
                output = false;
            }
        }

        return output;

    }
    howToMakeFood(theName){
        //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
        // makanan bernama theName

        let output ;

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].name.toLowerCase() == theName.toLowerCase()) {
                output = this.data[i].steps
            }      
        }
        return output;

    }
    howLongToMakeFood(theName){
        //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
        // lamanya waktu (dalam menit) untuk membuat makanan bernama theName

        let output = 0;

        for (let i = 0; i < this.data.length; i++) {
           
            if (this.data[i].name.toLowerCase() == theName.toLowerCase()) {
                for (let j = 0; j < this.data[i].timers.length; j++) {
                    output = output + this.data[i].timers[j]
                }
            }          
        }

        return output;


    }
    
}

const RecipesFormula = new Recipes(dataResep);

// console.log(RecipesFormula.sortAscByFoodName())
// console.log(RecipesFormula.sortAscByTimeToCook())
console.log(RecipesFormula.howLongToMakeFood("Curried Lentils and RIce"));

module.exports = {
    MyRecipes: Recipes
}