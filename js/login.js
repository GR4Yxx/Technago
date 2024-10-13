const user=document.getElementById('username');
const pass=document.getElementById('password');
const form = document.getElementById('loginform');
const uerror = document.getElementById('usererror');
const perror = document.getElementById('passerror');
var error= 0;

function uerrorx(error_msg){
    uerror.innerHTML=error_msg;
    user.style.borderColor="red";
    error=1;

}

function perrorx(error_msg){
    perror.innerHTML=error_msg;
    pass.style.borderColor="red";
    error=1;

}



form.addEventListener('submit',(e)=>{
    if(user.value === ''||user.value == null){
        uerrorx("*Please fill in this field")
        
    }
    else if(pass.value === ''||pass.value == null){
        perrorx("*Please enter a password.")
        
    }

    else if(pass.value.length<=6){
        perrorx("*Password must be over 6 characters.")
    }
    else{
        perrorx("*Your account doesnt exist,Please Register!")
        uerrorx("")
    }
    if(error!=0){
        e.preventDefault()
        error=0;

    }
    
})


