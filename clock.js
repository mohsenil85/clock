//var digits = ["&nbsp;eeeee <br>&nbsp;8&nbsp;&nbsp;08 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>&nbsp;8&nbsp;&nbsp;&nbsp;8 <br>88&nbsp;&nbsp;&nbsp;88 <br>88eee88",
		//"&nbsp;&nbsp;&nbsp;88<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;&nbsp;8<br />&nbsp;&nbsp;&nbsp;8888<br />&nbsp;&nbsp;&nbsp;8888"
//];

var digits = ["0", "1"];

$(function() {
	function displayTime() {
		var now = new Date()
			.getTime()
			.toString(2);
		var i = 0;
		for (i = 0; i < now.length; i++) {
			$('#test' + i).html('bob');
      if(now.charAt(i) === '0'){
			$('#test' + i).addClass('hidden');
      } else {
			$('#test' + i).removeClass('hidden');
      }
			//$('#test' + i).html(digits[now.charAt(i)]);
		};
		setTimeout(displayTime, 1);
	};
	displayTime();
});
