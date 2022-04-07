const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;

// function call
const stringMahasiswa = {
  fullData: function () {
    //jumlah parameters bebas, boleh kosong
    // contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
    return this.nama + " memiliki " + this.jumDosbing + " dan sedang mengambil " + this.jumMatkul + " matkul"; // //jumlah "this" bebas, tidak boleh kosong
  },
};

const myObject = {
  // jumlah properties beserta valuenya bebas
  // ini dinamis
  nama : "",
  jumDosbing : [].length,
  jumMatkul : [].length
};
myFunc(91)


const myOutput = stringMahasiswa.fullData.call(myObject); // boleh tambah arguments selain "myObject", boleh tidak
// contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
console.log(stringMahasiswa.fullData())
// soalnya ini:
// buat function contoh myFunc(mahasiswaId); yang mereturn string


function myFunc(mhsId) {
    const myArray = [...mahasiswa]

    myArray.forEach((val, index)=> {
        if (val.name == mhsId) {
            nama = val.name
            jumDosbing = val.dosbing_id
            jumMatkul = val.matkul_id
        }
    })
    return myObject
}

// dalam pengerjaannya wajib melibatkan variabel myOutput, dan stringMahasiswa
console.log(myFunc(91))