//Create a nested loop from 1-10
var i;
var j;
var text = "";

function theLoop()

{
//first outer loop called
for (i = 0; i <10; i++)
{
text += "<br> Outer loop  " + i;
//the second loop is called nutil it finishes and starts again in the next "i" value
        for (j = 0; j < 3; j++) {
            
            document.getElementById("demo").innerHTML = text += + j + " inner loop";
        }

document.getElementById("demo").innerHTML = text;
}

}
