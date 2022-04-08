// callback

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
          reject();
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

testPromise(3, myCbSuccess, myCbError)
