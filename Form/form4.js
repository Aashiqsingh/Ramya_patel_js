const submitHandler = (event)=>{
    event.preventDefault();
    // regex : regular expression

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const mobile = document.getElementById("mobile").value;


    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const ageErr = document.getElementById("ageErr");
    const mobileErr = document.getElementById("mobileErr");
    

    // let namePattern = /[A-Za-z]+$/
    let namePattern = /[A-Za-z]+$/

    if(name == "")
    {
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = "red"
    }
    else if(name.match(namePattern))
    {
        // alert("Name is valid")
        nameErr.innerHTML = "Name is valid"
        nameErr.style.color = "green"
    }
    else{
        // alert("Name is invalid")
        nameErr.innerHTML = "Name is invalid"
        nameErr.style.color = "red"
    }

    let mobilePattern = /[6-9]{1}[0-9]{9}$/;
    if(mobile == "")
    {
        mobileErr.innerHTML = "Mobile is required";
        mobileErr.style.color = "red"
    }
    else if(mobile.match(mobilePattern)){
        // alert("Mobile is valid")
        mobileErr.innerHTML = "Mobile is valid"
        mobileErr.style.color = "green"
    }
    else{
        // alert("Mobile is invalid")
        mobileErr.innerHTML = "Mobile is invalid"
        mobileErr.style.color = "red"
    }

    if(age == "")
    {
        ageErr.innerHTML = "Age is required"
        ageErr.style.color = "red"
    }

    let emailPattern = /[a-z0-9]+[@]{1}[a-z]+\.[a-z]+$/
    if(email == "")
    {
        emailErr.innerHTML = "Email is required"
        emailErr.style.color = "red"
    }
    else if(email.match(emailPattern)){
        // alert("Email is valid")
        emailErr.innerHTML = "Email is valid"
        emailErr.style.color = "green"
    }
    else{
        // alert("Email is invalid")
        emailErr.innerHTML = "Email is invalid"
        emailErr.style.color = "red"
    }




    // var user = {
    //     name: name,
    //     email: email,
    //     age: age,
    //     mobile: mobile
    // }

    // console.log(user);
    
}