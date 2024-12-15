// var student = {
//     id:1,
//     name:'John Doe',
//     age:20,
//     grade:85
// }



// var arr = [{},{},"michael","geeta","michael"]

var students = [
    {
        id:1,
        name:"ramiya",
        age:20,
        email:"ramya@gmail.com",
        gender:"Male"
    },
    {
        id:2,
        name:"ramesh",
        age:22,
        email:"ramesh@gmail.com",
        gender:"Male"
    },
    {
        id:3,
        name:"priya",
        age:19,
        email:"priya@gmail.com",
        gender:"Female"
    },
    {
        id:4,
        name:"rajvi",
        age:23,
        email:"rajvi@gmail.com",
        gender:"Female"
    }
]

var stu = students.filter(student => student.name.includes("i"));
console.log(stu);




// var names = students.filter(student => student.gender === "Male").map(student => student.name);

// console.log(names);
// const upperCaseNames = students.map(student => student.name.toUpperCase());
// console.log(upperCaseNames);


// name capital case []


// var x = students.filter((stu)=> stu.age > 20)
// console.log(x);

// students.forEach((stu)=>{
//     if(stu.gender === "Female"){
//         console.log(stu);
        
//     }
// })

// var student = students.filter((stu)=>{
//     return stu.gender === "Female"
// })
// console.log(student);



// for(let i=0;i<students.length;i++){

//     if(students[i].gender == "Female"){
//         console.log(students[i]);
        
//     }
// }



// console.log(students);

// console.log(students[0].name);

// for(let i=0;i<students.length;i++){

//     console.log(students[i].name);
    
// }
