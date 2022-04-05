const dummyData = require("./../fajriawan/dummyData");

const greatMovies = dummyData.greatMovies

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function myFunction(num){
    let filmTahunItu=0, filmTahunSebelumnya=0, filmTahunSetelahnya=0;
    const movies = [...greatMovies]
    movies.forEach((v)=>{
        (v.year==num)?filmTahunItu++:
        (v.year==num-1)?filmTahunSebelumnya++:
        (v.year==num+1)?filmTahunSetelahnya++:
        false
    })
    return {"film_tahun_itu": filmTahunItu, 
            "film_tahun_sebelumnya": filmTahunSebelumnya,
            "film_tahun_setelahnya": filmTahunSetelahnya}
}
console.log(myFunction(2001))
//2. buat function dengan 1 parameters contoh myFunction(director), mereturn film yang didirect oleh si director
// jika myFunction("Peter Jackson") hanya mereturn array film yang didirect oleh "Peter Jackson"
function myFunction1(director){
    const movies = [...greatMovies]
    return movies.filter((v)=> v.director ==director)
}
console.log(myFunction1("Peter Jackson"))
//3. buat function dengan 1 parameters contoh myFunction(myGenre), mereturn film yang include genre myGenre
// jika myFunction("Action") hanya mereturn array film yang salah satu genrenya adalah "Action"
function myFunction2(myGenre){
    const movies = [...greatMovies]
    return movies.filter((v)=> v.genre.find((a)=> a == myGenre))
}
console.log(myFunction2("Drama"))
//4. buat function dengan 1 parameters contoh myFunction(year), mereturn film yang dirilis pada tahun year dan tahun setelahnya
// kemudian, hanya tampilkan dalam bentuk array mapping baru, tiap elemennya adalah object, 
// object berisi 3 properties yang menyimpan nama film, rating, dan tahun
function myFunction3(year){
    const movies = [...greatMovies]
    return movies.filter((v)=> v.year == year || v.year == year+1).map((value)=> {return {
                                  "nama film": value.title, 
                                  "rating": value.score, 
                                  "tahun": value.year}})
}
console.log(myFunction3(2001))
//5. buat function dengan 1 parameters contoh myFunction(directorName), mereturn film-film yang didirect
// oleh director tersebut dalam bentuk array yang tiap-tiap elemennya hanya string nama film tersebut
//contoh: jika myFunction("Raditya Dika") akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
function myFunction4(directorName){
    const movies = [...greatMovies]
    return movies.filter((v)=> v.director == directorName).map((value)=> value.title)
}
console.log(myFunction4("Peter Jackson"))

// intermediate++ Scripting
//1. buat function tanpa parameters contoh myFunction(), dimana mereturn jumlah film berdasarkan genre
// return dalam bentuk object contoh sbb {Action: 3, Drama: 2, Crime: 1, Thriller: 4}
//notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
function myFunction5(){
    const movies = [...greatMovies]
    const arrGenres = []
    movies.forEach((v)=>{
        for (x in v.genre){
            if(arrGenres.filter((b, index)=> arrGenres[index] == v.genre[x]).length==0){
                arrGenres.push(v.genre[x])
            }
        }
    })
    let objGenres = {}
    for(x in arrGenres){
        let newObj = {}
        genre = arrGenres[x]
        jumlahFilm = movies.filter((v)=> v.genre.find((a)=> a == genre)).length
        newObj[genre] = jumlahFilm
        objGenres = Object.assign(objGenres, newObj)
    }
    return objGenres
}
console.log(myFunction5())
//result
// {
//   Crime: 14,
//   Drama: 35,
//   Action: 8,
//   Thriller: 10,
//   Biography: 3,
//   History: 1,
//   Adventure: 13,
//   Fantasy: 8,
//   Western: 2,
//   Comedy: 6,
//   Romance: 4,
//   'Sci-Fi': 8,
//   Mystery: 7,
//   Family: 4,
//   War: 4,
//   Animation: 2,
//   Horror: 1,
//   Music: 2,
//   Musical: 1
// }
