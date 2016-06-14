//Create a DO while loop that displays the numbers 1 through to  10 onto the webpage
//declare the function to be used
function myFunction() 
{
//declare the variables used in the function before getting to the meaty stuff
var text = "";
var i = 0;
//in this one, the loop will activate once, before even checking the condition that i is less than 10. but once it realises it at the end of the loop, the next loop will consider the previous condition passed and remembers it.
do 
{
        text += "<br>The number is " + i;
//VV it adds one more to the preceding value
        i++;
}
while (i < 10)
document.getElementById("demo").innerHTML = text;
}