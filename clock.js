

$(function() {
	function displayTime() {
		var now = new Date()
			.getTime()
			.toString(2)
      .substring(0,33)
      .split("").reverse().join("");
		var i = 0;
		for (i = 0; i < now.length; i++) {
			$('#test' + i).html('&nbsp;&nbsp;&nbsp;');
      if(now.charAt(i) === '0'){
			$('#test' + i).addClass('hidden', 1, "easeOutCirc").removeClass('shown', 1, "easeOutCirc");
      } else {
			$('#test' + i).removeClass('hidden').addClass('shown');
      }
		};
		setTimeout(displayTime, 2);
	};
	displayTime();
});
