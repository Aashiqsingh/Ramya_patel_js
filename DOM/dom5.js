function textChange(){

    var input = document.getElementById("input")
    // console.log(input.value);
    var output = document.getElementById("output");
    
    if(input.value.length < 3)
    {
        // alert("Name must be at least 3 characters..")
        // console.log("name must be at least 3 characters");
        output.innerHTML = "Name must be at least 3 characters"
        input.style.outline = "2px solid red"
    }
    else{
        output.innerHTML = ""
        input.style.outline = "2px solid green"
    }
}