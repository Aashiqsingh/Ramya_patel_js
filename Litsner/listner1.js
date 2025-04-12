const btn = document.getElementById("btn")
const txt = document.getElementById("txt")

btn.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft pvt ltd."
})

btn.addEventListener("mouseenter",()=>{
    txt.style.backgroundColor = "red"
})

btn.addEventListener("mouseleave",()=>{
    txt.style.height = "200px",
    txt.style.width = "200px"
})