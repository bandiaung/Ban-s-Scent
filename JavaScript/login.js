const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');

const userNameSpan = document.getElementById('username-span');
const emailSpan = document.getElementById('email-span');
const passwordSpan = document.getElementById('password-span');


emailInput = email.value;

loginBtn.addEventListener("click", ()=>{

  // userName start//
  if(userName.value !== ''){
    if(userName.value.length >= 5){
      userNameSpan.classList.add('change-color');
      userNameSpan.textContent = "Valid!";
    }else{
      userNameSpan.textContent = "Username must be at least 5 character long!"
    }
  }else{
    userNameSpan.textContent = "Username Require!!"
  }

// userName End//

// email start//
   if(email.value !== ''){
    if(email.value){
      emailSpan.classList.add('change-color')
      emailSpan.textContent = "Valid!"
    }else{
      emailSpan.textContent = "Email is not Valid!"
    }
    
  }else{
    emailSpan.textContent = "Email Require!!"
  }
  // email end//

// password start//
   if(password.value !== ''){
    if(password.value === 'bansscent'){
      passwordSpan.classList.add('change-color')

      passwordSpan.textContent = "Valid"
    }else{
      passwordSpan.textContent = "Wrong Password"
    }
  }else{
    passwordSpan.textContent = "Password Require!!"
  }
  // password end//
})