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

console.log(fullname);
console.log(fullnameLength);
console.log(sliceFullname);
console.log(substringFullname);
console.log(replaceFullname);
console.log(uppFullname);
console.log(lowerFullname);
console.log(concatNameAge);
console.log(indexSatuFullname);
console.log(codeSatuFullname);
console.log(arrayFullname);
console.log(trueStart);
console.log(falseStart);
console.log(includeFullname);

