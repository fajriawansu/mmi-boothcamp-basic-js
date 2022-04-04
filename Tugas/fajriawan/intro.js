// string datatype
const fullname = "Fajriawan Sutansa"
const age = " umur 16"

/////////
// method
const nameLength = fullname.length;

const sliceFullname = fullname.slice(-5, -1)
const substringFullname = fullname.substring(-10,5) //gabisa negatif

const replaceFullname = fullname.replace("Fajri", "Fajar");
const uppFullname = fullname.toUpperCase();
const lowFullname = fullname.toLowerCase();

const concatNameAge = fullname.concat(age, " Lokasi Depok");

const indexSatuFullname = fullname.charAt(1);
const codeSatuFullname = fullname.charCodeAt(1);
const indexOfFullname = fullname.indexOf("a");

const arrayFullname = fullname.split(" "); // coba () dan ("")

const trueStart = fullname.startsWith("Fajriawan"); //true
const falseStart = fullname.startsWith("fajriawan"); //false
const includeFullname = fullname.includes("wan Suta"); //true



console.log(includeFullname);