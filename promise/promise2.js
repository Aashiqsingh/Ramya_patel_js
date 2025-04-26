const getData = ()=>{

    const promise = new Promise((success,failure)=>{

        setTimeout(()=>{
            success({
                status:200,
                message:"Data fetched successfully...",
            })
        },4000)
    })

    // console.log(promise);

    return promise
    


}


getData().then((data)=>{
    console.log("data.....",data);
    
}).catch((err)=>{
    console.log("error...",err);
    
})






// var ans = getData()

// ans.then((data)=>{
//     console.log(data);
    
// })
// ans.catch((err)=>{
//     console.log(err);
    
// })