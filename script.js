let submitbtn =document.getElementById('submitbtn');
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "arslanshahbaz522",
    "email": "arslanshahbaz522@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  };
submitbtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    let email= document.getElementById('username').value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_OA8l3NJsi0qFaX4gj0XWqopiNvTNI6rmtRTvECpF&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let str = ``;
  for (let key of Object.keys(result)){
      str= str+ `<div>${key}: ${result[key]} </div>`
  }
  let resultcont=document.getElementById('resultcont');
  resultcont.innerHTML=str;
})




  