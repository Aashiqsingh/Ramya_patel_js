const getData = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers: {
                "x-api-key": "reqres-free-v1"
            }
    })

    // console.log(response);
    const res = await response.json();
    console.log(res.data);


    const tbody = document.getElementById("tbody");

    res.data.forEach((data)=>{
        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        const firstNameTd = document.createElement("td");
        const lastNameTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const avatarTd = document.createElement("td");
        const img = document.createElement("img");
        idTd.innerText = data.id;
        firstNameTd.innerText = data.first_name;
        lastNameTd.innerText = data.last_name;
        emailTd.innerText = data.email;
        img.src = data.avatar;
        // avatarTd.innerText = data.avatar;
        tr.appendChild(idTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(avatarTd);
        avatarTd.appendChild(img);
        tbody.appendChild(tr);
    })

}