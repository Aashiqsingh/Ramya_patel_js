var array = ["rama","shyam","krishna","rukmani","radha","seeta","rama"];

// var flag = true;
// for(let i=0;i<arr.length;i++){

//     if(arr[i].length < 4)
//     {
//         flag = false;
//     }
// }

// console.log(flag);

// var x = array.some((arr)=>{
    
//     return arr.length < 4
// })

// console.log(x);

// var x = array.some((arr)=>{
//     return arr.startsWith("h")
// })

// console.log(x);

var x = array.some((arr)=> arr.startsWith("h"))
console.log(x);
