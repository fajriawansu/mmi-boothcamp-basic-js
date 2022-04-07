const mahasiswa = require("./../fajriawan/dummyData").mahasiswa;

  // soalnya ini:
  // buat function contoh myFunc(mahasiswaId); yang mereturn string
  // contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  
  function myFunc(mhsId){
    const stringMahasiswa = {
        fullData: function () {
        return this.name +" Memiliki "+this.dosbing_id.length+ " dosbing dan sedang mengambil "+this.matkul_id.length+" matkul";
        },
    };
    const myObject = mahasiswa.find((v)=> v.id == mhsId)
    const myOutput = stringMahasiswa.fullData.call(myObject)
    return myOutput
  }
  console.log(myFunc(91))
  