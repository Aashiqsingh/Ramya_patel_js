function singapore(amount){
    console.log("your singapore trip done with package ",amount);
    
}
function lasvegas(amount){
    console.log("your las vegas trip done with package ",amount);
}

function goa(amount){
    console.log("your goa trip done with package ",amount);
}

// cb -- callback 
function travel(amt,cb){

    cb(amt)
}

var budget = 1300;

if(budget > 3000){
    travel(budget,singapore)
}
else if(budget > 2000){
    travel(budget,lasvegas)
}
else if(budget > 1000){
    travel(budget,goa)
}
else{
    console.log("insufficient budget");
}