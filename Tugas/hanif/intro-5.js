const myCallback = (string) => {
    return console.log(string)
}

const myFunction = (cbFunction) => {
    let data = "AAA"
    setTimeout(() => {
        data = "Success!"
        cbFunction(data)
    }, 1000)

    //return console.log(data)
}

myFunction(myCallback)