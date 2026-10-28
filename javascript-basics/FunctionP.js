
function calculate(a,b){
    return a+b;
    
}

let add=calculate(10,5)
console.log(add*2)

function greet(name) {
    return "Hello " + name;
}

let message = greet("Rahul");

console.log(message);
console.log(greet("Priya"));


function calculateDiscount(price,discount){
return price-discount
}
let total=calculateDiscount(1000,300);
console.log(calculateDiscount(1000,300))
console.log(total)



function multiply(a, b) {
    return a*b
}

let result = multiply(5, 4);

console.log("Result is " + result);

function findlarger(a,b){
if (a<b){
    return a
   
}else{
    return b
}
}
console.log(findlarger(10,20));