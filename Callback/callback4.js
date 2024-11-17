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

    var x = cb({
        fname:"ramya",
        per:file
    })
    console.log(x);
    
}

var percentage = 81;
if(percentage > 90){
    addmision(percentage,science)
}
else if(percentage > 70){
    addmision(percentage,commerce)
}
else if(percentage > 50){
    addmision(percentage,arts)
}
else{
    console.log("your percentage is very less for addmision..");
    
}