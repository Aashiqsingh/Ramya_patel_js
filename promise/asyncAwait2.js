const getOrder = ()=>{

    console.log("Food order is going to placed...");
    

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({
            //     orderId:101,
            //     message:"Order placed successfullyy...",
            //     amount:445
            // })
            reject({
                orderId:null,
                message:"Some error in food order..."
            })
        },4000)
    })
}


const payment = (data)=>{
    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payemnt of food have been successfully...",
                amount:data.amount
            })
        },3000)
    })
}


// getOrder().then((res)=>{
//     console.log("order data. ...",res);
//     payment(res).then((data)=>{
//         console.log("payemnt data....",data);
        
//     }).catch((error)=>{
//         console.log("payment err ....",error);
        
//     })
    
// }).catch((err)=>{
//     console.log("food order err.....",err);
    
// })


// async function getData(){
//     let ans = await getOrder()
//     console.log("food data.....",ans);

//     let ans2 = await payment(ans)
//     console.log("payment data...",ans2);
    



//     console.log("Ending zomato order....");
    
    
// }

// getData()


// --------------------------------------------------------
// arrow function 


const getData = async()=>{
    let ans = await getOrder()
    console.log("food data.....",ans);

    let ans2 = await payment(ans)
    console.log("payment data...",ans2);
    



    console.log("Ending zomato order....");
    
    
}

getData()