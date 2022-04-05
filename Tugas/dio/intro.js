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
const copyBiodata = {
    ...biodata,
    tanggal_lahir: "27-08-1999"
}

console.log(biodata.nama_lengkap()+", "+biodata.alamat.alamat_lengkap()+", "+copyBiodata.tanggal_lahir);

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
console.log(anggota[0].hobi.toString());//jadi string
console.log(anggota[0].hobi.join(";"));//jadi stiring tp gabung pake ;

anggota[0].hobi.push("Listen"); //tambah di elemen terakhir
console.log(anggota[0].hobi);

anggota[0].hobi.pop(); //hapus elemen terakir
console.log(anggota[0].hobi);

anggota[0].hobi.shift();//hapus elemen pertama
console.log(anggota[0].hobi);

anggota[0].hobi.unshift("Play")//tambah elemen pertama
console.log(anggota[0].hobi);

console.log(anggota[0].hobi.length);
console.log(anggota.length);

const arr1 = [1,2,3]
const arr2 = ["a", "b", "c", "d"]
console.log(arr1+" "+arr2);
arr1.splice(1,1, 4,5,6,7); //splice("index start tambah data arr", "banyak data dihapus mulai dari start", ..."data-data yg ditambah")
console.log(arr1);
console.log(arr2.slice(1,3));//tampil dari index 1 sampai 3-1

console.log(arr1.sort()+" "+arr2.sort())
console.log(arr1.reverse()+" "+arr2.reverse())

console.log(arr1.sort(function(a,b){return a-b}))//sort peke function (hanya bisa number)
console.log(arr1.sort(function(a,b){return b-a}))//sama

console.log(Math.max(1,22,3,4,5))//nilai max
console.log(Math.max.apply(null, [1,22,3,4,5]))//nilai max pada array

const belajarSort = [
    {nama: "Dio", umur: 21},
    {nama: "Harvandy", umur: 25},
    {nama: "Har", umur: 30},
    {nama: "Vandy", umur: 23}
]

console.log(belajarSort.sort(function(a,b){return a.umur - b.umur}))//sort berdasarkan umur(karena number)
belajarSort.sort(function a(a,b){ //sort berdasarkan nama (karena string)
    let x = a.nama.toLocaleLowerCase();
    let y = b.nama.toLocaleLowerCase();
    if(x<y){return -1 };
    if(x>y){return 1 };
    return 0;
})
console.log(belajarSort)

//iteration
belajarSort.forEach(iterationFunction)
function iterationFunction(value, index, array){
    return console.log(`nama orang ke-${index+1} adalah ${value.nama}`)
}

belajarSort.forEach((value, index, array)=>{
    return console.log(`nama orang ke-${index+1} adalah ${value.nama}`)
})

console.log(arr1.map(mapFunction))
function mapFunction(value, index, array){
    return value*2;
}

console.log(arr1.map((value)=> value*3))

console.log(arr1.filter(filterFunction))
console.log(arr1.every(filterFunction)) //jika setiap element
console.log(arr1.some(filterFunction)) // jika salah satu saja
function filterFunction(value){
    return value > 5
}

console.log(arr1.reduce(reduceOrSumFunction))
function reduceOrSumFunction(total, value, index, array){
    return total+value
}

console.log(belajarSort.findIndex((v)=> v.nama =="Dio"))
console.log(belajarSort.find((v)=> v.nama =="Har"))

//Operators and Math
const x = 12.34

console.log(Math.round(x))//pembulatan terdekat
console.log(Math.ceil(x))//pembulatan atas
console.log(Math.floor(x))//pembulatan bawah
console.log(Math.trunc(x))//return 12
console.log(Math.sign(x))//return negatif null positif
console.log(Math.pow(2,4))//pangkat (nilai, pangkat)
console.log(Math.sqrt(144))//akar kuadrat
console.log(Math.trunc(-x))//nilai mutlak
console.log(Math.random())//random 0-1

//condition

//ternary condition (condition)? valueIfTrue:valueIfFalse
console.log((x<12)? ((x<10)? ((x<5)? true:"lebih dari 5"):"lebih dari 10") :"lebih dari 12")

//loop
for(bel in belajarSort[0]){
    console.log(bel)
}
for(f in belajarSort){
    console.log(belajarSort[f].nama)
}