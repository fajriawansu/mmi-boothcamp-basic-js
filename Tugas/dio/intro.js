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
console.log(fullName.includes("a\n"));

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