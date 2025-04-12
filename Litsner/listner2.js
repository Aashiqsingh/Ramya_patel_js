const box = document.getElementsByClassName("box")
console.log(box);

box[0].addEventListener("mouseenter",()=>{
    box[1].style.backgroundColor = "green"
})

box[0].addEventListener("mouseleave",()=>{
    box[1].style.backgroundColor = "red"
})
box[1].addEventListener("click",()=>{
    box[0].style.borderRadius = "50%"
    box[0].style.border = "10px dotted blue"
})


var colors = ["red","green","blue","skyblue","orange","yellow","aqua","teal","pink","purple"]
box[0].addEventListener("mousemove",()=>{
    const randomIndex = Math.floor(Math.random() * colors.length)
    box[2].style.backgroundColor = colors[randomIndex]
})