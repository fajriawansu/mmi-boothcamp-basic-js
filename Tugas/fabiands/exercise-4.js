// function call
const arrayMahasiswa = require("./../fajriawan/dummyData").mahasiswa;
const stringMahasiswa = {
    fullData: function (dosen,matkul) {
      return this.name + " memiliki " + this.jmlhDosen + " dosbing dan sedang mengambil " + this.jmlhMatkul + " matkul."
    },
  };
  
  const myObject = {
      name: "",
      jmlhDosen: [],
      jmlhMatkul: 0
  }
  myFunc(91)
  
  const myOutput = stringMahasiswa.fullData.call(myObject) // boleh tambah arguments selain "myObject", boleh tidak
  // contoh akan mereturn string "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  
  console.log(myOutput);
  // soalnya ini:
  // buat function contoh myFunc(mahasiswaId); yang mereturn string
  // contoj: "Udin memiliki 4 dosbing dan sedang mengambil 3 matkul"
  function myFunc(mhsId){
      [...arrayMahasiswa].forEach((v)=>{
          if(v.id == mhsId){
            myObject.name = v.name,
            myObject.jmlhDosen = v.dosbing_id?.length,
            myObject.jmlhMatkul = v.matkul_id?.length
          }
      })
      return;
  }
  
  // dalam pengerjaannya wajib melibatkan variabel myOutput, dan stringMahasiswa
  // function call 