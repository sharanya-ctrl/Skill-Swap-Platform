
function requestSwap(){
alert("✅ Skill swap request sent successfully!");
}

function searchSkills(){

let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let text=cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

function addUser(){

let name=document.getElementById("name").value;
let teach=document.getElementById("teach").value;
let want=document.getElementById("want").value;

let card=document.createElement("div");
card.className="card";

card.innerHTML=
"<h3>"+name+"</h3>"+
"<p>Teaches: "+teach+"</p>"+
"<p>Wants: "+want+"</p>"+
"<button onclick='requestSwap()'>Request Swap</button>";
}
document.getElementById("users").appendChild(card);

//authentication 
function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function showLogin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function forgotPassword(){
  alert("Password reset link will be sent to your email.");
}

// SIGNUP FUNCTION
async function signupUser() {

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const response = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });

  const result = await response.text();
  alert(result);
}

// LOGIN FUNCTION
async function loginUser() {

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  const result = await response.text();

  if(result === "Login successful"){
      window.location.href = "dashboard.html";
  } else {
      alert(result);
  }


}