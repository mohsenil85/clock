

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
			$('#test' + i).addClass('hidden').removeClass('shown');
      } else {
			$('#test' + i).removeClass('hidden').addClass('shown');
      }
		};
		setTimeout(displayTime, 20);
	};
	displayTime();
});
