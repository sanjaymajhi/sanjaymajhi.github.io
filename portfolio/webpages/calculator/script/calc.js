
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

function factorial(num){
  let sum=1;
  for(let i=1;i<=num;i++){
    sum*=i;
  }
  return sum;
}


let equal=document.querySelector(".equal");
equal.onclick=function(){
  if(screen.textContent.indexOf('(')!=-1 && screen.textContent.indexOf(')')==-1){
    screen.textContent=eval(screen.textContent+')');
  }
  else if(screen.textContent.indexOf('!')!=-1){
    let len=screen.textContent.length-1;
    screen.textContent=factorial(parseInt(screen.textContent.substring(0,len)));
  }
  else{
    screen.textContent=eval(screen.textContent);
  }
}

let trig_inv=document.querySelector(".trig_inv");
let deg=document.querySelector(".deg");
deg.onclick=function(){
  if(deg.id==="not_clicked"){
    deg.id="clicked";
    deg.textContent="rad";

  }
  else {
    deg.id="not_clicked";
    deg.textContent="deg";
  }
  trig_inv.click(); //auto click trig_inv as code for deg is inside trig_inv.onclick
}

trig_inv.onclick=function(){
  let sin=document.querySelector(".sin");
  let cos=document.querySelector(".cos");
  let tan=document.querySelector(".tan");
  if(trig_inv.id==="not_clicked"){  //initially not_clicked,so now as onclicked thus asin
    sin.textContent="asin";
    cos.textContent="acos";
    tan.textContent="atan";
    if(deg.id==="not_clicked"){
      sin.value="Math.asin(";
      cos.value="Math.acos(";
      tan.value="Math.atan(";
    }
    else if(deg.id==="clicked"){
      sin.value="Math.asin(Math.PI/180*";
      cos.value="Math.acos(Math.PI/180*";
      tan.value="Math.atan(Math.PI/180*";
    }
    trig_inv.id="clicked";
  }
  else if(trig_inv.id==="clicked"){
    sin.textContent="sin";
    cos.textContent="cos";
    tan.textContent="tan";
    if(deg.id==="not_clicked"){
      sin.value="Math.sin(";
      cos.value="Math.cos(";
      tan.value="Math.tan(";
    }
    else if(deg.id==="clicked"){
      sin.value="Math.sin(Math.PI/180*";
      cos.value="Math.cos(Math.PI/180*";
      tan.value="Math.tan(Math.PI/180*";
    }
    trig_inv.id="not_clicked";
  }
}
