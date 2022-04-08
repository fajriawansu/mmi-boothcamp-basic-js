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
        //console.log(typeof(this.sortAscByFoodName));
        const onlyData = isAsc?[...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let output = [];
        [...onlyData].forEach((v)=>{
            output.push(v.name);
        })
        return output;
        //3.k PlusMethods.showFoodNameOnly() akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan. ["Ayam Goreng", "Sate Padang", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    nameIncludes(hasString, isAsc){
        const onlyData = isAsc?[...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let output = [];
        [...onlyData].forEach((v)=>{
            output.push(v.name);
        })
        let output2 = [];
        for(let i = 0; i < output.length; i++){
            if(output[i].includes(hasString)){
                output2.push(output[i]);
            }
        }
        return output2;
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    
    searchFoodWithout(theIngred, isAsc){
        const onlyData = isAsc?[...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        let output = [];
        [...onlyData].forEach((v)=>{
            if(!v.ingredients.some(dataIng => dataIng.name == theIngred)){
                output.push(v.name)
            }
        })
        return output;
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    searchFoodWith(theIngred, isAsc){
        const onlyData = isAsc?[...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        let output = [];
        [...onlyData].forEach((v)=>{
            if(v.ingredients.some(dataIng => dataIng.name == theIngred)){
                output.push(v.name)
            }
        })
        return output;
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }

    showOnlyFromTo(argIndex1, argIndex2, isAsc){
        const onlyData = isAsc?[...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        let output = [];
        [...onlyData].forEach((v)=>{
            output.push(v.name);
        })
        let firstIndex = argIndex1 < argIndex2? argIndex1 : argIndex2;
        let secondIndex = argIndex1 < argIndex2? argIndex2 : argIndex1;
        if(firstIndex < 0){
            firstIndex = 0;
        }
        if(secondIndex > output.length){
            secondIndex = output.length;
        }
        return output.slice(firstIndex,secondIndex);
        //2.m RecipesFormula.showOnlyFromTo(argIndex1, argIndex2) akan mereturn array passedInData
        // dimulai dari index ke-argIndex1 sampai index ke-argIndex2
        // addnotes: RecipesFormula.showOnlyFromTo(0,10) akan menampilkan 11 data (index 0 sampai 10)
        // addnotes: jika argIndex1 < 0, akan terbaca sebagai index 0
        // addnotes: jika argIndex1 > index data terakhir, otomatis terbaca sebagai index terakhir
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
}

const multiFormula = new PlusMethods(dataResep);

//console.log(multiFormula.nameIncludes("salad",true))
console.log(multiFormula.showOnlyFromTo(8,-40,true));
//console.log(multiFormula.sortAndShowFoodNameOnly(false));
//console.log(multiFormula.searchFoodWith("sugar", true));