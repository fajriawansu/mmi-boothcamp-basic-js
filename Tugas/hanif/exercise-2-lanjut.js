const dummyData = require("./../fajriawan/dummyData");

const film = dummyData.greatMovies;

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function filterTahun(num1) {
    a = []
    const indexFilmDariTahunIni = film.find(val => val.year === num1)
    const indexFilmDariTahunDepan = film.find(val => val.year === num1 + 1)
    const indexFilmDariTahunLalu = film.find(val => val.year === num1 - 1)
    return a = {
        film_tahun_itu: indexFilmDariTahunIni.length,
        film_tahun_sebelumnya: indexFilmDariTahunLalu.length,
        film_tahun_setelahnya: indexFilmDariTahunDepan.length
    }
}
console.log(filterTahun(2001))
// const b = film.find(val => val.year === 2001)
// console.log(b)

// const d = {satu: 1, dua: 2}
// const c = d.length
// console.log(c)

//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"

//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"

//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object,
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
