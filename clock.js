var digits = ["&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;08 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
		"&nbsp;&nbsp;&nbsp;88<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;8888<br />&nbsp;&nbsp;&nbsp;8888",
		"&nbsp;&nbsp;&nbsp;eeee<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;eee8 <br>&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;8eee",
		"&nbsp;&nbsp;eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8<br>&nbsp;&nbsp;eee8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88<br>&nbsp;&nbsp;eee88",
		"88&nbsp;<br>88<br>88&nbsp;&nbsp;88&nbsp;<br>88ee88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88",
		"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eeee <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;eeee8",
		"&nbsp;eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;8&nbsp; <br>&nbsp;8&nbsp; <br>&nbsp;8eeee&nbsp; <br>&nbsp;8&nbsp;&nbsp;&nbsp;8&nbsp; <br>&nbsp;8eee8",
		"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;e&rsquo; <br>&nbsp;&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;&nbsp;&nbsp;8  ",
		"&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8eee8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
		"&nbsp;&nbsp;eeeee <br>&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;&nbsp;8eee8 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88"
]


var colon = "<br><br>88<br><br>88";

$(document).ready(function() {

	function displayTime() {

		var now = new Date()
			.toLocaleTimeString()
			.replace(/:|p|a|m| /gi, '');
		var i = 0;

		$('#colon, #colon2').html(colon);

		for (i = 0; i < now.length; i++) {
			$('#'+i).html(digits[now.charAt(i)]);
		};

		setTimeout(displayTime, 1000);
	};

	window.onload = displayTime;
});