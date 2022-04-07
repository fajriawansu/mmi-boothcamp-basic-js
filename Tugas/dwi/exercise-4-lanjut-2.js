const Recipes = require("./exercise-4-lanjut").MyRecipes
const dataDummy = require("./../fajriawan/dummyData");

const dataResep = dataDummy.resep

// 3. membuat inheritance class 

class PlusMethods extends Recipes {
    constructor(passedInData, passedInName){
        super(passedInData)
        this.created_by = passedInName ? passedInName : "Administrator"
    }
    sortAndShowFoodNameOnly(isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        //3.k PlusMethods.showFoodNameOnly() akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan. ["Ayam Goreng", "Sate Padang", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        return tempData?.map(v => v.name)
    }
    nameIncludes(hasString, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending

        let tempFinal = [];

        for (let i = 0; i < tempData.length; i++) {
            if(tempData[i].name.includes(hasString)){
            tempFinal.push(tempData[i].name)
            }
        }
        return tempFinal;


    }
    
    searchFoodWithout(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending

        let output = [];

        [...tempData].forEach(v => {
            if(!v.ingredients.some(dataIng => dataIng.name.includes(theIngred))){
                output.push(v.name);
            }
        })


        return output;


    }
    searchFoodWith(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending


        let output = [];
        
        for (let i = 0; i < tempData.length; i++) {
            for (let j = 0; j < tempData[i].ingredients.length; j++) {
                if(tempData[i].ingredients[j].name.includes(theIngred)){
                    output.push(tempData[i].name)
                    break;
                    }
            }
        }
        return output;


    }
    
}

const multiFormula = new PlusMethods(dataResep);

// console.log(multiFormula.sortAndShowFoodNameOnly(false));
// console.log(multiFormula.nameIncludes("Curried",true));
console.log(multiFormula.searchFoodWithout("sugar",true));
console.log(multiFormula.searchFoodWith("sugar",true));