const getData = ()=>{

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched succeffullyy..",
                status:200
            })
        },4000)
    })


}

const get = async()=>{
    console.log("Starting fetching dat...");
    
    const res = await getData()
    console.log("res....",res);
    

    console.log("ending fetching data....");
    
}

get()