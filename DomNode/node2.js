const mydiv = document.getElementById("mydiv")


function getDiv(){
    const div = document.createElement("div");
    // div.innerHTML = "hello"
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.backgroundColor = "red"



    mydiv.appendChild(div);
}