const dummyData = require("./../fajriawan/dummyData");
const film = dummyData.greatMovies;

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
const sortByYear = (num1) => {
  const myArray = [...film];
  let film_tahun_itu = 0;
  let film_tahun_sebelumnya = 0;
  let film_tahun_setelahnya = 0;

  myArray.forEach((val) => {
    let tempYear = val.year;
    if (tempYear == num1) {
      film_tahun_itu += 1;
    } else if (tempYear < num1) {
      film_tahun_sebelumnya += 1;
    } else {
      film_tahun_setelahnya += 1;
    }
  });
  let output = {
    film_tahun_itu: film_tahun_itu,
    film_tahun_sebelumnya: film_tahun_sebelumnya,
    film_tahun_setelahnya: film_tahun_setelahnya,
  };
  return output;
};
console.log(sortByYear(2000));

//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"
const sortByDir = (director) => {
  const myArray = [...film];
  let output = [];

  myArray.forEach((val) => {
    let tempDir = val.director;
    if (tempDir == director) {
      output.push(val.title);
    }
  });
  return output;
};
console.log(sortByDir("Peter Jackson"));

//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"
const sortByGenre = (myGenre) => {
  const myArray = [...film];
  let output = [];

  myArray.forEach((val) => {
    let tempGenre = val.genre;
    if (tempGenre.includes(myGenre)) {
      output.push(val.title);
    }
  });
  return output;
};
console.log(sortByGenre("Action"));

//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object,
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun
const sortByYear2 = (year) => {
  const myArray = [...film];
  let output = [];

  myArray.forEach((val) => {
    let tempYear = val.year;
    if (tempYear == year) {
      output.push({
        title: val.title,
        rating: val.score,
        year: val.year,
      });
    } else if (tempYear > year) {
      output.push({
        title: val.title,
        rating: val.score,
        year: val.year,
      });
    }
  });
  return output;
};
console.log(sortByYear2(2000));

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
const sortByDir2 = (directorName) => {
  const myArray = [...film];
  let output = [];

  myArray.forEach((val) => {
    let tempDir = val.director;
    if (tempDir == directorName) {
      output.push(val.title);
    }
  });
  return output;
};
console.log(sortByDir2("Christopher Nolan"));

// intermediate++ Scripting
//1. buat function tanpa parameters contoh myFunction(), dimana mereturn jumlah film berdasarkan genre
// return dalam bentuk object contoh sbb {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
//notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada

function countByGenre() {
  let output = {};

  [...film].forEach((val) => {
    val.genre.forEach((genreName) => {
      if (output.hasOwnProperty(genreName)) {
        output[genreName]++;
      } else {
        output[genreName] = 1;
      }
    });
  });
  return output;
}
console.log(countByGenre());
