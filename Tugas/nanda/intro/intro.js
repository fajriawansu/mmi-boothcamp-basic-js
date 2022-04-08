const fullname = "Ananda Novi Prasetya"
const fullnameLength = fullname.length

const sliceFullname = fullname.slice(1,5)
const substringFullname = fullname.substring(-10,5);
const replaceFullname = fullname.replace("Ananda","Putri")
const uppFullname = fullname.toUpperCase();
const lowerFullname = fullname.toLowerCase();
const age = "umur 17"
const concatNameAge = fullname.concat(" ",age, " Lokasi Tanggerang");
const indexSatuFullname = fullname.charAt(1);
const codeSatuFullname = fullname.charCodeAt(1);

const arrayFullname = fullname.split(" ");
const trueStart = fullname.startsWith("Ananda");
const falseStart = fullname.endsWith("ananda");
const includeFullname = fullname.includes("novi");

// console.log(fullname);
// console.log(fullnameLength);
// console.log(sliceFullname);
// console.log(substringFullname);
// console.log(replaceFullname);
// console.log(uppFullname);
// console.log(lowerFullname);
// console.log(concatNameAge);
// console.log(indexSatuFullname);
// console.log(codeSatuFullname);
// console.log(arrayFullname);
// console.log(trueStart);
// console.log(falseStart);
// console.log(includeFullname);

//number at JS
const  numInteger = 4;
const numFloat = 4.5;
const num1100 = 11e3;
const plusString = fullname + numInteger;
const divByString = numInteger/fullname;
const divByZero = numInteger / 0;
const divByInfinity = numInteger / Infinity;
const numToString = numInteger.toString();
const toInteger = numFloat.toFixed();


// console.log(numInteger);
// console.log(numFloat);
// console.log(num1100);
// console.log(plusString);
// console.log(divByString,divByZero,divByInfinity);
// console.log(numToString, typeof(numToString));
// console.log(toInteger); ParseInt, ParseFloat

// datatype objek
const biodata = {
    nama_depan: "Nanda",
    nama_belakang: "Prasetya",
    phone_number: "1123232",
    alamat: {
        kota: "Tanggerang",
        provinsi: "Banten"
    }
}

console.log(biodata);
console.log(biodata.nama_depan);
console.log(biodata.alamat.kota);
// biodata.["nama_depan"] cara bracket

function checkName(theObject, theProperties){
    return theObject[theProperties];
}

console.log(checkName(biodata, "phone_number"));

const ExtendedBiodata = {
    nama_depan: "Nanda",
    nama_belakang: "Prasetya",
    phone_number: "1123232",
    full_name: function(){
        return this.nama_depan + this.nama_belakang
    },
    alamat: {
        kota: "Tanggerang",
        provinsi: "Banten",
        alamat_lengkap: function(){
            return this.kota + this.provinsi
        }
        
        
    }
}

const fullName = ExtendedBiodata.full_name()
console.log(fullName);
console.log(ExtendedBiodata.alamat.alamat_lengkap());

//copy yang object biodata
const copyBiodata = {...biodata,
lahir:"depok"}
console.log(copyBiodata);


const cars = ["Saab", "Volvo", "BMW"];
let cars1 = ["Saab", "Volvo", "BMW"];
cars.pop()
cars1.pop()
console.log(cars,cars1);
console.log(cars.join());

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

console.log(newFilter);