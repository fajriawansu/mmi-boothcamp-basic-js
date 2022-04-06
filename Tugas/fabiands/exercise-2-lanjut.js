const dummyData = require("./../fajriawan/dummyData");

const greatMovies = dummyData.greatMovies;

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function tahunMovie(tahunBanding) {
  let movieBefore = greatMovies.filter((value, index) => {
    return value.year < tahunBanding;
  });
  let movieNow = greatMovies.filter((value, index) => {
    return value.year == tahunBanding;
  });
  let movieAfter = greatMovies.filter((value, index) => {
    return value.year > tahunBanding;
  });
  return {
    film_tahun_itu: movieNow.length,
    film_tahun_sebelumnya: movieBefore.length,
    film_tahun_setelahnya: movieAfter.length,
  };
}
console.log("---1---");
console.log(tahunMovie(2001));

//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"
function movieDirector(directorName) {
  let movieDirect = greatMovies.filter((value, index) => {
    return value.director === directorName;
  });
  return movieDirect;
}
console.log("---2---");
console.log(movieDirector("Peter Jackson"));

//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"
function movieGenre(genreName) {
  let movieGenre = greatMovies.filter((value, index) => {
    for (let i = 0; i < value.genre.length; i++) {
      return value.genre[i] === genreName;
    }
  });
  return movieGenre;
}
console.log("---3---");
console.log(movieGenre("Action"));

//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object,
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun
function movieRilis(tahunRilis) {
  let movieRilis = greatMovies.filter((value, index) => {
    return value.year > tahunRilis - 1;
  });
  const movieRilisName = movieRilis.map((value, index) => {
    return {
      Title: value.title,
      Rating: value.score,
      Year: value.year,
    };
  });
  return movieRilisName;
}
console.log("---4---");
console.log(movieRilis(2001));

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
function movieDirectorString(directorName) {
  let movieDirect = greatMovies.filter((value, index) => {
    return value.director === directorName;
  });
  const nameMovieDirect = movieDirect.map((value, index) => {
    return value.title;
  });
  return nameMovieDirect;
}
console.log("---5---");
console.log(movieDirectorString("Charles Chaplin"));

// intermediate++ Scripting
//1. buat function tanpa parameters contoh myFunction(), dimana mereturn jumlah film berdasarkan genre
// return dalam bentuk object contoh sbb {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
//notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
function jumlahGenre() {
  const movies = [...greatMovies];
  const genreArray = [];
  movies.forEach((value) => {
    for (x in value.genre) {
      if (genreArray.filter((b, index) => genreArray[index] == value.genre[x]).length == 0){
        genreArray.push(value.genre[x]);
      }
    }
  });
  let objGenres = {};
  for (x in genreArray) {
    let newObj = {};
    genre = genreArray[x];
    jumlahFilm = movies.filter((value) =>value.genre.find((a) => a == genre)).length;
    newObj[genre] = jumlahFilm;
    objGenres = Object.assign(objGenres, newObj);
  }
  return objGenres;
}
console.log("---6---");
console.log(jumlahGenre());
