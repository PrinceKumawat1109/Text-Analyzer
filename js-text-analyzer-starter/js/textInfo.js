let textareaE1 = document.querySelector("#text");
let text = null;

let data = {
    words: 0,
    sentences: 0,
    uppercase: 0,
    lowercase: 0,
    spaces: 0,
    consonants: 0,
    digit:0,
    vowels: 0,
},

const setText = () => {
    text = textareaE1.value;
     // uppercase: text.match(/[A-Z]/g).length
   // lowercase: text.match(/[a-z]/g).length
   // spaces: text.match(/\s/g).length
// digit: text.match(/\d/g).length
// vowels: text.match(/[aeiou]/gi).length
// consonants: text.match(/[bcdfghjklmnopqrstvwxyz]/gi).length
// sentences:  text.match(/\056/gi).length
// words: text.match(/[a-zA -Z]+/gi).length

const findLength = item => (item === mull ?0: item.length);
    if(text !=null) {
        data.sentences = findLength(text.match(/\056/gi);
        data.words = findLength(text.match(/[a-zA -Z]+/gi);
        data.spaces = findLength(text.match(/\s/g);
        data.uppercase = findLength(text.match(/[A-Z]/g);
        data.lowercase = findLength(text.match(/[a-z]/g);
        data.vowels = findLength(text.match(/[aeiou]/gi);
        data.consonants = findLength(text.match(/[bcdfghjklmnopqrstvwxyz]/gi);
        data.digit = findLength(text.match(/\d/g);
    }
    localStorage.setItem("data", JSON.stringify(data));
    window.location = "info.html";
};

const getData = () => {
    return JSON,parse(localStorage.getItem("data"));
};

const showData = () => {
let data = getData();
let htmlcontent= "";
for(item in data){
    htmlContent += `<div class="box">
    <h2>${data[item]}</h2>
     <p> ${item}item</p>
     </div>`;
}
document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
