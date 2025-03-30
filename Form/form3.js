const submitHandler = (e)=>{
    e.preventDefault();

    var name = document.getElementById("name")
    var age = document.getElementById("age");
    var gender = document.getElementsByName("gender")
    // console.log(gender);
    
    let gen = '';

    if(gender[0].checked)
    {
        gen = "Male";
    }
    else if(gender[1].checked){
        gen = "Female";
    }else{
        gen = "Other";
    }

    // console.log(gen);
    let message = '';

    if(gen === "Male")
    {
        if(age.value > 18)
        {
            // console.log("You are eligible for vote..");
            message = "You are eligible for vote..";
        }
        else{
            // console.log("You are not eligible for vote..");
            message = "You are not eligible for vote..";
        }
    }
    else if(gen === "Female"){
        if(age.value > 21){
            // console.log("You are eligible for vote..");
            message = "You are eligible for vote..";
        }
        else{
            // console.log("You are not eligible for vote..");
            message = "You are not eligible for vote..";
        }
    }
    else{
        if(age.value > 25){
            // console.log("You are eligible for vote..");
            message = "You are eligible for vote..";
        }
        else{
            // console.log("You are not eligible for vote..");
            message = "You are not eligible for vote..";
        }
    }

    var data = {
        name:name.value,
        age:age.value,
        gender:gen,
        message:message
    }
    console.log(data);
    
    
    
    
}