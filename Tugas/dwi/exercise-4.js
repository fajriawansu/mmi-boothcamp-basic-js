const mahasiswaA = require("./../fajriawan/dummyData").mahasiswa;


// function call
const stringMahasiswa = {
    fullData: function () {
        
      //jumlah parameters bebas, boleh kosong
    return this.name + " memiliki " + this.dosbing_id.length + " dosbing dan sedang mengambil " + this.matkul_id.length + " matkul"; 
      // //jumlah "this" bebas, tidak boleh kosong
    },
  };
  
  let myObject = {
      // jumlah properties beserta valuenya bebas
      // ini dinamis
  }
  myFunc(91)
  const myOutput = stringMahasiswa.fullData.call(myObject) // boleh tambah arguments selain "myObject", boleh tidak
  // contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  
  // soalnya ini:
  // buat function contoh myFunc(mahasiswaId); yang mereturn string
  // contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  
  function myFunc(mhsId){
      // codelbalbalba
    let mahasiswa = [...mahasiswaA];
    let output = {};
    
    for (let i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].id == mhsId) {
            myObject = mahasiswa[i];
        }
        
    }

    

      return myObject;
  }
  
  // dalam pengerjaannya wajib melibatkan variabel myOutput, dan stringMahasiswa
  
  console.log(myOutput)

  