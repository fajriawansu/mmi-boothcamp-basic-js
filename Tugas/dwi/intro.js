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



console.log(includeFullname);