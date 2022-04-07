// function call
const stringMahasiswa = {
  fullData: function () {
    //jumlah parameters bebas, boleh kosong
    return; // //jumlah "this" bebas, tidak boleh kosong
  },
};

const myObject = {
    // jumlah properties beserta valuenya bebas
    // ini dinamis
}

const myOutput = stringMahasiswa.fullData.call(myObject) // boleh tambah arguments selain "myObject", boleh tidak
// contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"

// soalnya ini:
// buat function contoh myFunc(mahasiswaId); yang mereturn string
// contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"

function myFunc(mhsId){
    // codelbalbalba
    return 
}

// dalam pengerjaannya wajib melibatkan variabel myOutput, dan stringMahasiswa
