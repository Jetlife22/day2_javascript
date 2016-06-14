//Create a while loop that displays the numbers 1 through to  10 onto the webpage
//declare the function to be used
function myFunction() {
//declare the variables used in the function before getting to the meaty stuff
    var text = "";
    var i = 0;
//the parameter next to the loop displays the condition that as long as i is lower than the value of 10, the code underneath is executed.
    while (i < 10) {
        text += "<br>The number is " + i;
        //VV it adds one more to the preceding value
        i++;
    }
    document.getElementById("demo").innerHTML = text;
}