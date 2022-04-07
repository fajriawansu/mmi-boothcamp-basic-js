// function call
const mahasiswa = require("./dummyData").mahasiswa

const stringMahasiswa = {
  name: "",
    dosbing: [],
    totMatkul: 0,
  fullData: function () {
    //jumlah parameters bebas, boleh kosong
    return this.name + " memiliki " + this.dosbing.length + " dosbing "
    + " dan sedang mengambil " + this.totMatkul + " matkul "
    
    // //jumlah "this" bebas, tidak boleh kosong
    //"Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  },
};

const myObject = {
    name: "",
    dosbing: [],
    totMatkul: 0
    // jumlah properties beserta valuenya bebas
}

myFunc(93);

const myOutput = stringMahasiswa.fullData.call(myObject) // boleh tambah arguments selain "myObject", boleh tidak
// contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"

console.log(myOutput)
// soalnya ini:
// buat function contoh myFunc(mahasiswaId); yang mereturn string
// contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"

function myFunc(mhsId){
    // codelbalbalba
    [...mahasiswa].forEach((v) => {
      if(v.id == mhsId){
        myObject.name = v.name,
        myObject.dosbing = v.dosbing_id,
        myObject.totMatkul = v.matkul_id?.length
      }
    })
    return;
}

// dalam pengerjaannya wajib melibatkan variabel myOutput, myObject, dan stringMahasiswa
