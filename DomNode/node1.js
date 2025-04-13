const mydiv = document.getElementById("mydiv");


var h1 = document.createElement("h1")
h1.innerHTML = "Royal technosoft p ltd."


var img = document.createElement("img")
img.setAttribute("src","https://myrightbird.com/assets/uploads/mybird_sun_conure_on_perch.jpg")
img.style.height = "200px";
img.style.width = "200px";


var anchor = document.createElement("a")
anchor.href = "https://amazon.com";
anchor.innerHTML = "amazon"
anchor.addEventListener("mouseenter",()=>{
    anchor.href = "https://netflix.com";
    anchor.innerHTML = "Netflix"
})



mydiv.appendChild(h1)
mydiv.appendChild(img)
mydiv.appendChild(anchor)