var digits = ["&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;08 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
		"&nbsp;&nbsp;&nbsp;88<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;8888<br />&nbsp;&nbsp;&nbsp;8888"
];


$(function() {
	function displayTime() {
		var now = new Date()
			.getTime()
			.toString(2);
		var i = 0;
		for (i = now.length; i > 0; i--) {
			$('#' + (39 - i)).html(digits[now.charAt(i)]);
		};
		setTimeout(displayTime, 1);
	};
	displayTime();
});