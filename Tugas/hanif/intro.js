const fullname = "Hanif Dwitama Putera";
const age = " umur 25";
const nameLength = fullname.length;

const sliceFullname = fullname.slice(1, 5);
const substringFullname = fullname.substring(0, 5);

const replaceFullname = fullname.replace("Hanif", "Hanif2");
const uppFullname = fullname .toUpperCase(fullname);
const lowFullname = fullname .toLowerCase(fullname);

const concatNameAge = fullname.concat(age, " tinggal di Jakarta");

const arrayFullname = fullname.split(" "); // tergantung dari split parameternya apa

const startFullname = fullname.startsWith("Hanif");
const endFullname = fullname.endsWith("Putera")
const includeFullname = fullname.includes("Dwitama");

console.log(endFullname);