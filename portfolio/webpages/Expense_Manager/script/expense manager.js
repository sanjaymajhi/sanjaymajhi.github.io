let submit=document.querySelector("#submit");
let obj={};
let total=0;
let total_sanjay=0;
let total_ashish=0;
let total_ayan=0;
let total_sanju=0;
let total_aakash=0;
submit.onclick=function(){
  let item=document.querySelector("#item");
  let price=document.querySelector("#price");
  let paidby=document.querySelector("#paidby");
  obj[item.value]={'price':price.value,'paid_by':paidby.value};
  total+=parseInt(price.value);
  eval("total_"+paidby.value+"+="+price.value);
  document.querySelector("#total").textContent='Total Expense : '+total;
  let list=document.querySelector("#items");
  let li=document.createElement("li");
  li.textContent=item.value+" bought by "+paidby.value+" of price : "+price.value;
  list.appendChild(li);
  document.querySelector("#c_"+paidby.value).textContent="Cash given by "+paidby
  .value+" = "+eval("total_"+paidby.value);
  document.querySelector("#avgex").textContent="Expense per Head = "+(total/5);
  document.querySelector("#e_sanjay").textContent="Cash needed to pay by sanjay"+" = "+(total/5-total_sanjay);
  document.querySelector("#e_ashish").textContent="Cash needed to pay by ashish"+" = "+(total/5-total_ashish);
  document.querySelector("#e_ayan").textContent="Cash needed to pay by ayan"+" = "+(total/5-total_ayan);
  document.querySelector("#e_sanju").textContent="Cash needed to pay by sanju"+" = "+(total/5-total_sanju);
  document.querySelector("#e_aakash").textContent="Cash needed to pay by aakash"+" = "+(total/5-total_aakash);
  item.value='';
  price.value='';
  item.focus();
}
