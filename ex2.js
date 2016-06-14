//Create a function that passes 3 variables into  it , adds them up and returns the sum.  Display the sum back to the DOM.
//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',sumUp, false);

function sumUp(){
//USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinputA = parseInt(document.getElementById("inputA").value);
var userinputB = parseInt(document.getElementById("inputB").value);
var userinputC = parseInt(document.getElementById("inputC").value);


document.getElementById("demo1").innerHTML = userinputA + userinputB + userinputC;
  
}