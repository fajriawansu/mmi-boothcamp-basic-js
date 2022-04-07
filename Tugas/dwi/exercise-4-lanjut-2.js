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


    showOnlyFromTo(argIndex1, argIndex2, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()];
        //2.m PlusMethods.showOnlyFromTo(argIndex1, argIndex2) akan mereturn array passedInData
        // dimulai dari index ke-argIndex1 sampai index ke-argIndex2
        // addnotes: PlusMethods.showOnlyFromTo(0,10, true) akan menampilkan 11 data (index 0 sampai 10)
        // addnotes: jika argIndex1 < 0, akan terbaca sebagai index 0
        // addnotes: jika argIndex1 > index data terakhir, otomatis terbaca sebagai index terakhir
        // adnotes: jika arg2 > arg1 = tetap menampilkan data pada index arg1 sampai arg2
        // jika isAsc = true, dia akan urut ascending, jika false dia descending

        if (argIndex1 > argIndex2) {
            let temp;
            temp = argIndex1;
            argIndex1 = argIndex2;
            argIndex2 = temp;
        }


        if (argIndex1 < 0) {
            argIndex1 = 0;
        }

        if (argIndex2 > tempData.length - 1) {
            argIndex2 = tempData.length - 1;
        }


       

        let output = [];

        for (let i = argIndex1; i <= argIndex2; i++) {
            output.push(tempData[i])
            
        }
        console.log(tempData.length)
        return output;
    }




    
}

const multiFormula = new PlusMethods(dataResep);

// console.log(multiFormula.sortAndShowFoodNameOnly(false));
// console.log(multiFormula.nameIncludes("Curried",true));
// console.log(multiFormula.searchFoodWithout("sugar",true));
// console.log(multiFormula.searchFoodWith("sugar",true));

console.log(multiFormula.showOnlyFromTo(0,2, false));