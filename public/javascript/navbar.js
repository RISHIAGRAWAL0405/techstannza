var prevScrollpos = window.pageYOffset;
var prevScrollpos1 = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    setTimeout(() => {
      document.querySelector(".nav").style.top = "-60px";
    }, 100);
  }
  prevScrollpos = currentScrollPos;
  if (window.scrollY > 15) {
    document.querySelector(".nav").style.backgroundColor = "white";
    document.querySelector(".nav").style.borderBottom = "0.5px solid lightgrey";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
    document.querySelector(".nav").style.borderBottom = "none";
  }
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  sendLoginRequest(loginForm.username.value, loginForm.password.value);
  e.preventDefault();
});

document.querySelector(".login-error").style.display = "none";
let sendLoginRequest = async (username, password) => {
  let result = await axios.post("http://localhost:3000/auth/login", {
    username: username,
    password: password,
  });
  let data = result.data;
  if (data == "incorrect username or password") {
    document.querySelector(".login-error").style.display = "flex";
    document.querySelector(".login-message").innerText =
      "incorrect username or password";
  } else {
    window.location.reload();
  }
};

let registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (e) => {
  sendRegisterRequest(
    registerForm.username.value,
    registerForm.password.value,
    registerForm.email.value
  );
  e.preventDefault();
});

document.querySelector(".register-error").style.display = "none";
let sendRegisterRequest = async (username, password, email) => {
  let result = await axios.post(
    "https://desolate-badlands-28322.herokuapp.com/auth/register",
    {
      username,
      password,
      email,
    }
  );
  if (result.data == "A user with the given username is already registered") {
    document.querySelector(".register-error").style.display = "flex";
    document.querySelector(".register-message").innerText = result.data;
  } else {
    window.location.reload();
  }
};
