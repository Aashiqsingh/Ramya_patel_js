const orderZomato = ()=>{

    console.log("Food are going to placed...");
    

    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId: 101,
                message:"Order placed successfully...",
                amount:499
            })
        },3000)
    })
}

const paymentZomato = (data)=>{

    console.log("payment is going to completed...");
    
    return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment have successfully..",
                amount:data.amount
            })
        },4000)
    })
    
}


orderZomato().then((data)=>{
    console.log("food is ordered successfully...",data);
    paymentZomato(data).then((payment)=>{
        console.log("payment completed sucessfully..",payment);
        
    }).catch((error)=>{
        console.log("payement canceldd ...",error);
        
    })
    
}).catch((err)=>{
    console.log("error in oredr food  ",err);
    
})