function sortWords() {
let string = document.getElementById("words").value;
let words = string.split(' ');

words.sort();

let str = "";
for(let i = 0; i < words.length; i++){
    str += words[i];
}

document.getElementById("result").innerHTML = str;
}