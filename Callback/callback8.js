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
// const Handler = (files,cb)=>{

//     // var x = cb({file:files,size:"2000kb"})
//     // console.log(x);

//     return cb({file:files,size:"2000kb"})
    
// }

const Handler = (files,cb)=> cb({file:files,size:"2000kb"})


var file = "abc.word";
var flag;

if(file.endsWith(".word")){
    flag = Handler(file,wordHandler)
}
else if(file.endsWith(".png")){
    flag = Handler(file,pngHandler)
}
else if(file.endsWith(".jpg")){
    flag = Handler(file,jpgHandler)
}
else if(file.endsWith(".pdf")){
    flag = Handler(file,pdfHandler)
}

console.log(flag);
