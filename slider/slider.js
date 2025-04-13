const prev = document.getElementById("prev");
const next = document.getElementById("next");

var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]
var img = document.getElementById("img")

var currentIndex = 0;
prev.addEventListener("click",()=>{

                    //    ( 3 - 1 + 5)% 5
    currentIndex = (currentIndex - 1 + images.length) % images.length
    console.log(currentIndex);

    img.src = "../Image/" + images[currentIndex]
    

    
})




// next.addEventListener("click",()=>{
//                         // 2 + 1 % 5
//     currentIndex = (currentIndex + 1) % images.length
//     console.log(currentIndex);
//     img.src = "../Image/" + images[currentIndex]
    
// })