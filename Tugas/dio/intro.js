const fullName = "Dio Harvandy";
let n = 3;

//string method
console.log("---------String---------");
console.log(fullName);
console.log(fullName.length);
console.log(fullName.slice(4,6));
console.log(fullName.substring(4,6));
console.log(fullName.substr(4,fullName.length));
console.log(fullName.replace("a","o"));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.concat(" PP"));
console.log(fullName.charAt(0));
console.log(fullName.charCodeAt(0));//return unicode index n
console.log(fullName.split("a"));
console.log(fullName.indexOf("a"));
console.log(fullName.lastIndexOf("a"));
console.log(fullName.startsWith("D"));
console.log(fullName.endsWith("y"));
console.log(fullName.includes("a"));
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
console.log(reverseString("hello"));
//number method
console.log("---------Number---------");
console.log(n);
console.log(111e5);
console.log(111e-5);
console.log(1+2);
console.log("1"+2);
console.log(2*2);
console.log("2"*2);
console.log("2"*"abc");
console.log(2/0);
console.log(111e-5.toString());
console.log(20.54.toFixed());
//global method for number
console.log(Number("1.1"));
console.log(parseInt("1.1"));
console.log(parseFloat("1.555"));

//objects and array
const biodata = {
    nama_depan:"Dio",
    nama_belakang: "Harvandy",
    alamat:{
        kota: "Padang",
        provinsi: "Sumatra Barat",
        kodepos: 25666,
        alamat_lengkap: function(){
            return this.kota+", "+this.provinsi+", "+this.kodepos
        }
    },
    nama_lengkap: function(){
        return this.nama_depan+" "+this.nama_belakang
    }
}
console.log(biodata.nama_lengkap()+", "+biodata.alamat.alamat_lengkap());

const anggota = [
    {
        nama: "Dio",
        jurusan: "Sistem Informasi",
        alamat:{
            kota: "Padang",
            provinsi: "Sumatra Barat",
            kodepos: 25666,
            alamat_lengkap: function(){
                return this.kota+", "+this.provinsi+", "+this.kodepos  
            }
        },
        hobi: ["Play", "Read", "Watch", "Code"] 
    }
]
console.log(typeof(biodata)+" "+typeof(anggota));
console.log(Array.isArray(biodata)+" "+Array.isArray(anggota));
console.log(anggota[0].nama+" "+anggota[0].jurusan+" "+anggota[0].alamat.alamat_lengkap()+" "+anggota[0].hobi);
console.log(anggota[0].hobi);
console.log(anggota[0].hobi.toString());
console.log(anggota[0].hobi.join(";"));
anggota[0].hobi.push("Listen");
console.log(anggota[0].hobi);
anggota[0].hobi.pop();
console.log(anggota[0].hobi);
anggota[0].hobi.shift();
console.log(anggota[0].hobi);
anggota[0].hobi.unshift("Play")
console.log(anggota[0].hobi);
console.log(anggota[0].hobi.length);
console.log(anggota.length);
const arr1 = [1,2,3]
const arr2 = ["a", "b", "c"]
console.log(arr1+" "+arr2);