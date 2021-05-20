var prevScrollpos = window.pageYOffset;
var prevScrollpos1 = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".c-navbar").style.top = "0";
  } else {

    setTimeout(()=>{
      document.querySelector(".c-navbar").style.top = "-60px";
    },100);
    
  }
  prevScrollpos = currentScrollPos;
  var currentScrollPos1 = window.pageYOffset;
  if (prevScrollpos1 > currentScrollPos1) {
    document.querySelector(".second-nav").style.top = "50px";
  } else {
    setTimeout(()=>{
       document.querySelector(".second-nav").style.top = "-100px";
    },100);
   
  }
  prevScrollpos1 = currentScrollPos1;
  


}




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }


  

  let loginForm=document.querySelector(".login-form");
  loginForm.addEventListener("submit",(e)=>{
    sendLoginRequest(loginForm.username.value,loginForm.password.value);
    e.preventDefault();

  });

  document.querySelector(".alert-danger").style.display="none";
  let sendLoginRequest=async (username,password)=>{
      let result=await axios.post("http://localhost:3000/login",{
         username:username,
         password:password 
      });     
      let data=result.data;
      if(data=="incorrect username or password"){
        document.querySelector(".alert-danger").style.display="block";
        document.querySelector(".error-message").innerText="incorrect username or password";
      }
      else{
        window.location.reload();
      }
      
     
  } 
 




