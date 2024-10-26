const science = (per)=>{

    return "You selected in science stream with per " + per;
}

const commerce = (per)=> "you selected in commerce stream with per " + per

const arts = (per)=> "You selected in arts stream with per " + per

var percentage = 86;
var flag

if(percentage > 90){
    flag = science(percentage)
}
else if(percentage > 70){
    flag = commerce(percentage)
}
else if(percentage > 50){
    flag = arts(percentage)
}

console.log(flag);
