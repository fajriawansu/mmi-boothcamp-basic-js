const dummyData = require("./../fajriawan/dummyData");

const greatMovies = dummyData.greatMovies

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}


function cariFilm(num1){
let temp = [...greatMovies]
let tahunIni = 0;
let tahunSebelum = 0;
let tahunSesudah = 0;

for (let i = 0; i < temp.length; i++) {
    if(temp[i].year == num1){
        tahunIni = tahunIni + 1;
    }else if(temp[i].year < num1){
        tahunSebelum = tahunSebelum + 1;
    }else if(temp[i].year > num1){
        tahunSesudah = tahunSesudah + 1;
    }
    
}
let objek = {film_tahun_itu : tahunIni,
    film_tahun_sebelumnya : tahunSebelum,
    film_tahun_setelahnya : tahunSesudah
    }
return objek;
}

console.log(cariFilm(2001));



//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"

function cariDirector(director){
    let direktor = greatMovies.find((v) => v.director == director);
    return direktor;
}

console.log(cariDirector("Peter Jackson"));




//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"


function cariGenre(myGenre){
    let tempArr = [...greatMovies]
    let kumpulanFilm = [];
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr[i].genre.length; j++) {
            if(tempArr[i].genre[j] == myGenre){
                kumpulanFilm.push(tempArr[i]);
            }
        }
    }
    return kumpulanFilm;
}

console.log(cariGenre("Action"))

//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object, 
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun


function soal4(year){
    let tempArr = [...greatMovies];
    let arrBaru = [];
    let nama;
    let rating;
    let tahun;

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].year == year) {
            nama = tempArr[i].title;
            rating = tempArr[i].score;
            tahun = tempArr[i].year;
            arrBaru.push({nama,rating,tahun});
        }else if(tempArr[i].year > year){
            nama = tempArr[i].title;
            rating = tempArr[i].score;
            tahun = tempArr[i].year;
            arrBaru.push({nama,rating,tahun});
        }
        
    }

return arrBaru;
}


console.log(soal4(2001))

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]

function soal5(directorName){
    let tempArr = [...greatMovies]
    let kumpulFilm = [];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].director == directorName) {
            kumpulFilm.push(tempArr[i].title);
        }
    }

return kumpulFilm;
}

console.log(soal5("James Cameron"))