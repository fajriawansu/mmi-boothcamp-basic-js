// callback function
const movie = require("../../fajriawan/dummyData").greatMovies;

//notes: sebenernya, bebas. yang penting output returnnya ditulis di dalam callback function

//1. buat function dengan 2 parameters contoh myFunction(directorName, cbFunction),
// buat callback function contoh myCallback(cbData) akan mereturn film-film yang didirect oleh
// directorName pada function myFunction(directorName, cbFunction)
//contoh: jika myFunction("Raditya Dika", myCallback), myCallback() akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
const myCallback = (string) => {
  return console.log(string);
};

const myFunction = (cbFunction, directorName) => {
  const myObj = [...movie];
  const output = [];
  myObj.forEach((v) => {
    let tempDirector = v.director;
    if (
      tempDirector
        .toString()
        .toLowerCase()
        .indexOf(directorName.toLowerCase()) != -1
    ) {
      output.push(v.title);
    }
  });

  setTimeout(() => {
    cbFunction(output);
  }, 1000);
};

myFunction(myCallback, "Christopher Nolan");

//2. buat function 1 parameters sebagai callback contoh myFunction(cbFunction),
//  buat callback function contoh myCallback(cbData) dimana mereturn string film genre terbanyak
// cbData adalah arguments berupa object, contoh: {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
// notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
const myFunction2 = (cbFunction) => {
  let output = {};
  const myObj = [...movie];

  myObj.forEach((val) => {
    val.genre.forEach((genreName) => {
      if (output.hasOwnProperty(genreName)) {
        output[genreName]++;
      } else {
        output[genreName] = 1;
      }
    });
  });

  setTimeout(() => {
    cbFunction(output);
  }, 1000);
};
myFunction2(myCallback);

//3. buat function 1 parameters sebagai callback contoh myFunction(cbFunction),
//  buat callback function dengan 1 parameters contoh myCallback(name) dimana mereturn jumlah film berdasarkan genre
// myCallback akan memiliki return dalam bentuk string dengan kondisi:
// jika yang terbanyak adalah film action akan mereturn string "Aku suka list rekomendasimmu"
// jika yang terbanyak adalah film drama akan mereturn string "Aku tidak suka list rekomendasimu"
// jika yang terbanyak adalah film thriller akan mereturn string "Jangan rekomendasikan film kesukaanmu saja"
// jika yang terbanyak adalah film fantasy akan mereturn string "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku"
// jika yang terbanyak adalah selain 4 genre di atas akan mereturn "Hmm, akan aku catat dulu"
const myFunction3 = (cbFunction) => {
  let output = [];
  const myObj = [...movie];
  let notif = "";
  myObj.forEach((val) => {
    val.genre.forEach((genreName) => {
      if (output.hasOwnProperty(genreName)) {
        output[genreName]++;
      } else {
        output[genreName] = 1;
      }
    });
  });

  let sortGenre = [];
  for (let genreName in output) {
    sortGenre.push(genreName, output[genreName]);
  }

  sortGenre.sort(function (a, b) {
    return b[1] - a[1];
  });

  let title_gend = sortGenre[0][0];

  if (title_gend == "Action") {
    notif = "Aku suka list rekomendasimu";
  } else if (title_gend == "Drama") {
    notif = "Aku tidak suka list rekomendasimu";
  } else if (title_gend == "Thriller") {
    notif = "Jangan rekomendasikan film kesukaanmu saja";
  } else if (title_gend == "Fantasy") {
    notif = "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku";
  } else {  
    notif = "Hmm, akan aku catat dulu";
  }

  setTimeout(() => {
    cbFunction(notif);
  }, 1000);
};
myFunction3(myCallback);
