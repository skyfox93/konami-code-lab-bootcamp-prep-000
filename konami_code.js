const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "keyb",
  "keya"
];
var pressed=[];
function checkCode(e){pressed.push(e.code);var temp=pressed.slice(-10);console.log(temp);for(var i=0;i<10;i++)
{if (temp[i]!==codes[i]){return}}
alert('Congrats!');}
function init() {
 document.addEventListener('keydown',checkCode);
}
init();