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