const dataResep = require("../../fajriawan/dummyData").resep

class Recipes {
    constructor(passedInData){
        this.data = passedInData
    }

    static testMethod(){
        //2.a Recipes.showData() akan mereturn string "Class running properly
        return "Class Running Properly"
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
        let output = [];
        [...dataResep].forEach((v) => {
            v.timers.forEach((namaMakanan) => {
                if(output.hasOwnProperty(namaMakanan)){
                    output[namaMakanan] ++
                } else {
                    output[namaMakanan] = 1
                }
            })
        })
        return console.log(output)
        }

        showNameAndStepsOnly(){
            //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
            // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }
            return this.data; 
        }
        whatShouldICookToday(){
            //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random
            let x = this.data;
            let namaMakanan = [];
            let randomNamaMakanan = '';
            x.forEach((v) => {
                let tempNama = v.name;
                namaMakanan.push(tempNama);
            })
        
            let index = Math.floor(Math.random() * namaMakanan.length)
            let value =namaMakanan[index]
            
            randomNamaMakanan += value
        
            console.log(randomNamaMakanan)
           
        }
        searchByFoodName(theName){
            //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
            // yang memiliki nama theName
            let output = [];
            [...dataResep].forEach((val) => {
                let tempNama = v.name;
                if(tempNama.toString().toLowerCase().indexOf(theName.toLowerCase())!=-1){
                    output.push(v.name);
                }
            })
            return output;
            
        }
        isThisFoodNeedOneHour(theName){
            //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
            // true jika makanan dimasak >= 1 jam, false jika < 1 jam   
            const obj = [...this.data]
            let output = []
            for(let i=0;i<obj.length;i++){
                if(obj[i].name == theName){
                    output.push(obj[i].timers)
                }
            }

            let time = 0;
            for(let i=0;i<output[0].length;i++){
                time = time + output[0][i]
            }

            let output1 = "";
            if(time>=60){
                output1 =  "true";
            }else{
                output1 = "false"
            }
            return output1;

        }
        howToMakeFood(theName){
            //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
            // makanan bernama theName
            const obj = [...this.data]
            let output = []
            for(let i=0;i<obj.length;i++){
                if(obj[i].name == theName){
                    output.push(obj[i].steps)
                }
            }
            return output;

        }
        howLongToMakeFood(theName){
            //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
            // lamanya waktu (dalam menit) untuk membuat makanan bernama theName
            const obj = [...this.data]
            let output = []
            for(let i=0;i<obj.length;i++){
                if(obj[i].name == theName){
                    output.push(obj[i].timers)
                }
            }

            let time = 0;
            for(let i=0;i<output[0].length;i++){
                time = time + output[0][i]
            }
            return time;
        }
}

function perbandingan(a,b){
    return a-b;
   }

module.exports = {
    MyRecipes: Recipes
}

const RecipesFormula = new Recipes(dataResep);
let testRecipes = Recipes.testMethod();

console.log(RecipesFormula.sortAscByFoodName())
console.log(testRecipes);
console.log(RecipesFormula.sortDescByFoodName())
console.log(RecipesFormula.sortAscByTimeToCook())
console.log(RecipesFormula.showNameAndStepsOnly());
console.log(RecipesFormula.whatShouldICookToday());
