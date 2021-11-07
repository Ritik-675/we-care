var user = document.querySelector("#inputUsernameEmail") ;
var pass = document.querySelector("#inputPassword") ;
var butt = document.querySelector(".button-submit") ;
var out = document.querySelector(".out-display") ;
function loginPage(){
    if(user.value==="isha" && pass.value==="isha"){
        window.open("./home.html","_self");
    }else{
        out.innerHTML = "**Incorrect Credentials**" ;
    }
}
butt.addEventListener("click",loginPage) ;