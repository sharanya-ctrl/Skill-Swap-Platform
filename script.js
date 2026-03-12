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