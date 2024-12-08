var array = ["ramai","shyami","krishnai","rukmani","radhi","seeti","ramai"];

// var flag = false;
// for(let i=0;i<array.length;i++){
 
//     if(array[i].length > 3)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// var x = array.every((a)=>{
//     return a.length > 5
// })

// console.log(x);


var x = array.every((arr)=>{
    return arr.endsWith("i")
})


console.log(x);
