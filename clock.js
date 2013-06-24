//ok, our gross massive digits object, with fields for our html.  I know this looks insane, but basically i copied the
// http://www.kammerl.de/ascii/AsciiSignature.php i think the font was called 'computer', and then search and replaced for eg s/ /&nbsp; etc.  getting all 
//letters the same width took some trickery, but really this was not all that difficult.  it just looks bizzare and stupid, which it is
var digits = new Object();
digits.one = "&nbsp;&nbsp;&nbsp;88<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;8888<br />&nbsp;&nbsp;&nbsp;8888";
digits.two = "&nbsp;&nbsp;&nbsp;eeee<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;eee8 <br>&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;8eee";
digits.three = "&nbsp;&nbsp;eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;eee8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88<br>&nbsp;&nbsp;eee88";
digits.four = "88&nbsp;<br>88<br>88&nbsp;&nbsp;88&nbsp;<br>88ee88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88";
digits.five = "&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;eeee8";
digits.six = "&nbsp;eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;8&nbsp; <br>&nbsp;8&nbsp; <br>&nbsp;8eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;&nbsp;8&nbsp; <br>&nbsp;8eee8";
digits.seven = "&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;8  ";
digits.eight = "&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8eee8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88";
digits.nine = "&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eee8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88";
digits.zero = "&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;08 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88";
digits.colon = "<br><br>88<br><br>88";

//ugly, massive case switch so that I can access the different parts of the digits object.  is there a better way to do this?  i bet
//however, this works (i think)
function showDigits(x) {
	switch (x){
		case '1':
		return  digits.one;
		break;
		case '2':
		return digits.two;
		break;
		case '3':
		return digits.three;
		break;
		case '4':
		return digits.four;
		break;
		case '5':
		return digits.five;
		break;
		case '6':
		return digits.six;
		break;
		case '7':
		return digits.seven;
		break;
		case '8':
		return digits.eight;
		break;
		case '9':
		return digits.nine;
		break;
		case '0':
		return digits.zero;
		break;
		case ':':
		return digits.colon;
		break;
		default:
		break;
	}
}


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
	docColon.innerHTML = digits.colon;
	docColon2.innerHTML = digits.colon;

	docHours1.innerHTML = showDigits(currentHours.charAt(0));
	docHours2.innerHTML = showDigits(currentHours.charAt(1));
	docMin1.innerHTML = showDigits(currentMinutes.charAt(0));
	docMin2.innerHTML = showDigits(currentMinutes.charAt(1));
	docSec1.innerHTML = showDigits(currentSeconds.charAt(0));
	docSec2.innerHTML = showDigits(currentSeconds.charAt(1));

	//run that shit every second!
	setTimeout(displayTime, 1000);

}


//miller time
window.onload = displayTime;
