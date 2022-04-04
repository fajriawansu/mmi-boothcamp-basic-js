// string datatype
const fullname = "Fajriawan Sutansa"
const age = " umur 16"

/////////
// method
const nameLength = fullname.length;

const sliceFullname = fullname.slice(-5, -1)
const substringFullname = fullname.substring(-10,5) //gabisa negatif

const replaceFullname = fullname.replace("Fajri", "Fajar");
const uppFullname = fullname.toUpperCase();
const lowFullname = fullname.toLowerCase();

const concatNameAge = fullname.concat(age, " Lokasi Depok");

const indexSatuFullname = fullname.charAt(1);
const codeSatuFullname = fullname.charCodeAt(1);
const indexOfFullname = fullname.indexOf("a");

const arrayFullname = fullname.split(" "); // coba () dan ("")

const trueStart = fullname.startsWith("Fajriawan"); //true
const falseStart = fullname.startsWith("fajriawan"); //false
const includeFullname = fullname.includes("wan Suta"); //true

// datatype number
const numInteger = 41213;
const numFloat = 4.5;
const num11000 = 11e3;
const plusString = fullname + numInteger;
const divByString = numInteger / fullname;
const divByZero = numInteger / 0;
const divByInfinit = numInteger / Infinity;

const numToString = numInteger.toString();
const theType = typeof(numToString);
const toInteger = numFloat.toFixed();

// merubah tipe data apapun ke number
const theNumber = "23456"
const theFloat = "12.456"
const tambah = parseInt(theNumber) + 1
const tambahFloat = parseFloat(theFloat) + 12
const tambahInt = parseInt(theFloat) + 12

// console.log(numToString, theType);
// console.log(tambahInt, typeof(tambahInt));

// datatype object
const biodata = {
    nama_depan: "Fajriawan",
    nama_belakang: "Sutansa",
    phone_number: "1213131",
    alamat: {
        "kota": "Depok",
        "provinsi": "Jawa Barat"
    }
}

// cara akses object ada 2:
const myName = biodata.nama_depan;
const myName2 = biodata["nama_belakang"];

// console.log(myName, myName2)

function checkName(theObject, theProperties){
    return theObject[theProperties];
}

// console.log(checkName(biodata, "phone_number"))

const theLanguage = {
    id: 1,
    english: "Eat",
    indonesia: "Makan"
}

// console.log(checkName(theLanguage, "english"))

// object method
const extendedBiodata = {
    nama_depan: "Fajriawan",
    nama_belakang: "Sutansa",
    full_name: function(){
        return this.nama_depan + this.nama_belakang
    },
    phone_number: "1213131",
    alamat: {
        "kota": "Depok",
        "provinsi": "Jawa Barat",
        alamat_lengkap: function(){
            return this.kota + this.provinsi
        }
    }
}

const myFullName = extendedBiodata.full_name();

// console.log(myFullName)

// spread object
const copyBiodata = { 
    ...biodata,
    nama_belakang: "Sutansaaaaaa",
    lahir: "Depok"
 }
console.log(copyBiodata);