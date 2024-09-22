function isPrime(value){

    var flag = 0;
    let i = 2;
    while(i<value.length){
        if(value%i==0){
            flag = 1;
        }
    }

    if(flag == 0)
    {
        console.log("Prime number...");
        
    }
    else{
        console.log("Not prime number..");
    }
    

}

isPrime(17)