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

$(document).ready(function(){



	function displayTime(){

	var now = new Date();

	var currentHours = now.getHours() + '';
	var currentMinutes = now.getMinutes() + '';
	var currentSeconds = now.getSeconds() + '';


	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentHours = (currentHours < 10 ? "0" : "") + currentHours;
	currentHours = (currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = (currentHours == 0 ) ?  12 : currentHours;


	if (currentHours < 10){
		currentHours = '0' + currentHours;
	}

	$('#colon, #colon2').html(colon);

	$('#hours1').html(digits[currentHours.charAt(0)]);
	$('#hours2').html(digits[currentHours.charAt(1)]);
	$('#minutes1').html(digits[currentMinutes.charAt(0)]);
	$('#minutes2').html(digits[currentMinutes.charAt(1)]);
	$('#seconds1').html(digits[currentSeconds.charAt(0)]);
	$('#seconds2').html(digits[currentSeconds.charAt(1)]);

	setTimeout(displayTime, 1000);

}

window.onload = displayTime;
});
