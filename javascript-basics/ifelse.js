
let LoginStatus=true;
if (LoginStatus===true)
    {
console.log("Continue");
}
else{
    console.log("Stop")
}

let Marks=66;
if (Marks>=75){
    console.log("Grade A");
}
else if (Marks>=65)
    {
    console.log("Grade B");

}
else
{
    console.log("Grade C");
}

//AND
let UserName="Admin"
let Password="Admin@123"
if(UserName==="Admin" && Password==="Admin@13"){
console.log("Login Successfull")
}else{
    console.log("Login Failed")
}



let marks2=77;
if(marks2>=70){
    console.log("Grade A")
}
else if (marks2>=50 && marks2<=69){
    console.log("Grade B")
}
else{
    console.log("Grade C");
}

//OR

let UserName1="Admin";
let UserName2="Admin1"

if (UserName1==="Admin" || UserName2==="Admin1") {
    console.log("Valid UserName")
} else {
    consol.log("Invalid UserName");
}

let IsLoggedIn=false;
if (!IsLoggedIn) {
    console.log("Login Failed")
}else{
    console.log("Login Successfull")
}