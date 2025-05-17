let thead = document.getElementById("thead")
thead.style.display = "none"

const getData = async () => {
    const response = await fetch("https://node5.onrender.com/user/user", {
        method: "GET"
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);


    thead.style.display = ""
    let tbody = document.getElementById("tbody")


    for (let i = 0; i < res.data.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let passwordTd = document.createElement("td")
        let isActiveTd = document.createElement("td")
        let actionTd = document.createElement("td")
        let btnTd = document.createElement("button")
        btnTd.innerHTML = "DELETE";
        btnTd.setAttribute("class","btn btn-danger")
        btnTd.addEventListener("click",async()=>{
            // alert(res.data[i]._id)

            const response = fetch("https://node5.onrender.com/user/user/"+res.data[i]._id,{
                method:"DELETE"
            })
            console.log(response);
            response.then((res)=>{
                console.log(res);
                if(res.status === 204)
                {
                    alert("Deleted Successfully")
                    // getData()
                    tr.remove()
                }
            })
            
            
            
        })

        idTd.innerHTML = res.data[i]._id
        nameTd.innerHTML = res.data[i].name
        emailTd.innerHTML = res.data[i].email
        passwordTd.innerHTML = res.data[i].password
        isActiveTd.innerHTML = res.data[i].isActive



        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(passwordTd)
        tr.appendChild(isActiveTd)
        tr.appendChild(actionTd)
        actionTd.appendChild(btnTd)
    }
}