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

// filterByDirector("Frank Darabont", (a,b) => cbFilterDirector(a,b, "tahun_doang"));

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

function countByGenre(cbFunction){
    // object dengan properties tiap-tiap nama genre, value nya adalah banyaknya genre
    let allGenre = {};
    // {
    //     Crime: 14,
    //     Drama: 35,
    //     Action: 8,
    //     Thriller: 10,
    //     Biography: 3,
    //     History: 1,
    //     Adventure: 13,
    //     Fantasy: 8,
    //     Western: 2,
    //     Comedy: 6,
    //     Romance: 4,
    //     'Sci-Fi': 8,
    //     Mystery: 7,
    //     Family: 4,
    //     War: 4,
    //     Animation: 2,
    //     Horror: 1,
    //     Music: 2,
    //     Musical: 1
    //   }

    [...dummyData.greatMovies].forEach((val) => {
        val.genre.forEach((genreName) => {
            if(allGenre.hasOwnProperty(genreName)){
                allGenre[genreName] ++
            } else {
                allGenre[genreName] = 1
            }
        })
    })

    // cari properties yg valuenya paling banyak
    let terbanyak = { nama: "", jumlah: 0 }

    for(let x in allGenre){
        if(allGenre[x] > terbanyak.jumlah){
            terbanyak = { nama: x, jumlah: allGenre[x] }
        }
    }

    cbGenre(terbanyak.nama)
}

const cbGenre = (str) => {
    let strOut = "";
    if(str == 'Drama'){
        strOut = "Aku tidak suka list rekomendasimu"
    }
    return console.log(strOut)
}

countByGenre(cbGenre)