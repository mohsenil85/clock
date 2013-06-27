

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
		};
		setTimeout(displayTime, 1);
	};
	displayTime();
});
