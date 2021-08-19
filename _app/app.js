//initialscore
let score = 0;

//localStorage
if(!isNaN(localStorage.clickscore)) {
  score = Number(localStorage.clickscore);
  let text = document.querySelector('#score');
  text.textContent = score; 
} else {
  localStorage.clickscore = score;
}

//get element id img
let nongbank = document.getElementById('nongbank');

//audio
let x = document.getElementById("myAudio"); 
let audio = new Audio('_static/clicking.wav');
audio.volume = 0.3;

//event click
document.addEventListener('click',clickMePlease);
//event keyup
document.addEventListener('keyup',clickMePlease);
function clickMePlease() {
  score += 1;
  let text = document.querySelector('#score');
  scoreWow();
  // if(score % 2 === 0) {
  //   scoreWow();
  // } else {
  //   scoreNotWow();
  // }
  text.textContent = score;
  $('#clickcount').text(score);
  audio.play();
  M.toast({html: '+1',displayLength: 100,classes:'rounded green'})
}

//style text
function scoreWow() {
  let text = document.getElementById('score');
  text.style.color = randomValueColor();
  text.style.transform = 'scale(1.2,1.2) rotate('+randomValueRotate(20)+'deg)';
  text.style.transition = '.2s all';
  nongbank.src = '_static/nongbankopenmouth.png';
  setTimeout(() => {
    nongbank.src = '_static/nongbank.png';
  },220);
}
function increasePop (n) {
  score += n;
}
//randomvalue
function randomValueRotate(n) {
  let tmp = Math.floor(Math.random() * 2);
  if(tmp === 0) {
    return (Math.round(Math.random() * n)+1) * -1; 
  }
  return Math.round(Math.random() * n) + 1;
} 

//randomcolor
function randomValueColor() {
  //object color
  let color = [
    'yellow','green','white','orange',
    'violet','blue','bisque','brown',
    'cyan','darkcyan','darkgoldenrod',
    'pink','deepskyblue','gold','grey',
    'indianred','indigo','ivory','khaki',
    'maroon','magenta','linen','lightgreen'
  ]
  return color[Math.floor(Math.random() * color.length ) + 1];
}
$('#undo5').click(() => {
  let cost = 5
  if(!checkPOPCost(cost)){
    return;
  }
  score-=cost;
})

$('#x210s').click(() => {
  let cost = 200;

  if(!checkPOPCost(cost)){
    return;
  }
  score-=cost;

  var x2 = setInterval(() => {
    document.addEventListener('click',increasePop(2));
    document.addEventListener('keyup',increasePop(2));
  }, 10000);
  setTimeout(()=> {clearInterval(x2)},10100);
})

setInterval(() => {
  localStorage.setItem('clickscore',score);
},1000)

function checkPOPCost (cost) {
  if(score - cost < 0) {
    M.toast({html: 'Your POP is less than cost',classes:'rounded red'})
    return false;
  }
  return true;
} 