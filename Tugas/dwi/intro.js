const fullName = "Dwinowo Muhammad";
const age = "umur 17";



const x = fullName.length;

const sliceFullname = fullName.slice(5,10); //kalo ada negatif dimulai dari kanan contoh -1 berati daro a paling kanan
const substringFullname = fullName.substring(-10,5); //kalo startnya di isi negatif akan otomatis dimulai dari index 0

const replaceFullname = fullName.replace("Dwinowo", "Arif");

const uppFullname = fullName.toUpperCase();
const lowFullname = fullName.toLowerCase();

const concatNameAge = fullName.concat(age, "Lokasi Tebet");

const indexSatuFullname = fullName.charAt(1);
const codeSatuFullname = fullName.charCodeAt(1);
const arrFullname = fullName.split(""); //split kayak split di java, misal parameternya kosong maka bakal di pisah satu satu kata per index

const startFullname = fullName.startsWith("D");

const includeFullname = fullName.includes("w");



// datatype

const numInteger = 4;
const numFloat = 4.5;
const num1000 = 11e3;
const plusString = fullName + numInteger;
const divByString = numInteger/fullName;
const dibByZero = numInteger / 0;
const divByInfineite = numInteger / Infinity;


const numToString = numInteger.toString();

// kalo mau ngecek lewat console log tipe data pake typeof

const theType = typeof(numToString);

const toInteger = numFloat.toFixed();

// merubah tipe data apapun ke number

const numString = "781920";
const theNumFloat = "12.5232";

const konversiFloat = parseFloat(theNumFloat);

const konversi = parseInt(numString);



// data type Object

const biodata = {
    namaDepan : "Eren",
    namaBelakang : "Yaeger",
    phoneNumber : "122214",
    alamat : {
        "kota" : "Tebet",
        "provinsi" : "Jakarta Selatan"
    }
}


const myName = biodata.namaDepan;
const myName2 = biodata["namaBelakang"];

console.log(myName, myName2);



const extendBiodata = {
    namaDepan : "Eren",
    namaBelakang : "Yaeger",
    fullName : this.namaDepan + this.namaBelakang,
    phoneNumber : "122214",
    alamat : {
        "kota" : "Tebet",
        "provinsi" : "Jakarta Selatan",
        alamatLengkap : function(){
            return this.kota + this.provinsi;
        }
    }
}

console.log(extendBiodata);


console.log(konversi);



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

console.log(sortMember3());
