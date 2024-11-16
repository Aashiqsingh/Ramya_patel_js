var employee = {
    id:101,
    name:"rahul",
    email:"rahul@gmail.com",
    salary:56000,
    designation: "HR",
    Address:{
        house_no: 235,
        street: "C G Road",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        pincode: 380015
    },
    joining_date: "18-09-2019",
    mobile:[8394828723 , 23762983789 , 3879269283]
}

console.log(employee);
console.log(employee.name);
console.log(employee.email);
console.log(employee.salary);
console.log(employee.Address);
console.log(employee.Address.city);
console.log(employee.Address.state);
console.log(employee.mobile);
console.log(employee.mobile[0]);

for(let i=0;i<employee.mobile.length;i++){
    console.log(employee.mobile[i]);
    
}








