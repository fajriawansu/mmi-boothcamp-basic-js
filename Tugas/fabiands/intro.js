//String
const fullname = "Fabian Dewantara Santonie";
const age = "Umur Berapa"

const sliceFullname = fullname.slice(1,7);
const substringFullname = fullname.substring(-10,7);
const substrFullname = fullname.substr(1,6);
const replaceFullname = fullname.replace("Fabian","Fabfab");
const concatFullname = fullname.concat(age," Benar");
const idxCode = fullname.charCodeAt(2);
const splitFullname = fullname.split(" ");
const indexofFullname = fullname.indexOf("a");
const startFullname = fullname.startsWith("fabian");
const includeFullname = fullname.includes("a");

console.log(fullname);

//Number
const numInteger = 4444;
const numFloat = 5.6;
const testNumber = 11e4;
const plusString = fullname + numInteger;
const divByString = numFloat / fullname;
const divByZero = numFloat / 0;
const divByInfinity = numFloat / Infinity;
const fixedNum = numFloat.toFixed();
const theString = "1234";
const tambah = parseInt(theString) + 1;

const toString = numFloat.toString();

console.log(toString, typeof(toString));

//Object
const biodata = {
    nama_depan : "Fabian",
    nama_belakang : "Santonie",
    phone_number : "088888",
    alamat : {
        "kota" : "bekasi",
        "provinsi" : "jawa barat",
        alamat_lengkap : function () {
            return this.kota+" "+this.provinsi;
        }
    },
    nama_lengkap : function(){
        return this.nama_depan+" "+this.nama_belakang;
    }
}

function checknama(theObject, theProperties){
    return theObject[theProperties];
}

const fullNama = biodata.nama_lengkap();
//console.log(checknama(biodata,"nama_depan"));
console.log(fullNama);

const member = [
    {
        id : 4,
        nama_depan : "Fabian",
        nama_belakang : "Santonie",
        phone_number : "088888",
        alamat : {
            "kota" : "bekasi",
            "provinsi" : "jawa barat"
            }
    },
    {
        id : 2,
        nama_depan : "Budi",
        nama_belakang : "Alfianto",
        phone_number : "088888",
        alamat : {
            "kota" : "bekasi",
            "provinsi" : "jawa timur"
            }
    },
    {
        id : 3,
        nama_depan : "Wawan",
        nama_belakang : "Tutu",
        phone_number : "088888",
        alamat : {
            "kota" : "bekasi",
            "provinsi" : "jawa barat"
            }
    }
]
//console.log(member);
//console.log(member[0]);

const copyOfMember = [
    ...member,
    {
        id : 1,
        nama_depan : "Sukijan",
        nama_belakang : "Saya",
        phone_number : "088888",
        alamat : {
            "kota" : "bekasi",
            "provinsi" : "jawa barat"
            }
    }
]
//console.log(copyOfMember);

const hewan = ["Ayam", "Kucing", "Rusa", "Kambing"]
const stringHewan = hewan.toString();
const hewanTemp = [...hewan];
const joinHewan = hewanTemp.join("-");
hewanTemp.pop();
hewanTemp.shift();
console.log(hewanTemp);

const namaArray1 = ["Wawan", "Tutu", "Tritri"];
const namaArray2 = ["Forfor", "fivfiv", "sixsix", "sevsev", "egeg"];
const namaArraygabung = namaArray1.concat("Ninnin");
const namaArraysplice = namaArray1.splice(0,1,"Ahmad");
const namaArrayslice = namaArray1.slice(1,2);

//console.log(namaArraygabung);
//console.log(namaArrayslice);
//console.log(namaArraysplice);
//console.log(namaArray1);

const sortArray = namaArray2.sort();
//console.log(sortArray);

//Sort By ID
function sortMember(){
    return copyOfMember.sort((a,b)=>{
        let before = a.id;
        let after = b.id;
        return a.id-b.id;
    });
}

function sortMember2(){
    return copyOfMember.sort(mySort);
}
function mySort(a,b){
    return a.id - b.id;
}

function sortMember3(){
    return copyOfMember.sort(function(a,b){
        return parseInt(a.id) - b.id
    });
}

//Sort By Name
function myStringSort(a,b){
    let before = a.nama_depan;
    let after = b.nama_depan;
    if(before <= after) {return -1;};
    if(after > before) {return 1;};
}

//console.log(copyOfMember.sort(myStringSort));

function learnForEach(v){
    console.log(v);
    console.log("namanya adalah "+v.nama_depan);
}

const newMapping = copyOfMember.map((value, index) => {
    return {
        fullname: value.nama_depan + " " + value.nama_belakang
    }
})

const newFilter = copyOfMember.filter((value, index) => {
    return value.alamat.provinsi === "jawa barat"
})

console.log(newFilter);

console.log(newMapping);