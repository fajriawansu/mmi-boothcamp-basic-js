const dataResep = require("./../fajriawan/dummyData").resep

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
        let output = [];
        [...dataResep].forEach((v) => {
            output.push(v.name);
        })

        return output.sort();
    }
    sortDescByFoodName(){
        //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
        // berdasarkan nama makanan secara descending
        let output = [];
        [...dataResep].forEach((v) => {
            output.push(v.name);
        })

        return output.sort(perbandingan);
    }
    sortAscByTimeToCook(){
        //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
        // berdasarkan lama memasak secara ascending
        // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
        let output = [];
        [...dataResep].forEach((val) => {
            val.timers.forEach((namaMakanan) => {
                if(output.hasOwnProperty(namaMakanan)){
                    output[namaMakanan] ++
                } else {
                    output[namaMakanan] = 1
                }
            })
        })
        return console.log(output)
        }
}

function perbandingan(a,b){
    return a-b;
   }

const RecipesFormula = new Recipes(dataResep);
let testRecipes = Recipes.testMethod();

console.log(RecipesFormula.sortAscByFoodName())
console.log(testRecipes);
console.log(RecipesFormula.sortDescByFoodName())
console.log(RecipesFormula.sortAscByTimeToCook())
