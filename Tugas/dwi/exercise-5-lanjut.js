
const Service = require("../../req-data-simulation");

// exercise async-await
// data di bawah ini harus diambil melalui simulasi request data dari file req-data-simulation

//1. buat async function yang memiliki callback, contoh myFunction(cbFunction);
// mengirim data ke callback
// callback harus mereturn/meng-console data output berupa array berisi nama saja

const requestMovies = async (cbResp) => {
    const respData = await Service.getMovies();
    cbResp(respData);
}

const cbReqMovies = (data) => {
    let output = [...data].map(v => v.title);
    console.log(output)
}

// requestMovies(cbReqMovies); // akan mereturn ['The Shawshank Redemption', 'The Godfather', ...]

// di bawah ini gunakan dummy service getItems
//////////////////////////////////////////////

//2. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, nama-nama item yg dibeli saja
const requestItems = async (cbResp) => {
    const respData = await Service.getItems();
    cbResp(respData);
}

const cbReqItems = (data) => {
    let output = [...data].map(v => v.name);
    console.log(output)
}

// requestItems(cbReqItems); // akan mereturn ['The Shawshank Redemption', 'The Godfather', ...]


//3. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa number, yaitu subtotal harga pembelian (price*qty)

const requestItemsTwo = async (cbResp) => {
    const respData = await Service.getItems();
    cbResp(respData);
}

const cbReqItemsTwo = (data) => {
    let qty = [...data].map(v => v.qty);
    let price = [...data].map(v => v.price);
    let totalHarga = 0;

    if (qty.length == price.length) {
        
        for (let i = 0; i < qty.length; i++) {
            totalHarga = totalHarga + (qty[i]*price[i])
        }

    }


    console.log(totalHarga)
}

// requestItemsTwo(cbReqItemsTwo); // akan mereturn ['The Shawshank Redemption', 'The Godfather', ...]



//4. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, tiap element adalah object 2 properties
// yaitu "nama_item" dan "penjual"
// contoh: [{nama_item: "Jaket", penjual: "PT AAA"}, {nama_item: "Baju", penjual: "PT BBB"}, ...]


const requestItemsFour = async (cbResp) => {
    const respData = await Service.getItems();
    cbResp(respData)
}

const myCbMappingItem = (data) => {
    const outData = [...data].map((v) => {
        return {
            nama_item: v.name,
            penjual: v.type === "BARANG" ? v.barang.seller : v.jasa.seller
        }
    })
    console.log(outData)
}

// requestItemsFour(myCbMappingItem)


//5. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, tiap element adalah object 2 properties
// yaitu "nama_item" dan "total_item", "total_item" merupakan string qty + unit_name
// contoh: [{nama_item: "Jaket", total_item: "4 Piece"}, {nama_item: "Minyak", total_item: "1 Liter"}, ...]

const requestItemsFive = async (cbResp) => {
    const respData = await Service.getItems();
    cbResp(respData)
}

const myCbMappingFive = (data) => {

    let output = [...data].map((v) => {return{nama_item : v.name,
                                total_item : v.qty + " " + (v.type === "BARANG" ? v.barang.unit_name : v.jasa.unit_name)
                            }    
                            });
    console.log(output)
}

requestItemsFive(myCbMappingFive)
