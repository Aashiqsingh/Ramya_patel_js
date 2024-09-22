function science(name,per){

    return name + " your addimission confirm in science stream with per " + per
    
}

function commerce(name,per){
    return name + " your addimission confirm in commerce stream with per " + per
   
}

function arts(name,per){
    return name + " your addimission confirm in arts stream with per " + per
}


var percentage = 87;
var flag;

if(percentage > 90)
{
    flag = science("ramya",percentage)
}
else if(percentage > 70)
{
    flag = commerce("ramya",percentage)
}
else if(percentage > 50){
    flag = arts("ramya",percentage)
}
else{
    console.log("Ramya not eligible for admission");
}

console.log(flag);
