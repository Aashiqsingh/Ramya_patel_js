const postData = async()=>{

    var users = {
        name:"aashiq",
        age:24,
        email:"aashiq@gmail.com",
        password:"123456",
        isActive:true
    
    }

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers: {
                "Content-Type": "application/json"
            },
        body:JSON.stringify(users)
    });

    console.log(response);
    const res = await response.json()
    console.log(res);
}