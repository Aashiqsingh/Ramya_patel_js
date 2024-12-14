var language = ["hindi","english","marathi","punjabi","french","urdu","telgu"]


// const deleteLang = (langName)=>{

//     var x = language.filter((lang)=>{
//         return lang != langName
//     })

//     return x
// }

// var x = deleteLang("telgu")
// console.log(x);


// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })
// }

// var x = deleteLang("urdu")
// console.log(x);
// const deleteLang = (langName)=>{

//     // return language.filter((lang)=>{
//     //     return lang != langName
//     // })

//     return language.filter((lang)=> lang != langName)
// }

// var x = deleteLang("urdu")
// console.log(x);

const deleteLang = (langName)=> language.filter((lang)=> lang != langName)

    // return language.filter((lang)=>{
    //     return lang != langName
    // })

     


var x = deleteLang("french")
console.log(x);