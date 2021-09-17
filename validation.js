let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");


form.addEventListener("submit", e=>{
    e.preventDefault();
    checkInputs();//calling function
});

//function hoisting is working

function checkInputs(){
    let usernameValue = username.value;
    let passwordValue  = password.value;

    if(usernameValue === "" || usernameValue === null){
       //show errors
       //add error classname

       setErrors(username, "username is required")
    }
    else{
           setSuccess(username);
    }

    if(passwordValue === "" || passwordValue === null){
      setErrors(password, "password is required")
    }
    else{
        setSuccess(password);
    }
};//called function
function setErrors(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector("p");
    small.innerHTML = message;
    formControl.className = "form-control error";
}

function setSuccess(input){
let formControl = input.parentElement;
formControl.className = "form-control success"; 
};