const btn=document.querySelector(".btn");
const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const confirmpassword=document.querySelector("#confirmpassword")



const nameError=document.querySelector("#nameError")
const emailError=document.querySelector("#emailError");
const passError=document.querySelector("#passError");
const cpassError=document.querySelector("#cpassError");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



btn.addEventListener("click",()=>{
//  ==name validation==
    if(!username.value){
        nameError.innerHTML="name is required"
        username.style.border="1px solid red"

    }else if(username.value.length>16 || username.value.length<4){
        nameError.innerHTML="max length is 16 and min length is 4"
           username.style.border="1px solid red"

    }else{
        nameError.innerHTML=""
           username.style.border="1px solid gray"
    }
    // ==email validation
    if(!email.value){
        emailError.innerHTML="email is required"
        email.style.border="1px solid red"
    }else if(!emailRegex.test(email.value)){
           emailError.innerHTML="email is not valid"
        email.style.border="1px solid red"
    }else{
           emailError.innerHTML=""
        email.style.border="1px solid gray"
    }
    // ==password validation
    if(!password.value){
        passError.innerHTML="password required"
        password.style.border="1px solid red"
    }else if(!strongRegex.test(password.value)){
         passError.innerHTML="make more strong password"
        password.style.border="1px solid red"


    }else{
        passError.innerHTML=""
        password.style.border="1px solid red"
    }
    // ==confirm password validation
    if(!confirmpassword.value){
        cpassError.innerHTML="confirm pass is required"
        confirmpassword.style.border="1px solid red";
    }else if(!password.value!==confirmpassword.value){
         cpassError.innerHTML="not matched"
        confirmpassword.style.border="1px solid red";


    }else{
          cpassError.innerHTML=""
        confirmpassword.style.border="1px solid gray";
    }
    
})