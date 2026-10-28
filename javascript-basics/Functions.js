
function greet(){
    console.log("Learning Functions")
}
greet();
greet();
greet();
greet();

//Parameters and Arguments

function greet1(name) {
    console.log("Hello " +name)
}
greet1("Rahul");
greet1("Ajay");
greet1("Pallavi");


function cal(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);

}
cal(20,10);
cal(200,100);
cal(8,2);
cal(50,10);


function calculation(price,quantity){
    return price * quantity
}
let total=calculation(20,50);
console.log("Total Amount is "+total)

function combine (price,quantity){
    return price* quantity
}
let first=combine(500,200);
let second=combine(400,300);
console.log("combine is",first+second);