const film = require("./../fajriawan/dummyData").greatMovies;
// callback function

//notes: sebenernya, bebas. yang penting output returnnya ditulis di dalam callback function

//1. buat function dengan 2 parameters contoh myFunction(directorName, cbFunction), 
// buat callback function contoh myCallback(cbData) akan mereturn film-film yang didirect oleh 
// directorName pada function myFunction(directorName, cbFunction)
//contoh: jika myFunction("Raditya Dika", myCallback), myCallback() akan memiliki return ["Hangout", "Kambing Jantan", "The Boys"]

// callback

const myCallback = (cbData) => {
    return console.log(cbData)
}

const myFunction = (directorName,cbFunction) => {
    let output = [];
   
    setTimeout(() => {
        for (let i = 0; i < film.length; i++) {
            if (film[i].director.toLowerCase() == directorName.toLowerCase()) {
                output.push(film[i].title)
            }
        }
        cbFunction(output)
    }, 1000)

    
}

// myFunction("Frank Darabont",myCallback)




//2. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function contoh myCallback(cbData) dimana mereturn string film genre terbanyak
// cbData adalah arguments berupa object, contoh: {Action: 3, Drama: 2, Crime: 1, Thriller: 4} 
// notes: banyaknya properties object bergantung pada banyaknya jenis genre yang ada

// callback

const myCallbackTwo = (cbData) => {
    // return console.log(cbData)
}

const myFunctionTwo = (cbFunction) => {
    let sementara= [];
    let last = [];
    let hitungan = [];
    let output = {};  
    let indexNew = -1;
   
    setTimeout(() => {
        for (let i = 0; i < film.sort().length; i++) {
            for (let j = 0; j < film[i].genre.length; j++) { 
                sementara.push(film.sort()[i].genre[j]);
            }   
        }
    
        for(let i = 0; i < sementara.sort().length; i++){
            if(!last.includes(sementara.sort()[i])){
                last.push(sementara.sort()[i]);
                hitungan.push(1);  
                indexNew = indexNew + 1;       
            }else{         
                hitungan[indexNew] = hitungan[indexNew] + 1;     
                
            }
            output[last[indexNew]] = hitungan[indexNew];   
        }
        cbFunction(output)
    }, 1000)

    
}

// myFunctionTwo(myCallbackTwo)


//3. buat function 1 parameters sebagai callback contoh myFunction(cbFunction), 
//  buat callback function dengan 1 parameters contoh myCallback(name) dimana mereturn jumlah film berdasarkan genre
// myCallback akan memiliki return dalam bentuk string dengan kondisi:
// jika yang terbanyak adalah film action akan mereturn string "Aku suka list rekomendasimmu"
// jika yang terbanyak adalah film drama akan mereturn string "Aku tidak suka list rekomendasimu"
// jika yang terbanyak adalah film thriller akan mereturn string "Jangan rekomendasikan film kesukaanmu saja"
// jika yang terbanyak adalah film fantasy akan mereturn string "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku"
// jika yang terbanyak adalah selain 4 genre di atas akan mereturn "Hmm, akan aku catat dulu"



// callback

const myCallbackThree = (name) => {
    return console.log(name)
}

const myFunctionThree = (cbFunction) => {
    let name;
    let genreFilm = {};
    let sementara= [];
    let last = [];
    let hitungan = [];
     
    let indexNew = -1;
    setTimeout(() => {
        for (let i = 0; i < film.sort().length; i++) {
            for (let j = 0; j < film[i].genre.length; j++) { 
                sementara.push(film.sort()[i].genre[j]);
            }   
        }
    
        for(let i = 0; i < sementara.sort().length; i++){
            if(!last.includes(sementara.sort()[i])){
                last.push(sementara.sort()[i]);
                hitungan.push(1);  
                indexNew = indexNew + 1;       
            }else{         
                hitungan[indexNew] = hitungan[indexNew] + 1;     
                
            }
            genreFilm[last[indexNew]] = hitungan[indexNew];   
        }


        let sortable = [];
            for (var genre in genreFilm) {
                sortable.push([genre, genreFilm[genre]]);
            }

            sortable.sort(function(a, b) {
            return a[1] - b[1];
            });
        
        let genreTerbanyak = sortable[sortable.length-1];

        if (genreTerbanyak[0] == "Action") {
            name = "Aku suka list rekomendasimmu";
        }else if(genreTerbanyak[0] == "Drama"){
            name = "Aku tidak suka list rekomendasimu";
        }else if(genreTerbanyak[0] == "Thriller"){
            name = "Jangan rekomendasikan film kesukaanmu saja";
        }else if(genreTerbanyak[0] == "Fantasy"){
            name = "Apakah filmnya bagus? kadang fantasy tidak masuk akal buatku";
        }else{
            name = "Hmm, akan aku catat dulu";
        }

       
        cbFunction(name)
    }, 1000)

    // return console.log(data)
}

myFunctionThree(myCallbackThree)

