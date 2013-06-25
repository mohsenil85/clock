//ok, our gross massive digits object, with fields for our html.  I know this looks insane, but basically i copied the
// http://www.kammerl.de/ascii/AsciiSignature.php i think the font was called 'computer', and then search and replaced for eg s/ /&nbsp; etc.  getting all 
//letters the same width took some trickery, but really this was not all that difficult.  it just looks bizzare and stupid, which it is
var digits = [ "&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;08 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
"&nbsp;&nbsp;&nbsp;88<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;8888<br />&nbsp;&nbsp;&nbsp;8888",
"&nbsp;&nbsp;&nbsp;eeee<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;eee8 <br>&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;8eee",
"&nbsp;&nbsp;eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;eee8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88<br>&nbsp;&nbsp;eee88",
"88&nbsp;<br>88<br>88&nbsp;&nbsp;88&nbsp;<br>88ee88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88",
"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;eeee8",
"&nbsp;eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;8&nbsp; <br>&nbsp;8&nbsp; <br>&nbsp;8eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;&nbsp;8&nbsp; <br>&nbsp;8eee8",
"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;8  ",
"&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8eee8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eee8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88"]


var colon = "<br><br>88<br><br>88";


function displayTime(){
	//the reason i split this up into tables for the digits was so that i could reach in a modify each
	//element in the table directly. can't you use jquery or somehting like that?  i don't know 
	var docHours1 = document.getElementById("hours1");
	var docHours2 = document.getElementById("hours2");
	var docMin1 = document.getElementById("minutes1");
	var docMin2 = document.getElementById("minutes2");
	var docSec1 = document.getElementById("seconds1");
	var docSec2 = document.getElementById("seconds2");
	var docColon = document.getElementById("colon");
	var docColon2 = document.getElementById("colon2");
	var now = new Date();//make a date object every second, in conjunction with the setTimeout below
	var currentHours = now.getHours() + '';//convert the various fields in the date object to string so that they are easy to pass
	var currentMinutes = now.getMinutes() + '';// in to the ginormous switch statement above. 
	var currentSeconds = now.getSeconds() + '';


	//various massageings of the time strings so that the clock is 12hr, and also if there is a 1 digit field, it has a leading zero
	if (currentSeconds < 10) {
		currentSeconds = '0' + currentSeconds;
	}

	if (currentSeconds == 0) {
		currentSeconds = '00';
	}

	if (currentMinutes < 10){
		currentMinutes = '0' + currentMinutes;
	}
	if (currentHours > 12) {
		currentHours -= 12;
	}
	if (currentHours < 10){
		currentHours = '0' + currentHours;
	}

	//dump that shit in the table!
	docColon.innerHTML = colon;
	docColon2.innerHTML = colon;

	docHours1.innerHTML = digits[currentHours.charAt(0)];
	docHours2.innerHTML = digits[currentHours.charAt(1)];
	docMin1.innerHTML = digits[currentMinutes.charAt(0)];
	docMin2.innerHTML = digits[currentMinutes.charAt(1)];
	docSec1.innerHTML = digits[currentSeconds.charAt(0)];
	docSec2.innerHTML = digits[currentSeconds.charAt(1)];

	//run that shit every second!
	setTimeout(displayTime, 1000);

}


//miller time
window.onload = displayTime;
