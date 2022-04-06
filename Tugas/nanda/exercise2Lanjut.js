const dummyData = require("./../fajriawan/dummyData");

const greatMovies = dummyData.greatMovies

// notes: jika ingin mengcopy object gunakan spread method
const myObj = { ... greatMovies}
console.log(myObj);

// 1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function filterByYears(theYears){
    const myObj = [...greatMovies]
    let output = [];
    myObj.forEach((v) => {
        let tempYears = v.year;
        if(tempYears==theYears){
            output.push("Film tahun ini")
            output.push(v);
        }else if(tempYears>theYears){
            output.push("Film setelahnya")
            output.push(v);
        }else if (tempYears<theYears){
            output.push("Film sebelumnya")
            output.push(v);
        }
    })
    return output;
}

console.log(filterByYears(2008));

//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"
function filterByDirector(theDirector){
    const myObj = [...greatMovies]
    let output = [];
    myObj.forEach((v) => {
        let tempDirector = v.director;
        if(tempDirector.includes(theDirector)){
            output.push(v);
        }
    })
    return output;
}

console.log(filterByDirector("Peter Jackson"));


//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"
function filterByGenre(theGenre){
    const myObj = [...greatMovies]
    let output = [];
    myObj.forEach((v) => {
        let tempGenre = v.genre;
        if(tempGenre.includes(theGenre)){
            output.push(v);
        }
    })
    return output;
}

console.log(filterByGenre("Action"));


//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object, 
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun
function newMapping(theYear){
    const myArray = [ ...greatMovies ];

    let output = [];

    myArray.forEach((v) => {
        if( v.year == theYear || v.year > theYear ){
            output.push({
                nama_film: v.title,
                year: v.year,
                rating: v.score
            })
        }
    })

    return console.log(output)
}

newMapping(2010)

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
function myFunction6 (DirectorName){
    const myObj = [...greatMovies]
    let output = [];
    myObj.forEach((v) => {
        let tempDirector = v.director;
        if(tempDirector.includes(DirectorName)){
            output.push(v);
        }
    })
    let namaFilm = []
    for(i=0;i<output.length;i++){
        namaFilm.push(output[i].title);
    }
    return namaFilm;
}
console.log(myFunction6("Francis Ford Coppola"));

// intermediate++ Scripting
//1. buat function tanpa parameters contoh myFunction(), dimana mereturn jumlah film berdasarkan genre
// return dalam bentuk object contoh sbb {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
//notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
