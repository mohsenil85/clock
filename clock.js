var digits = new Object();
digits.one = "88<br />&nbsp;8<br />&nbsp;8<br />&nbsp;8<br />8888<br />8888";
digits.two = "eeee<br>&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;8 <br>eee8 <br> 8<br>8eee";
digits.three = "eeee <br> &nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;8<br>eee8<br>&nbsp;&nbsp;&nbsp;88<br>eee88";
digits.four = "88&nbsp;<br>88<br>88&nbsp;&nbsp;88&nbsp;<br>88ee88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88";
digits.five = "eeeee <br>8 <br>8eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;8 <br>eeee8";
digits.six = "eeee <br>8&nbsp;&nbsp;8 <br>8 <br>8eeee <br>8&nbsp;&nbsp;&nbsp;8 <br>8eee8";
digits.seven = "eeeee <br>8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8  ";
digits.eight = "&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8eee8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88";
digits.nine = "eeeee <br>8&nbsp;&nbsp;&nbsp;8 <br>8eee8 <br>&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;88";
digits.zero = "&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;e8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88";
digits.colon = "<br><br>88<br><br>88";

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
	//`	document.write('blo');
	break;
}
}


function displayTime(){
	var docHours1 = document.getElementById("hours1");
	var docHours2 = document.getElementById("hours2");
	var docMin1 = document.getElementById("minutes1");
	var docMin2 = document.getElementById("minutes2");
	var docSec1 = document.getElementById("seconds1");
	var docSec2 = document.getElementById("seconds2");
	var docColon = document.getElementById("colon");
	var docColon2 = document.getElementById("colon2");
	var now = new Date();
	var currentHours = now.getHours() + '';
	var currentMinutes = now.getMinutes() + '';
	var currentSeconds = now.getSeconds() + '';

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

	var hours1 = showDigits(currentHours.charAt(0));
	var hours2 = showDigits(currentHours.charAt(1));

	var minutes1 = showDigits(currentMinutes.charAt(0));
	var minutes2 = showDigits(currentMinutes.charAt(1));

	var seconds1 = showDigits(currentSeconds.charAt(0));
	var seconds2 = showDigits(currentSeconds.charAt(1));

	docColon.innerHTML = digits.colon;
	docColon2.innerHTML = digits.colon;
	docHours1.innerHTML = hours1;
	docHours2.innerHTML = hours2;
	docMin1.innerHTML = minutes1;
	docMin2.innerHTML = minutes2;
	docSec1.innerHTML = seconds1;
	docSec2.innerHTML = seconds2;

/*
	docHours1.innerHTML = digits.nine;
	docHours2.innerHTML = digits.seven;
	docMin1.innerHTML = digits.eight;
	docMin2.innerHTML = digits.zero;
	docSec1.innerHTML = digits.five;
	docSec2.innerHTML = digits.six;
*/
	setTimeout(displayTime, 1000);
}


window.onload = displayTime;
