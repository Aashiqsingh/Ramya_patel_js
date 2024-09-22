function lasvegas(fname,amount){
    return fname + " your picnic confirm in lasvegas with budget " + amount
}

function singapore(fname,amount){
    return fname + " your picnic confirm in singapore with budget " + amount
}

function philippines(fname,amount){
    return fname + " your picnic confirm in philippines with budget " + amount
}

function goa(fname,amount){
    return fname + " your picnic confirm in goa with budget " + amount
}

var budget = 2500;
var firstname = "Rahul"

var output;

if(budget > 3500)
{
    output = lasvegas(firstname, budget);
}
else if(budget > 2500)
{
    output = singapore(firstname, budget);
}
else if(budget > 1500){
    output = philippines(firstname, budget);
}
else if(budget > 1000){
    output = goa(firstname, budget);
}
else{
    output = "Insufficient budget for picnic in any of these cities.";
}

console.log(output);
