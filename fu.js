let colors = [
  "red", "orange", "yellow",
  "blue", "green", "indigo",
  "violet"
];
let body = document.getElementsByTagName("body")[0];

let currColor = colors[0];
let colorPost = 0;

let newHeader = document.createElement("h1");
newHeader.innerText = "Watch me";
body.appendChild(newHeader);
                
setInterval( function() {

  if (colorPost > colors.length)  {
    colorPost = 0;
  }

  newHeader.style.color = colors[colorPost];
  colorPost++;
}, 500);
