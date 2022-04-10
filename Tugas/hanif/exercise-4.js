const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;

// function call
const stringMahasiswa = {
  nama: "",
  jumDosbing: 0,
  jumMatkul: 0,
  fullData: function () {
    //jumlah parameters bebas, boleh kosong
    // contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
    return (
      this.nama +
      " memiliki " +
      this.jumDosbing.length +
      " dosbing " +
      "dan sedang mengambil " +
      this.jumMatkul.length +
      " matkul"
    ); //jumlah "this" bebas, tidak boleh kosong
  },
};

const myObject = {
  // jumlah properties beserta valuenya bebas
  // ini dinamis
  nama: "",
  jumDosbing: [],
  jumMatkul: 0,
};
myFunc(91);

const myOutput = stringMahasiswa.fullData.call(myObject); // boleh tambah arguments selain "myObject", boleh tidak
// contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
console.log(myOutput);
// soalnya ini:
// buat function contoh myFunc(mahasiswaId); yang mereturn string

function myFunc(mhsId) {
  const myArray = [...mahasiswa];

  myArray.forEach((val, index) => {
    if (val.id == mhsId) {
      myObject.nama = val.name;
      myObject.jumDosbing = val.dosbing_id;
      myObject.jumMatkul = val.matkul_id;
    }
  });
  return;
}

// dalam pengerjaannya wajib melibatkan variabel myOutput, dan stringMahasiswa
