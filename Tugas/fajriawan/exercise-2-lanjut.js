const dummyData = require("./dummyData");

const greatMovies = dummyData.greatMovies

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function jumlahFilm(theYear){
    const myArray = [...greatMovies];
    let output = {
        film_tahun_itu: 0,
        film_tahun_sebelumnya: 0,
        film_tahun_setelahnya: 0
    }

    myArray.forEach((v, idx) => {
        v.year == theYear ? output.film_tahun_itu ++ :
        v.year < theYear ? output.film_tahun_sebelumnya ++ :
        output.film_tahun_setelahnya ++
    })

    return console.log(output)

}

// jumlahFilm(2010)
// console.log(jumlahFilm(2000))

//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"

function filterByDirector(dirName){
    const myArray = [ ...greatMovies ];
    let output = [];

    myArray.forEach((v) => {
        if(v.director === dirName){
            output.push(v)
        }
    })

    return console.log(output)
}

filterByDirector("Christopher Nolan");

//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"

function filterByGenre(theGenre){
    const myArray = [... greatMovies];
    let output = [];

    myArray.forEach((v) => {

        let tempGenreList = v.genre;
        // console.log(tempGenreList)
        if(tempGenreList.includes(theGenre)){
            output.push(v);
        }
    })

    return output
}

// console.log(filterByGenre("Crime"))

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

// newMapping(2010)

//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]

// intermediate++ Scripting
//1. buat function tanpa parameters contoh myFunction(), dimana mereturn jumlah film berdasarkan genre
// return dalam bentuk object contoh sbb {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
//notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada