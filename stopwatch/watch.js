var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var hours = 0;
var mins = 0;
var secs = 0;

const start2 = ()=>{

    secs++
    if(secs == 60)
    {
        secs = 0;
        mins++
    }
    else if(mins == 60)
    {
        mins = 0;
        hours++
    }

    // console.log(secs);
    sec.innerHTML = secs < 10 ? "0"+secs : secs
    min.innerHTML = mins < 10 ? "0"+mins : mins
    hour.innerHTML = hours < 10 ? "0"+hours : hours
    
}

var x;
const start = ()=>{
    x = setInterval(()=>{
        start2()
    },1000)
}


const stop = () =>{
    clearInterval(x)
}

const reset = ()=>{
    clearInterval(x)
    secs = 0;
    mins = 0;
    hours = 0;

    sec.innerHTML = "0"+secs 
    min.innerHTML = "0"+mins 
    hour.innerHTML = "0"+hours
}