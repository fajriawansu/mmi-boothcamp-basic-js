const resep = require("./../fajriawan/dummyData").resep;

class Recipes {
  constructor(passedInData) {
    this.data = passedInData;
  }

  static testMethod() {
    //2.a Recipes.testMethod() akan mereturn string "Class running properly"
    return "Class running properly";
  }

  sortAscByFoodName() {
    //2.b RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
    // berdasarkan nama makanan secara ascending
    const myArray = [...this.data];
    const sortDariAtas = myArray.sort((a, b) => {
      let before = a.name;
      let after = b.name;
      if (before < after) {
        return -1;
      } else if (after < before) {
        return 1;
      }
    });

    const sortNamaAja = sortDariAtas.map((val) => {
        return val.name
    })
    return sortNamaAja
  }

  sortDescByFoodName() {
    //2.c RecipesFormula.sortByFoodName() akan mereturn array passedInData yang diurutkan
    // berdasarkan nama makanan secara descending
    const myArray = [...this.data];

    const sortDariBawah = myArray.sort((a, b) => {
      let before = a.name;
      let after = b.name;
      if (before < after) {
        return 1;
      } else if (after < before) {
        return -1;
      }
    });

    const sortNamaAja = sortDariBawah.map((val) => {
        return val.name
    })
    return sortNamaAja
  }

  sortAscByTimeToCook() {
    //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
    // berdasarkan lama memasak secara ascending
    // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    const myArray = [...this.data];

    const sortWaktu = myArray.sort((a, b) => {
      let before = a.timers.reduce((a, b) => a+b);
      let after = b.timers.reduce((a, b) => a+b);
      if (before < after) {
        return 1;
      } else if (after < before) {
        return -1;
      }
    });

    const sortNamaAja = sortWaktu.map((val) => {
        return val.name
    })
    return sortNamaAja
  }
}

const RecipesFormula = new Recipes(resep);

console.log(RecipesFormula.sortAscByTimeToCook());
