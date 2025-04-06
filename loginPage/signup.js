function signup(event){
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const age = document.getElementById("age");


    var user = {
        name: name.value,
        email: email.value,
        password: password.value,
        age: age.value
    }
    console.log(user);

    localStorage.setItem("email",user.email);
    localStorage.setItem("password",user.password);
    
    alert("Signup successfully completed...");
    location.href = "./login.html";
}

function Login(){
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if(email === loginEmail.value && password === loginPassword.value)
    {
        alert("Login Successful...");
    }
    else{
        alert("Invalid credentials..");
    }
}