// callback function
const greatMovies = require("./../fajriawan/dummyData").greatMovies;

//notes: sebenernya, bebas. yang penting output returnnya ditulis di dalam callback function

//1. buat function dengan 2 parameters contoh myFunction(directorName, cbFunction), 
// buat callback function contoh myCallback(cbData) akan mereturn film-film yang didirect oleh 
// directorName pada function myFunction(directorName, cbFunction)
//contoh: jika myFunction("Raditya Dika", myCallback), myCallback() akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]
const printDirector = (cbData) =>{
    console.log(cbData);
}

const directorFilter = (directorName,nextFunction) => {
    let movieDirect = greatMovies.filter((value, index) => {
        return value.director === directorName;
    });
    const nameMovieDirect = movieDirect.map((value, index) => {
        return value.title;
    });
    nextFunction(nameMovieDirect);
}

directorFilter("Charles Chaplin", printDirector);

//2. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function contoh myCallback(cbData) dimana mereturn string film genre terbanyak
// cbData adalah arguments berupa object, contoh: {Action: 3, Drama: 2, Crime: 1, Thriller: 4} 
// notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada
const printGenre = (cbData) =>{
    console.log(cbData);
}
const genreCount = (nextFunction) =>{
    let output = {};

    [...greatMovies].forEach((v)=>{
        v.genre.forEach((genreName)=>{
            if(output.hasOwnProperty(genreName)){
                output[genreName] ++
            } else {
                output[genreName] = 1
            }
        })
    })
    nextFunction(output);
}
genreCount(printGenre);

//3. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function dengan 1 parameters contoh myCallback(name) dimana mereturn jumlah film berdasarkan genre
// myCallback akan memiliki return dalam bentuk string dengan kondisi:
// jika yang terbanyak adalah film action akan mereturn string "Aku suka list rekomendasimmu"
// jika yang terbanyak adalah film drama akan mereturn string "Aku tidak suka list rekomendasimu"
// jika yang terbanyak adalah film thriller akan mereturn string "Jangan rekomendasikan film kesukaanmu saja"
// jika yang terbanyak adalah film fantasy akan mereturn string "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku"
// jika yang terbanyak adalah selain 4 genre di atas akan mereturn "Hmm, akan aku catat dulu"
const genreRecom = (cbData) =>{
    console.log(cbData);
}

const mostGenre = (nextFunction) =>{
    let output = {};

    [...greatMovies].forEach((v)=>{
        v.genre.forEach((genreName)=>{
            if(output.hasOwnProperty(genreName)){
                output[genreName] ++
            } else {
                output[genreName] = 1
            }
        })
    })
    let sortGenre = [];
    for(let genreName in output){
        sortGenre.push([genreName, output[genreName]]);
    }
    
    sortGenre.sort(function(a,b){
        return b[1]-a[1];
    });

    let dataKirim ="";
    if(sortGenre[0][0]== "Action"){
        dataKirim = "Aku Suka List Rekomendasimu";
    }
    else if(sortGenre[0][0]== "Drama"){
        dataKirim = "Aku Tidak Suka List Rekomendasimu";
    }
    else if(sortGenre[0][0]== "Thriller"){
        dataKirim = "Jangan Rekomendasikan Film Kesukaanmu saja";
    }
    else if(sortGenre[0][0]== "Fantasy"){
        dataKirim = "Apakah filmnya bagus?";
    }
    else{
        dataKirim = "Biar kucatat dahulu";
    }
    nextFunction(dataKirim);
}
mostGenre(genreRecom);