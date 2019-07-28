
let big=document.querySelector(".big");
big.onclick=function(){
  let extra=document.querySelectorAll(".extra");
  let calc=document.querySelector(".calc");
  let screen=document.querySelector(".screen");
  calc.style.gridTemplateColumns='repeat(5,5vw)';
  screen.style.gridArea='span 3/span 5';
  if(big.getAttribute('id')==="click"){
    calc.style.gridTemplateColumns='repeat(5,5vw)';
    screen.style.gridArea='span 3/span 5';
    for(let i=0;i<extra.length;i++){
      extra[i].style.display='block';
    }
    big.setAttribute('id','clicked');
  }
  else{
    calc.style.gridTemplateColumns='repeat(4,5vw)';
    screen.style.gridArea='span 3/span 4';
    for(let i=0;i<extra.length;i++){
      extra[i].style.display='none';
    }
    big.setAttribute('id','click');
    }
  }

let items=document.querySelectorAll('.item');
let screen=document.querySelector(".screen");
function print(){
  screen.textContent+=this.getAttribute('value');
}
for(let i=0;i<items.length;i++){
  items[i].onclick=print;
}

let backspace=document.querySelector(".backspace");
backspace.onclick=function(){
  let len=screen.textContent.length-1;
  screen.textContent=screen.textContent.substring(0,len);
}

let ac=document.querySelector(".ac");
ac.onclick=function(){
  screen.textContent="";
}

let equal=document.querySelector(".equal");
equal.onclick=function(){
  screen.textContent=eval(screen.textContent);
}
