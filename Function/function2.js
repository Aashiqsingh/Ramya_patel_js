function science(name,per){

    console.log(name +" your addmission confirm in science stream with per "+per);
    
}

function commerce(name,per){
    console.log(name +" your addmission confirm in commerce stream with per "+per);
}

function arts(name,per){
    console.log(name +" your addmission confirm in arts stream with per "+per);
}


var percentage = 45;

if(percentage > 90)
{
    science("ramya",percentage)
}
else if(percentage > 70)
{
    commerce("ramya",percentage)
}
else if(percentage > 50){
    arts("ramya",percentage)
}
else{
    console.log("Ramya not eligible for admission");
}