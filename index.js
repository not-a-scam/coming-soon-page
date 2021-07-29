function validateEmail(){
    const inputEmail = document.forms["emailForm"]["email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(inputEmail).toLowerCase())){
        console.log(inputEmail);
        return false;
    } else {
        document.forms["emailForm"].classList.add("warning");
        document.forms["emailForm"].classList.remove("no-warning");
        return false;
    }
    
}

function onEmailChange(){
    const emailForm = document.forms["emailForm"];
    if(emailForm.classList.contains("warning")){
        document.forms["emailForm"].classList.add("no-warning");
        document.forms["emailForm"].classList.remove("warning");
    }
}