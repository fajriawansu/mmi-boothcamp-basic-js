// callback

const Service = require("../../../req-data-simulation");

const myCallback = (string) => {
    return console.log(string)
}

const myFunction = (cbFunction) => {
    let data = "AAA";
    setTimeout(() => {
        data = "Success!"
        cbFunction(data)
    }, 1000)

    // return console.log(data)
}

// myFunction(myCallback)

const myPromiseCb = (str) => {
    console.log(str)
}

const myCbSuccess = () => {
    console.log('SUKSES!')
}

const myCbError = () => {
    console.log('ERROR!')
}

// js promise
function testPromise(passedInNum, cbSukses, cbError){
    let myPromise = new Promise((resolve, reject) => {
        // producing code
        let isEven = passedInNum;
    
        // callback
        if(isEven % 2 == 0){
            resolve();
        } else {
            resolve();
        }
    });
    
    myPromise.then(
        function(){
            cbSukses('sukses')
        },
        function(){
            cbError('error')
        }
    )
}

// testPromise(3, myCbSuccess, myCbError)

// js async await
async function testPromiseAsync(passedInNum){
    let myPromise = new Promise((resolve, reject) => {
        // producing code
        let isEven = passedInNum;
    
        // callback
        if(isEven % 2 == 0){
            resolve("betul");
        } else {
            resolve("salah");
        }
    });
    
    return console.log(await myPromise);
}

// testPromiseAsync(2)

// coba simulasi get movies

const getMyMovies = async (cbFunction) => {
    const resp = await Service.getMovies();
    cbFunction(resp)
}

getMyMovies((data) => console.log(data));
