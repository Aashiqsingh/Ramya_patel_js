const submitHanlder = (e)=>{
    // event.preventDefault();
    e.preventDefault(); // prevent the form from submitting
    // alert("Form submitted...");
    console.log("Form submitted...");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var nameErr = document.getElementById("nameErr");

    if(name.value == ""){
        nameErr.innerHTML = "Name must be required..";
    }
    else if(name.value.length < 5)
    {
        // console.error("Name should be at least 5 characters..");
        nameErr.innerHTML = "*Name must be at least 5 characters..";
        nameErr.style.color = "red";
    }


    // console.log(name.value);
    // console.log(email.value);

    var user = {
        name:name.value,
        email:email.value
    }
    console.log(user);

    var output = document.getElementById("output");
    // output.innerHTML = user.name + " " + user.email;
    output.innerHTML = JSON.stringify(user);
    
    
}