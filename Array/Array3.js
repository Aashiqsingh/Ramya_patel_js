// var arr = [34,56,22,158,44,67,89];


// var max = arr[0]
// for(let i=1;i<arr.length;i++)
// {

//     if(max < arr[i])
//     {
//         max = arr[i];
//     }
// }

// console.log("Maximum number is =",max);



var arr = ["ram","krishna","ravan","lakshman","hanuman","spiderman"];

var max = arr[0];

for(let i=1;i<arr.length;i++){
    if(max.length < arr[i].length){
        max = arr[i];
    }
}

console.log(max);
