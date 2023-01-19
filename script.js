function formValidate(){
    console.log("dfkdshf ")
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(fname == ""){
        alert("First Name should fill");
        return false;

    }
    console.log("dsfdfdsf");
    if(lname == ""){
        alert("Last Name should fill");
        return false;
        
    }
    if(email == ""){
        alert("Email should fill");
        return false;
        
    }
    console.log("dsfdfdsf");
    if(password == ""){
        alert("Password should fill");
        return false;
        
    }else if(confirmPassword != password){
            alert("Password not match");
            return false;
            
        }
    
    return true;
    
}