let textareaEl = document.querySelector("#text");
let text = null;
let data = {
  words: 0,
  sentences: 0,
  uppercaes: 0,
  lowercase: 0,
  spaces: 0,
  digits: 0,
  vowels: 0,
  consonants: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  text = textareaEl.value;
  //  number of new Sentences   text.match(/\056/g)
  //  number of uppercaes       text.match(/[A-Z]/g)
  //  number of lowercase       text.match(/[a-z]/g)
  //  number of spaces          text.match(/\s/g)
  //  number of digits          text.match(/\d/g)
  //  number of words           text.match(/[a-zA-Z]+/g)
  //  number of vowels          text.match(/[aeiou]/gi)
  // numbers of consonant      text.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  if (text != null) {
    data.sentences = findLength(text.match(/\056/g));
    data.words = findLength(text.match(/[a-zA-Z]+/g));
    data.spaces = findLength(text.match(/\s/g));
    data.uppercaes = findLength(text.match(/[A-Z]/g));
    data.lowercase = findLength(text.match(/[a-z]/g));
    data.digits = findLength(text.match(/\d/g));
    data.vowels = findLength(text.match(/[aeiou]/gi));
    data.consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
