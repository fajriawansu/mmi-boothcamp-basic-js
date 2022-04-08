const myCallback = (String) => {
    return console.log(String)
}

const myFunction = (cbFunction) => {
    let data = "AAA";
    setTimeout(() => {
        data = "Success!"
        cbFunction(data)
    }, 1000)

}

myFunction(myCallback)