const wordHandler = (option)=>{
    return option.file + " word file"
}

const pngHandler  = (option)=>{
    return option.file + " PNG file" + option.size
}

const jpgHandler  = (option)=>{
    return option.file + " JPEG file"
}

const pdfHandler  = (option)=>{
    return option.file + " PDF file" 
}
// cb : callback 
const Handler = (files,cb)=>{

    var x = cb({file:files,size:"2000kb"})
    console.log(x);
    
}


var file = "abc.png";

if(file.endsWith(".word")){
    Handler(file,wordHandler)
}
else if(file.endsWith(".png")){
    Handler(file,pngHandler)
}
else if(file.endsWith(".jpg")){
    Handler(file,jpgHandler)
}
else if(file.endsWith(".pdf")){
    Handler(file,pdfHandler)
}