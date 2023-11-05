let form =document.querySelector("#form");
let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let cpassword=document.querySelector("#cpassword");
let radiobtn = document.querySelector("#radio")
let search = document.querySelector("#search");
let order = document.querySelector("#orderbtn");




form.addEventListener("submit",(e)=>{
   if(!validate()){
    e.preventDefault();
   }
   else{
    validate();
   }
})

function validate(){
    const fnameval = fname.value.trim();
    const lnameval = lname.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let register=true;

    if(fnameval===""){
        register=false;
        error(fname,"please enter your Firstname")
    }
    else{
        success(fname);
    }
    if(lnameval===""){
        register=false;
        error(lname,"please enter your Lastname")
    }
    else{
        success(lname);
    }
    if (emailval===""){
        register=false;
        error(email,"please enter your email id");
    }
    else if(!emailvalidate(emailval)){
        register=false;
        error(email,"please enter correct mail format");
    }
    else{
        success(email);
    }
    if(passwordval===""){
        register=false;
        error(password,"please enter your password");
    }
    else if(passwordval.length<8){
        register=false;
        error(password,"password should be atleast eightcharacter");
    }
    else{
        success(password);
    }
    if(cpasswordval===""){
        register=false;
        error(cpassword,"please confirm your password");
    }
    else if(cpasswordval!==passwordval){
        register=false;
        error(cpassword,"confirm password is mismatch");
    }
    else{
        success(cpassword);
    }
    if(!(radiobtn).checked){
        error(radiobtn,"please read and agree our terms and conditions")
    }
    else{
        success(radiobtn)
    }

}
function error(element,message){
    let input = element.parentElement;
    let errorelement = input.querySelector(".error")
    errorelement.innerText=message;

    input.classList.add("error");
    input.classList.remove("success")
}

function success(element){
    let input = element.parentElement;
    let errorelement = input.querySelector(".error")
errorelement.innerText=""
    input.classList.add("success");
    input.classList.remove("error")
}
const emailvalidate =(email)=>{
        return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
     }





    //  --------------hambuger menu part=---------------------

    const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});
