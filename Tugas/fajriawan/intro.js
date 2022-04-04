const dataDummy = require("./dummyData")

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
// console.log(copyBiodata);

// belajar array

// array cuma bisa diakses 1 cara, yaitu bracket notation
// console.log(member[1].nama_depan);

// const copyOfMember = [
//     ...member,
//     {
//         nama_depan: "Putri",
//         nama_belakang: "Rahayu",
//         phone_number: "121212",
//         alamat: {
//             "kota": "Jakarta",
//             "provinsi": "DKI Jakarta"
//         }
//     }
// ]
// console.log(copyOfMember);

const hewan = ["Ayam", "Gurita", "Sapi", "Ikan"];
// console.log(hewan.toString(), typeof(hewan.toString())) 
// console.log(hewan.join(" # "), typeof(hewan.join(" # "))) 

const tempHewan = [... hewan];
// tempHewan.pop();
// tempHewan.shift();
// tempHewan.push("Tikus");
// tempHewan.unshift("Tikus");
// console.log(tempHewan, 'length dari array temphewan adalah =', tempHewan.length);

const warga1 = ['asep', 'rudi', 'imam'];
const warga2 = ['dimas', 'aan'];

// const warga = warga1.concat(warga2, "Dian");
// const potonganWarga = warga1.splice(0, 1);
// const sliceWarga = warga1.slice(0,1);
// console.log(warga1, potonganWarga);

const sortHewan = hewan.sort();
const reverseSortHewan = hewan.reverse();
// console.log(reverseSortHewan);


const member = [
    {
        id: 1,
        nama_depan: "Fajriawan",
        nama_belakang: "Sutansa",
        phone_number: "1213131",
        alamat: {
            "kota": "Depok",
            "provinsi": "Jawa Barat"
        }
    },
    {
        id: 33,
        nama_depan: "Dimas",
        nama_belakang: "Syaputra",
        phone_number: "11111",
        alamat: {
            "kota": "Bogor",
            "provinsi": "Jawa Barat"
        }
    },
    {
        id: 22,
        nama_depan: "Yusuf",
        nama_belakang: "Fadila",
        phone_number: "2222",
        alamat: {
            "kota": "Semarang",
            "provinsi": "Jawa Tengah"
        }
    },
    
];

// sort array with nested object
function sortMember(){
    return member.sort(mySort);
}

// sort langsung di dalam (ES5)
function sortMember2(){
    return member.sort(function(a,b){
        return parseInt(a.id) - b.id
    });
}

// sort langsung di dalam (ES6)
function sortMember3(){
    return member.sort((a,b) => {
        let before = a.id;
        let after = b.id;
        return before - after;
    });
}

function mySort(a,b){
    return parseInt(a.id) - b.id
}

function myStringSort(a,b){
    let before = a.alamat["kota"];
    let after = b.alamat["kota"];
    if (before < after){return -1};
    if (after < before){return 1};
}

// console.log(member.sort(myStringSort));

// console.log(member.forEach((v, idx) => {
//     console.log({
//         value: v,
//         index: idx
//     })
// }));

// function learnForEach(value, index, arr){
//     console.log({
//         value: value,
//         index
//     })
// }

// mapping array

const newMapping = member.map((value, index) => {
    return {
        fullname: value.nama_depan + " " + value.nama_belakang
    }
})

const newFilter = member.filter((value, index) => {
    return value.alamat.provinsi === "Jawa Barat"
})

// console.log(newFilter);

const dummyWarga = dataDummy.warga;



console.log(dummyWarga)




