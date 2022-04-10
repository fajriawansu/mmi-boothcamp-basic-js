// callback function
const greatMovies = require("./../fajriawan/dummyData").greatMovies;
//notes: sebenernya, bebas. yang penting output returnnya ditulis di dalam callback function

//1. buat function dengan 2 parameters contoh myFunction(directorName, cbFunction), 
// buat callback function contoh myCallback(cbData) akan mereturn film-film yang didirect oleh 
// directorName pada function myFunction(directorName, cbFunction)
//contoh: jika myFunction("Raditya Dika", myCallback), myCallback() akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
function myCallback(cbData){
    return cbData.map((v)=> v.title)
}

function myFunc(directorName, cbFunction){
    const moviesDir = [...greatMovies].filter((v)=> v.director == directorName)
    return cbFunction(moviesDir)
}
//console.log(myFunc("Peter Jackson", myCallback))

//2. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function contoh myCallback(cbData) dimana mereturn string film genre terbanyak
// cbData adalah arguments berupa object, contoh: {Action: 3, Drama: 2, Crime: 1, Thriller: 4} 
// notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
function myCallback1(cbData){
    let genre = ""
    let moviesSum = 0
    for(x in cbData){
        if(moviesSum<cbData[x]){
            moviesSum = cbData[x]
            genre = x
        }
    }
    return "Film Genre Terbanyak : "+ genre +" : "+moviesSum+" Film"
}
function myFunc1(cbFunction){
    let output = {};
    [...greatMovies].forEach((val) => {
        val.genre.forEach((genreName) => {
            if(output.hasOwnProperty(genreName)){
                output[genreName] ++
            } else {
                output[genreName] = 1
            }
        })
    })
    return cbFunction(output)
}
//console.log(myFunc1(myCallback1))

//3. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function dengan 1 parameters contoh myCallback(name) dimana mereturn jumlah film berdasarkan genre
// myCallback akan memiliki return dalam bentuk string dengan kondisi:
// jika yang terbanyak adalah film action akan mereturn string "Aku suka list rekomendasimmu"
// jika yang terbanyak adalah film drama akan mereturn string "Aku tidak suka list rekomendasimu"
// jika yang terbanyak adalah film thriller akan mereturn string "Jangan rekomendasikan film kesukaanmu saja"
// jika yang terbanyak adalah film fantasy akan mereturn string "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku"
// jika yang terbanyak adalah selain 4 genre di atas akan mereturn "Hmm, akan aku catat dulu"
function myCallback2(name){
    let genre = ""
    let moviesSum = 0
    for(x in name){
        if(moviesSum<name[x]){
            moviesSum = name[x]
            genre = x
        }
    }
    return genre == "Action"?"Aku suka list rekomendasimu":
           genre == "Drama"?"Aku tidak suka list rekomendasimu":
           genre == "Thriller"?"Jangan rekomendasikan film kesukaanmu saja":
           genre == "Fantasy"? "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku":"Hmm, akan aku catat dulu"

}
console.log(myFunc1(myCallback2))