const Recipes = require("./exercise4-lanjut").MyRecipes
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
        let x = tempData?.map(v => v.name)
        return x
    }
    nameIncludes(hasString, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let output = [];
        [...tempData].forEach((v) => {
            if(v.name.some(dataIng => dataIng.name.includes(hasString))){
                output.push(v.name);
            }
        })
        return output;
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    
    searchFoodWithout(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];

        let output = [];

        [...tempData].forEach((v) => {
            if(!v.ingredients.some(dataIng => dataIng.name.includes(theIngred))){
                output.push(v.name);
            }
        })

        return output
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        // ini jangan lupa dikasih tanda seru !v karna false.
    }
    searchFoodWith(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];

        let output = [];

        [...tempData].forEach((v) => {
            if(v.ingredients.some(dataIng => dataIng.name.includes(theIngred))){
                output.push(v.name);
            }
        })

        return output
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }

    showOnlyFromTo(argIndex1, argIndex2, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let output = [];
        [...tempData].forEach((v) => {
                output.push(v.name);
            
        })
        if(argIndex1<0){
            argIndex1 = 0;
        }
        if(argIndex2 > output.length){
            argIndex2=output.length;
        }
        return output.slice(argIndex1,argIndex2);
        //2.m PlusMethods.showOnlyFromTo(argIndex1, argIndex2) akan mereturn array passedInData
        // dimulai dari index ke-argIndex1 sampai index ke-argIndex2
        // addnotes: PlusMethods.showOnlyFromTo(0,10, true) akan menampilkan 11 data (index 0 sampai 10)
        // addnotes: jika argIndex1 < 0, akan terbaca sebagai index 0
        // addnotes: jika argIndex1 > index data terakhir, otomatis terbaca sebagai index terakhir
        // adnotes: jika arg2 > arg1 = tetap menampilkan data pada index arg1 sampai arg2
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
}

const multiFormula = new PlusMethods(dataResep);
console.log(dataResep);

console.log(multiFormula.sortAndShowFoodNameOnly(true));
console.log(multiFormula.nameIncludes("Roasted",true));
console.log(multiFormula.searchFoodWithout("salt",false));
console.log(multiFormula.searchFoodWith("sugar",false));
console.log(multiFormula.showOnlyFromTo(-3,5,false));