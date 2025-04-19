const sentMail = ()=>{
    const name = document.getElementById("name").value 
    const email = document.getElementById("email").value 
    const message = document.getElementById("message").value

    const params = {
        name:name,
        email:email,
        message:message
    }

    const serviceId = "service_tjjl6s1";
    const templateId = "template_6yx91gs";

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log("successfully sent email ",res);
        if(res.status == 200)
        {
            alert("Email sent successfully...")
        }
    }).catch((err)=>{
        console.log("something went wrong..",err);
        
    })


    // var user = {
    //     name : name,
    //     email:email,
    //     message:message
    // }

    // console.log(user);


    
}