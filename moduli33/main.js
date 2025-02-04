function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var name_validation = /^[A-Za-z]+$/;
    var age_validation = /^[0-9]+$/;

    if(name.match(name_validation) && age.match(age_validation)){
        return true;
    }else if (!(name.match(name_validation))){
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
        return false;
    }else if (!(age.match(age_validation))){
        document.getElementById("age_error").style.visibility = "visible";
        document.getElementById("age").style.borderColor = "red";
        return false;
    }
}