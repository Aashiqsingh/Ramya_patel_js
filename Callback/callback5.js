const science = (option)=>{

    return option.fname + " your adsmision confirm in science stream with per " + option.per    
    
}

const commerce = (option)=>{
    
    return option.fname + " your adsmision confirm in commerce stream with per " + option.per

}

const arts = (option)=>{
    
    return option.fname + " your adsmision confirm in arts stream with per " + option.per

}

// cb -- callback 
const addmision = (file,cb)=>{

    // var x = cb({
    //     fname:"ramya",
    //     per:file
    // })
    // console.log(x);

    return cb({fname:"ramya",per:file})
    
}

var percentage = 48;
var flag;
if(percentage > 90){
    flag = addmision(percentage,science)
}
else if(percentage > 70){
    flag = addmision(percentage,commerce)
}
else if(percentage > 50){
    flag = addmision(percentage,arts)
}
else{
    console.log("your percentage is very less for addmision..");
    
}
console.log(flag);
