const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdown=document.querySelectorAll('.dropdown select');
let btn=document.querySelector('#button');
for(select of dropdown){
  for(let code in countryList){
    let option=document.createElement('option');
    option.value=code;
    option.innerText=code;
    select.append(option)
    if(select.name==='from'&& code=="USD"){
      option.selected='selected'
    }
    if(select.name==='to'&& code=="INR"){
      option.selected='selected'
    }
  }
  select.addEventListener("click",(evt)=>{
    updateflag(evt.target);
  })
}

const updateflag=(evt)=>{
  let flag=evt.value
  let newflag=countryList[flag]
  new_url=`https://flagsapi.com/${newflag}/flat/64.png`;
  console.log(new_url)
  let img=evt.parentElement.querySelector('img');
  img.src=new_url;
}




let updateexhangerate=async()=>{
  let amount= document.body.querySelector("input").value
  console.log(amount)
  let from= document.getElementsByTagName("select")[0].value.toLowerCase();
  console.log(from);
  let to= document.getElementsByTagName("select")[1].value.toLowerCase();
  console.log(to);
  let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`;
  console.log(url);
  let response= await fetch(url);
  console.log(response);
  let y= await response.json();
  console.log(y);
  let run= y[from][to];
  let finalamount=amount*run;
  console.log(finalamount)
  let msg= document.querySelector(".msg")
  msg.innerText=`${amount} ${from.toUpperCase()} = ${finalamount} ${to.toUpperCase()}`;
}

window.addEventListener("load",()=>{
  updateexhangerate()
})

btn.addEventListener("click",(evt)=>{
  evt.preventDefault() ;
  updateexhangerate()
})



