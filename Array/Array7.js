var language = ["hindi","english","marathi","punjabi","french","urdu","telgu"]


var deleteLang = "punjabi";

var x = language.filter((lang)=>{
    return lang !== deleteLang;
})
console.log(x);










// map : it will return new Array with same length

// var x  = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(x);

// filter : it will return new Array with modified data

// var x = language.map((lang)=>{
//     return lang.length > 5
// })
// console.log(x);




// var x = language.filter((lang)=>{
//     return lang.length > 5
// })

// console.log(x);


// language.forEach((lang)=>{
//     if(lang.length > 5){
//         console.log(lang);
        
//     }
// })
