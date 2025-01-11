
var colors = ["red","green","yellow","blue","pink","purple","black","brown"];
function changeColor(){
    var mydiv = document.getElementById("mydiv");

    var randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);


    mydiv.style.backgroundColor = colors[randomIndex]

}