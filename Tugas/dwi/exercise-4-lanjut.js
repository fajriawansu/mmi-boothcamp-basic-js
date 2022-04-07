const dataResep = require("./../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        //2.a Recipes.showData() akan mereturn string "Class running properly"
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
}

const RecipesFormula = new Recipes(dataResep);

// console.log(RecipesFormula.sortAscByFoodName())
// console.log(RecipesFormula.sortAscByTimeToCook())

module.exports = {
    MyRecipes: Recipes
}