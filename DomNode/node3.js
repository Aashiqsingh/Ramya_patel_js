var student = [
    {
        id:1,
        name:"rahul",
        age:25,
        email:"rahul@gmail.com",
        gender:"male"
    },
    {
        id:2,
        name:"harsh",
        age:23,
        email:"harsh@gmail.com",
        gender:"male"
    },
    {
        id:3,
        name:"priya",
        age:22,
        email:"priya@gmail.com",
        gender:"female"
    },
    {
        id:4,
        name:"ramya",
        age:16,
        email:"ramya@gmail.com",
        gender:"male"
    },
    {
        id:5,
        name:"samir",
        age:22,
        email:"samir@gmail.com",
        gender:"male"
    }
]


var tbody = document.getElementById("tbody");
const addData = ()=>{

    for(let i=0;i<student.length;i++)
    {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td")
        const tdName = document.createElement("td")
        const tdAge = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdGender = document.createElement("td")

        tdId.innerHTML = student[i].id
        tdName.innerHTML = student[i].name
        tdAge.innerHTML = student[i].age
        tdEmail.innerHTML = student[i].email
        tdGender.innerHTML = student[i].gender




        tbody.appendChild(tr);
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdEmail)
        tr.appendChild(tdGender)
    }
}