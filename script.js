function sort(){
let string = document.getElementById("string").value;

if(string == null || !isNaN(string)){
    alert("Please enter a valid string");
    return;
}
    
let words = string.split(' ');

words.sort();

let str = "";
for(let i = 0; i < words.length; i++){
    str += words[i]+ " ";
}
document.getElementById("result").value = str;
}

function eraseText(){
    document.getElementById("string").value = "";
    document.getElementById("result").value = "";
}
