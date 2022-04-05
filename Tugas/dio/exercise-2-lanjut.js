const dummyData = require("./../fajriawan/dummyData");

const greatMovies = dummyData.greatMovies

// notes: jika ingin mengcopy object gunakan spread method
// contoh: let myObj = { ... greatMovies}

//1. buat function dengan 1 parameters contoh myFunction(num1), dimana num1 adalah tahun
// jika myFunction(2001) akan mereturn object sbb: {film_tahun_itu: 1, film_tahun_sebelumnya: 10, film_tahun_setelahnya: 3}
function myFunction(num){
    let filmTahunItu=0, filmTahunSebelumnya=0, filmTahunSetelahnya=0;
    const movies = [...greatMovies]
    for(x in movies){
        if(movies[x].year==num){
            filmTahunItu++
        }
        else if(movies[x].year==num-1){
            filmTahunSebelumnya++
        }
        else if (movies[x].year==num+1){
            filmTahunSetelahnya++
        }
    }
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