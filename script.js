const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');
const p_message = document.querySelector('.p_message');


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const plus_minutes = document.querySelector('.plus_minutes');
const minus_minutes = document.querySelector('.minus_minutes');
const pause = document.querySelector('.pause');


let countSec = 0;
let countMin = 0;
let pause_time = false;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
  console.log(pause);
	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (pause_time == true) {
    clearInterval(timeinterval);
  }
  else {
    if (total <= 0) {
      clearInterval(timeinterval);
      timer.style.display = 'none';
      message.innerHTML = '<p>I am done...</p>'
    }
    if(countSec > 0) countSec--;
    else{
      countSec = 59;
      countMin--;
    } 
  }
  updateText();
}

range_minutes.onchange = function(){
  countMin = range_minutes.value;
  updateText();
 }

range_seconds.onchange = function(){
  countSec = range_seconds.value;
  updateText();
 }


pause.onclick = () =>{
  with_pause()
}


plus_minutes.onclick = () =>{
  if(countMin < 59) {
    ++countMin;
    updateText()
  }
}

plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

minus_minutes.onclick = () =>{
  if(countMin <= 0){
    countMin = 0;
  }
  else {
  	--countMin;
  }
  updateText();
}

start.onclick = () => {
  with_pause(false);
  countDown();  
}

function with_pause(pause_set = true) {
  if (pause_set == false) {
    p_message.innerText = '';
    pause_time = false;
  }
  else {
    if (pause_time == false) {
      p_message.innerText = 'Пауза';
      pause_time = true;
      pause.innerText = 'Продолжить';
    }
    else {
      pause.innerText = 'Пауза';
      p_message.innerText = '';
      pause_time = false;
      countDown();  
    }
  }
}