const fullname = "Hanif Dwitama Putera";
const age = " umur 25";
const nameLength = fullname.length;

const sliceFullname = fullname.slice(1, 5);
const substringFullname = fullname.substring(0, 5);

const replaceFullname = fullname.replace("Hanif", "Hanif2");
const uppFullname = fullname .toUpperCase(fullname);
const lowFullname = fullname .toLowerCase(fullname);

const concatNameAge = fullname.concat(age, " tinggal di Jakarta");

const arrayFullname = fullname.split(" "); // tergantung dari split parameternya apa

const startFullname = fullname.startsWith("Hanif");
const endFullname = fullname.endsWith("Putera");
const includeFullname = fullname.includes("Dwitama");

//number
const numberInteger = 100;
const numberFloat = 4.5;
const num1100 = 11e3;
const plusString = fullname + numberInteger;
const divByString = numberInteger / fullname;
const divByZero = numberInteger / 0;
const divByInfinity = numberInteger / Infinity;

const numToString = numberInteger.toString();
const toInteger = numberFloat.toFixed();

const theNumber = "12345";
const theFloat = "13.4"
const addingTheNumber = parseInt(theNumber) + 5;
const addingTheFloat = parseFloat(theFloat) +5;

//console.log(numToString, typeof(numToString)); // untuk mecari tipe data

// Object
const biodata = {
    nama_depan: "Hanif Dwitama",
    nama_belakang: "Putera",
    phone_number: "12345",
    alamat: {
        "kota" : "Jakarta",
        "provinsi" : "DKI Jakarta"
    }
}

const myName = biodata.nama_depan;
const myName2 = biodata["nama_belakang"];

function checkName(theObject, theProperties) {
    return theObject[theProperties];
}

//console.log(checkName(biodata, "phone_number"));

//
const theLanguage = {
    id: 1,
    english: "Eat",
    indonesia: "Makan"
}

//console.log(checkName(theLanguage, "english"));

//
const extendedbiodata = {
    nama_depan: "Hanif Dwitama",
    nama_belakang: "Putera",
    full_name: function(){
        this.nama_depan + this.nama_belakang
    } ,
    phone_number: "12345",
    alamat: {
        "kota" : "Jakarta",
        "provinsi" : "DKI Jakarta",
        alamat_lengkap: function() {
            alamat_lengkap: this.kota + this.provinsi
        }
    }
}

const copyBiodata = {
    ...biodata,
    //nama_belakang: "Putera2" // untuk mengganti yang diatas
    lahir: "Jakarta"
}

//console.log(copyBiodata);

// Array
const member = [
    {
        nama_depan: "Hanif Dwitama",
        nama_belakang: "Putera",
        phone_number: "12345",
        alamat: {
            "kota" : "Jakarta",
            "provinsi" : "DKI Jakarta"
        }
    },
    {
        nama_depan: "Budi",
        nama_belakang: "Pekerti",
        phone_number: "54321",
        alamat: {
            "kota" : "Bogor",
            "provinsi" : "Jawa Barat"
        }
    } 
]

const copyOfMember = [
    ...member,
    {
        nama_depan: "Ani",
        nama_belakang: "Ina",
        phone_number: "65467",
        alamat: {
            "kota" : "Malang",
            "provinsi" : "Jawa Timur"
        }
    } 
]

//console.log(member[0].nama_depan)

const hewan = ["Ayam", "Sapi", "Kucing"];
console.log(hewan.toString(), typeof(hewan.toString()));

const tempHewan = ["Ayam", "Sapi", "Kucing"];
tempHewan.push("Burung")
tempHewan.shift();
console.log(tempHewan);
