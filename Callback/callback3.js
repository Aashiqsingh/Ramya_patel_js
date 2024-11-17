const science = (option)=>{

    console.log(option.fname + " your addmission confirm in science stream with percentage ",option.per);
    
}

const commerce = (option)=>{
    console.log(option.fname + " your addmission confirm in commerce stream with percentage ",option.per);
}

const arts = (option)=>{
    console.log(option.fname + " your addmission confirm in arts stream with percentage ",option.per);
}

// cb -- callback 
const addmision = (file,cb)=>{

    cb({
        fname:"ramya",
        per:file
    })
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