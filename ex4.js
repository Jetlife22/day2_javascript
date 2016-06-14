//Create a function that contains a For Loop  that loops through from 1 to 50 and displaying the number onto the webpage
//declare variables first, optional function addition
function releaseButton(){
var text = "";
//var i is going to be itterated through
var i;
//first statement is given at start, second statement defines how long it will loop, third statement shows how it will loop
for (i = 0; i < 51; i++)
//the variable text, whihc was declared, is being used to write "..." concatonated with the i variable and built on using the +=, the break statment is then used to break the loop and start again.
{
text += "this number is " + i + "<br>";
}
//displays the loop once function is activated through clicking the releaseButton button
document.getElementById("demo").innerHTML = text;
}