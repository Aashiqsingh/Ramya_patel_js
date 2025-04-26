const getData = ()=>{
    console.log("stating fetching data....");
    

    const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data fetched successfully....");
            // reject("problem to fetching data something error..");
        },4000)

    })

    console.log(promise);
    promise.then((data)=>{
        console.log("data...",data);
        console.log("Ending fetching data.....");
        
    })
    promise.catch((err)=>{
        console.log("err....",err);
        
    })


    
    
    




}