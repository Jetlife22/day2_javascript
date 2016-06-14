//ALWAYS EVENT LISTENER AT THE TOP 
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myAlert, false);

function myAlert() {

window.alert("you clicked it");
    
}