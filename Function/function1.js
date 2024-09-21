// without return type without arguments

function demo()
{
    console.log("hello demo function called ....");
    
}

// demo()


// with argument without return type
function add(a,b){

    console.log("addition = ",a+b);
    
}

// add(10,12)
// var x = parseInt(prompt("enter first number "))
// var y = parseInt(prompt("enter second number "))

// add(x,y)

// without argument with return type 

function square()
{

    var l = 7;
    var b = 8;
    // var x = l*b

    return l*b;
}


// var x = square()
// console.log("Area of square = ",x);


// with return type with argument 

function mul(x,y){

    return x*y;
}

var x = mul(3,4)
console.log("multiply ....",x);
