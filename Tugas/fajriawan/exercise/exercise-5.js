// callback function

const dummyData = require("../dummyData")

//notes: sebenernya, bebas. yang penting output returnnya ditulis di dalam callback function

//1. buat function dengan 2 parameters contoh myFunction(directorName, cbFunction), 
// buat callback function contoh myCallback(cbData) akan mereturn film-film yang didirect oleh 
// directorName pada function myFunction(directorName, cbFunction)
//contoh: jika myFunction("Raditya Dika", myCallback), myCallback() akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]

const filterByDirector = (dirName, cbFunc) => {
    cbFunc(dirName, [...dummyData.greatMovies]);
}

const cbFilterDirector = (dirName, data, ngapain) => {
    if(ngapain == 'nama_doang'){
        let output = [...data].filter(v => v.director === dirName).map(el => el.title);
        return console.log(output)
    } else if(ngapain == 'tahun_doang') {
        let output = [...data].filter(v => v.director === dirName).map(el => el.year);
        return console.log(output)
    }
}

filterByDirector("Frank Darabont", (a,b) => cbFilterDirector(a,b, "tahun_doang"));

//2. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function contoh myCallback(cbData) dimana mereturn string film genre terbanyak
// cbData adalah arguments berupa object, contoh: {Action: 3, Drama: 2, Crime: 1, Thriller: 4} 
// notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada

//3. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function dengan 1 parameters contoh myCallback(name) dimana mereturn jumlah film berdasarkan genre
// myCallback akan memiliki return dalam bentuk string dengan kondisi:
// jika yang terbanyak adalah film action akan mereturn string "Aku suka list rekomendasimmu"
// jika yang terbanyak adalah film drama akan mereturn string "Aku tidak suka list rekomendasimu"
// jika yang terbanyak adalah film thriller akan mereturn string "Jangan rekomendasikan film kesukaanmu saja"
// jika yang terbanyak adalah film fantasy akan mereturn string "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku"
// jika yang terbanyak adalah selain 4 genre di atas akan mereturn "Hmm, akan aku catat dulu"