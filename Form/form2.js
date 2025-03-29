function submitHandler(event){
    // alert("Form submitted..");

    event.preventDefault(); // prevent the form from submitting

    let name = document.getElementById("name")
    let age = document.getElementById("age");
    let output = document.getElementById("output");
    let nameErr = document.getElementById("nameErr");
    let ageErr = document.getElementById("ageErr");
    let mobile = document.getElementById("mobile")
    let mobileErr = document.getElementById("mobileErr");

    if(name.value == "")
    {
        // alert("Name is required.");
        nameErr.innerHTML = "*Name is required";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 4)
    {
        // alert("Name should be at least 4 characters long.");
        nameErr.innerHTML = "*Name should be at least 4 characters long.";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    }

    if(age.value == ""){
        ageErr.innerHTML = "*Age is required";
        ageErr.style.color = "red";
    }
    else if(age.value < 18){
        ageErr.innerHTML = "*Age must be greater than 18";
        ageErr.style.color = "red";
    }else{
        ageErr.innerHTML = age.value;
        ageErr.style.color = "green";
    }

    if(mobile.value == ""){
        mobileErr.innerHTML = "*Mobile is required";
        mobileErr.style.color = "red";
    }
    else if(mobile.value.startsWith("6") || mobile.value.startsWith("7") || mobile.value.startsWith("8") || mobile.value.startsWith("9") && mobile.value.length == 10){
        mobileErr.innerHTML = mobile.value;
        mobileErr.style.color = "green";
    }
    // else if(mobile.value.length == 10){
    //     mobileErr.innerHTML = mobile.value;
    //     mobileErr.style.color = "green";
    // }
    else{
        mobileErr.innerHTML = "*Mobile number must be 10 digits";
        mobileErr.style.color = "red";
    }




    // output.innerHTML = name.value + " " + age.value

    console.log("Form submitted...");
    // console.log(name);
    // console.log(age.value);
    // var user = {
    //     name:name.value,
    //     age:age.value
    // }
    // console.log(user);

    // output.innerHTML = user
    // let ans = JSON.stringify(user)
    // output.innerHTML = ans
    // console.log(ans[0]);
    
    
    
}