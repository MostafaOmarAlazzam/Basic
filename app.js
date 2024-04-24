let myage = 26.9;
let myname = "mostafa 'omar' \"Alazzam ";
let arrayName = ["mostafa", "omar", "ahmad", "azzam","basel","feras","syf","rami","zaid","eman"];

// String
console.log(myname.toUpperCase());
console.log(myname.charAt(0).toUpperCase());
console.log(myname.length);

// int
console.log(Math.round(myage));
console.log(Math.floor(myage)); // Stay number as that as
console.log(Math.ceil(myage)); // always increase 1
console.log(Math.floor(Math.random() * 10));

console.log(Math.pow(myage, 0));
console.log(Math.sqrt(144));

// array
console.log(arrayName);
console.log(arrayName[1][0]);
console.log(arrayName.length); // length =  lastIndex + 1
// lastIndex = length - 1

console.log(arrayName.pop()); // delete last item "print item that deleted"
console.log(arrayName.push("suhaib")); // add item "print new length"
console.log(arrayName.indexOf("mostafa")); // search on item "print index"

// إنشاء مصفوفة تحتوي على جميع الأحرف الإنجليزية الصغيرة
let allSmallEnglishLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let RandomCharacter = Math.floor(Math.random() * allSmallEnglishLetters.length);
let GenaratedChar = allSmallEnglishLetters[RandomCharacter]
console.log(GenaratedChar)

function Search(charcater) {
  for (let i = 0; i < arrayName.length; i++) {
    if (arrayName[i][0] == charcater) {
      console.log(`this name that start with ${charcater} is ${arrayName[i]}`);
    }
  }
}

Search(GenaratedChar);
