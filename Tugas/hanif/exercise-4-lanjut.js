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

    // const sortNamaAja = sortDariAtas.map((val) => {
    //   return val.name
    // })
    return sortDariAtas;
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

    // const sortNamaAja = sortDariBawah.map((val) => {
    //     return val.name
    // })
    return sortDariBawah;
  }

  sortAscByTimeToCook() {
    //2.d RecipesFormula.sortAscByTimeToCook() akan mereturn array yang diurukan
    // berdasarkan lama memasak secara ascending
    // output hanya nama, contoh: ["Ikan Bakar", "Nila Goreng", ...]
    const myArray = [...this.data];

    const sortWaktu = myArray.sort((a, b) => {
      let before = a.timers.reduce((a, b) => a + b);
      let after = b.timers.reduce((a, b) => a + b);
      if (before < after) {
        return 1;
      } else if (after < before) {
        return -1;
      }
    });

    const sortNamaAja = sortWaktu.map((val) => {
      return val.name;
    });
    return sortNamaAja;
  }

  ///////////////tambahan////////////////
  showNameAndStepsOnly() {
    //2.e RecipesFormula.showNameAndStepsOnly() akan mereturn array passedInData yang tiap-tiap
    // elementnya hanya berisi object {name: "blabla", steps: [ ...blablabla ] }
    const myArray = [...this.data]
    let output = {}

    myArray.forEach((val, index)=> {
      let output2 = []
      output2.assign({
        name : val.name,
        steps : val.steps
      })
    })
    return output
  }

  whatShouldICookToday() {
    //2.f RecipesFormula.whatShouldICookToday() akan mereturn string makanan secara random
  }
  searchByFoodName(theName) {
    //2.g RecipesFormula.searchByFoodName(nameFood) akan mereturun object element passedInData
    // yang memiliki nama theName
  }
  isThisFoodNeedOneHour(theName) {
    //2.h RecipesFormula.isThisFoodNeedOneHour(theName) akan mereturun boolean (true/false)
    // true jika makanan dimasak >= 1 jam, false jika < 1 jam
  }
  howToMakeFood(theName) {
    //2.i RecipesFormula.howToMakeFood(theName) akan mereturn array step-step untuk membuat
    // makanan bernama theName
  }
  howLongToMakeFood(theName) {
    //2.j RecipesFormula.howLongToMakeFood(theName) akan mereturn number yang merupakan
    // lamanya waktu (dalam menit) untuk membuat makanan bernama theName
  }
}

const RecipesFormula = new Recipes(resep);

console.log(RecipesFormula.showNameAndStepsOnly());

module.exports = {
  MyRecipes: Recipes,
};
