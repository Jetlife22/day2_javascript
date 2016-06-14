//Declare the same variable inside a function (local) and outside (global).  Display the two values.
//ALWAYS EVENT LISTENER AT THE TOP 

//declare global variable
var var1 = "Global = 999"
//display on page
document.getElementById("demo2").innerHTML = var1;
window.addEventListener('load',sumUp,false);

function sumUp(){
//Local scope
var var1 = "local is 555"
//display on page
document.getElementById("demo1").innerHTML = var1;

  
}