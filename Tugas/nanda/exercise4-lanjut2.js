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
        const myObj = [...dataResep]
        let output = [];
        myObj.forEach((v) => {
            let tempName = v.name;
            if(tempName.toString().toLowerCase().indexOf(hasString.toLowerCase())!=-1){
                output.push(v);
            }
        })
        const tempDatax = output.sort((a,b) => {
            let left = a.output.toLowerCase();
            let right = b.output.toLowerCase();
            if(left < right) return -1;
            if(right < left) return 1
        });

        const tempDatax2 = output.sort((a,b) => {
            let left = a.output.toLowerCase();
            let right = b.output.toLowerCase();
            if(left > right) return -1;
            if(right > left) return 1
        });

        const tempData = isAsc ? tempDatax : tempDatax2
        return tempData
    
        //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
        // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
        // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
    
    searchFoodWithout(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let x = tempData?.map(v => v.name)
        return x
        //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang tidak mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
        // ini jangan lupa dikasih tanda seru !v karna false.
    }
    searchFoodWith(theIngred, isAsc){
        const tempData = isAsc ? [...this.sortAscByFoodName()] : [...this.sortDescByFoodName()]
        let x = tempData?.map(v => v.name)
        return x
        //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
        // kumpulan nama makanan yang mengandung bahan theIngred
        // jika isAsc = true, dia akan urut ascending, jika false dia descending
    }
}

const multiFormula = new PlusMethods(dataResep);
console.log(dataResep);

console.log(multiFormula.sortAndShowFoodNameOnly(true));
console.log(multiFormula.nameIncludes("Roasted",true));
// console.log(multiFormula.searchFoodWithout("salt",false));
// console.log(multiFormula.searchFoodWith("sugar",false))