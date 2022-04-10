const Recipes = require("./exercise-4-lanjut").MyRecipes;
const dataDummy = require("./../fajriawan/dummyData");

const dataResep = dataDummy.resep;

// 3. membuat inheritance class

class PlusMethods extends Recipes {
  constructor(passedInData, passedInName) {
    super(passedInData);
    this.created_by = passedInName ? passedInName : "Administrator";
  }
  sortAndShowFoodNameOnly(isAsc) {
    const tempData = isAsc
      ? [...this.sortAscByFoodName()]
      : [...this.sortDescByFoodName()];
    // 3.k PlusMethods.showFoodNameOnly() akan mereturn array yang merupakan
    // kumpulan nama makanan yang sudah diurutkan. ["Ayam Goreng", "Sate Padang", ...]
    // jika isAsc = true, dia akan urut ascending, jika false dia descending
    // return tempData?.map(v => v.name)
    let output = [];
    [...tempData].forEach((val) => {
      output.push(val.name);
    });
    return output;
  }
  nameIncludes(hasString, isAsc) {
    //3.k PlusMethods.nameIncludes(hasString) akan mereturn array yang merupakan
    // kumpulan nama makanan yang sudah diurutkan yang mengandung string "hasString"
    // contoh ["Ayam Goreng", "Ayam Bumbu Menteaga", "Sate Ayam", ...]
    // jika isAsc = true, dia akan urut ascending, jika false dia descending
    const tempData = isAsc
      ? [...this.sortAscByFoodName()]
      : [...this.sortDescByFoodName()];

    let output = [];
    [...tempData].forEach((val, index) => {
      if (val.name.toLowerCase().includes(hasString.toLowerCase())) {
        output.push(val.name);
      }
    });
    return output;
  }

  searchFoodWithout(theIngred, isAsc) {
    //3.k PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
    // kumpulan nama makanan yang tidak mengandung bahan theIngred
    // jika isAsc = true, dia akan urut ascending, jika false dia descending
    const tempData = isAsc
      ? [...this.sortAscByFoodName()]
      : [...this.sortDescByFoodName()];

    let output = [];

    [...tempData].forEach((val, index) => {
      let tempIngred = val.ingredients;
      if (
        !tempIngred.some((dataIngred) =>
          dataIngred.name.toLowerCase().includes(theIngred.toLowerCase())
        )
      ) {
        output.push(val.name);
      }
    });
    return output;
  }

  searchFoodWith(theIngred, isAsc) {
    //3.l PlusMethods.searchFoodWithout(theIngred) akan mereturn array yang merupakan
    // kumpulan nama makanan yang mengandung bahan theIngred
    // jika isAsc = true, dia akan urut ascending, jika false dia descending
    const tempData = isAsc
      ? [...this.sortAscByFoodName()]
      : [...this.sortDescByFoodName()];

    let output = [];

    [...tempData].forEach((v) => {
      if (
        v.ingredients.some((dataIng) =>
          dataIng.name.toLowerCase().includes(theIngred.toLowerCase())
        )
      ) {
        output.push(v.name);
      }
    });

    return output;
  }

  showOnlyFromTo(argIndex1, argIndex2, isAsc) {
    //2.m PlusMethods.showOnlyFromTo(argIndex1, argIndex2) akan mereturn array passedInData
    // dimulai dari index ke-argIndex1 sampai index ke-argIndex2
    // addnotes: PlusMethods.showOnlyFromTo(0,10, true) akan menampilkan 11 data (index 0 sampai 10)
    // addnotes: jika argIndex1 < 0, akan terbaca sebagai index 0
    // addnotes: jika argIndex1 > index data terakhir, otomatis terbaca sebagai index terakhir
    // adnotes: jika arg2 > arg1 = tetap menampilkan data pada index arg1 sampai arg2
    // jika isAsc = true, dia akan urut ascending, jika false dia descending
    const tempData = isAsc
      ? [...this.sortAscByFoodName()]
      : [...this.sortDescByFoodName()];
    let firstIdx = argIndex1 < argIndex2 ? argIndex1 : argIndex2;
    let secondIdx = argIndex1 < argIndex2 ? argIndex2 : argIndex1;
    let usedIdx = firstIdx < 0 ? 0 : firstIdx;
    let usedIdx2 =
      secondIdx > tempData.length ? tempData.length - 1 : secondIdx;

    return tempData.slice(usedIdx, usedIdx2 + 1);
  }
}

const multiFormula = new PlusMethods(dataResep);

console.log(multiFormula.showOnlyFromTo(1, 2, true));
