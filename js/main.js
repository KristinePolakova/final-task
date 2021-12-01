document
  .getElementById("chat-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const taskInputUsername = document.getElementById("username");
    let today = new Date();
    let date = ("0" + today.getDate()).slice(-2) + "." + (today.getMonth() + 1) + "." + today.getFullYear();
    let min = String(today.getMinutes()).padStart(2, "0");
    let hours = String(today.getHours()).padStart(2, "0");
    let time = hours + ":" + min;
    let dateAndTime = date + " " + time;
    
    const taskInputMessage = document.getElementById("message");
    const newMessage = `<div class="border-bottom border-dark">
    <div class="d-flex flex-row">
      <div class="p-2 usernamePadding"><h5>${taskInputUsername.value}</h5></div>
      <div class="p-2"><span>${dateAndTime}</span></div>
    </div>
    <div class="row">
      <div class="col mx-2">
        <div>
          <p>
          ${taskInputMessage.value}
          </p>
        </div>
      </div>
    </div>
  </div>`

  document.getElementById("chat-username-date").innerHTML += newMessage;

    taskInputUsername.value = "";
    taskInputMessage.value = "";
  });

function verifyForm(){
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;  
  if(password.length < 8) {  
    document.getElementById('password-message').innerHTML = "Password length must be atleast 8 characters";  
    return false;  
  } 
  if(password2.length < 8) {  
    document.getElementById('password-message').innerHTML = "Retyped password length must be atleast 8 characters";  
    return false;  
 }  
 if(password != password2)  
 {   
  document.getElementById('password-message').innerHTML = `<span style="color:red">"Passwords must match"</span>`
  return false;
 } else {  
  document.getElementById('password-message').innerHTML = `<span style="color:green">"Passwords match"</span>`
    return false; 
 } 
}
 
  



