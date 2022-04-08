
const Service = require("../../../req-data-simulation");

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

requestMovies(cbReqMovies); // akan mereturn ['The Shawshank Redemption', 'The Godfather', ...]

// di bawah ini gunakan dummy service getItems
//////////////////////////////////////////////

//2. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, nama-nama item yg dibeli saja

//3. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa number, yaitu subtotal harga pembelian (price*qty)

//4. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, tiap element adalah object 2 properties
// yaitu "nama_item" dan "penjual"
// contoh: [{nama_item: "Jaket", penjual: "PT AAA"}, {nama_item: "Baju", penjual: "PT BBB"}, ...]

//5. buat async function yang memiliki callback, contoh myFunction(cbFunction),
// mengirim data ke callback
// callback harus mereturn output berupa array, tiap element adalah object 2 properties
// yaitu "nama_item" dan "total_item", "total_item" merupakan string qty + unit_name
// contoh: [{nama_item: "Jaket", total_item: "4 Piece"}, {nama_item: "Minyak", total_item: "1 Liter"}, ...]