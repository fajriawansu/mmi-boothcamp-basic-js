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
console.log(idxCode);
console.log(splitFullname);
console.log(includeFullname);
console.log(startFullname);
console.log(indexofFullname);