function saveData(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    // console.log(email + " " + pass);

    localStorage.setItem("email",email)
    localStorage.setItem("pass",pass)
    
}

function getData(){

    let email2 = localStorage.getItem("email")
    let pass2 = localStorage.getItem("pass")



    console.log("Data from local storage: " + email2 + " " + pass2);

}