const submitHandler = async(event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;


    
    // console.log(data);

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            age,
            gender,
            email,
            status
        })
    })

    console.log(response);
    const res = await response.json();
    console.log(res);
    
    
}