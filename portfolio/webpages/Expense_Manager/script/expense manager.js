
let obj={};
let mem={};

let mem_name=document.querySelector(".mem_name");

let app=document.querySelector(".app");

let mem_name_input=document.querySelector("#mem_name_input");
let mem_name_input_add=document.querySelector("#mem_name_input_add");
let mem_name_input_submit=document.querySelector("#mem_name_input_submit");
mem_name_input_add.onclick=function(){
    mem[mem_name_input.value]=0;

    let option=document.createElement("option");
    let paidby=document.querySelector("#paidby");
    option.value=mem_name_input.value;
    option.textContent=mem_name_input.value;
    paidby.appendChild(option);

    let para=document.createElement("p");
    let cashout=document.querySelector(".cashout");
    para.setAttribute('id','c_'+mem_name_input.value);
    cashout.appendChild(para);

    let para_equate=document.createElement("p");
    let equate=document.querySelector(".equate");
    para_equate.setAttribute('id','e_'+mem_name_input.value);
    equate.appendChild(para_equate);

    mem_name_input.value='';
}

mem_name_input_submit.onclick=function(){
  mem_name.innerHTML='';
  app.style.visibility='visible';
}



let submit=document.querySelector("#submit");
let total=0;
submit.onclick=function(){
  let len=0;
  for(i in mem){
    if(mem.hasOwnProperty(i)){
      len++;
    }
  }
  let item=document.querySelector("#item");
  let price=document.querySelector("#price");
  let paidby=document.querySelector("#paidby");
  obj[item.value]={'price':price.value,'paid_by':paidby.value};
  total+=parseInt(price.value);
  mem[paidby.value]+=parseInt(price.value);
  document.querySelector("#total").textContent='Total Expense : '+total;
  let list=document.querySelector("#items");
  let li=document.createElement("li");
  li.textContent=item.value+" bought by "+paidby.value+" of price : "+price.value;
  list.appendChild(li);
  document.querySelector("#c_"+paidby.value).textContent="Cash given by "+paidby
  .value+" = "+mem[paidby.value];
  document.querySelector("#avgex").textContent="Expense per Head = "+(total/len);
  for(let i in mem){
    if(mem.hasOwnProperty(i)){
    document.querySelector("#e_"+i).textContent="Cash needed to pay by "+i+" = "+(total/len-mem[i]);
  }}
  item.value='';
  price.value='';
  item.focus();
}
