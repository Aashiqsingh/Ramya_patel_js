// for(let i=0;i<10;i++){
//     console.log(i);
    
// }



// for(let i=1;i<=5;i++){
//     console.log("*");
    
// }

// var num = 5;
// var fact = 1;
// for(let i=1;i<=num;i++){

//     // fact = fact * i;
//     fact *= i;
// }
// console.log(fact);

// Prime number 

var num = 15;
var flag = false;

for(let i=2;i<num;i++){
    if(num%i == 0){
        flag = true;
    }
}

if(flag == true){
    console.log("Not a Prime number");
    
}
else{
    console.log("prime number");
}
