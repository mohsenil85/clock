

$(function() {
	function displayTime() {
		var now = new Date()
			.getTime()
			.toString(2)
      .substring(0,33)
      .split("").reverse().join("");
		var i = 0;
		for (i = 0; i < now.length; i++) {
			$('#test' + i).html('<img src="./img/green4.png" />');
      if(now.charAt(i) === '0'){
			$('#test' + i).fadeOut("fast");
      } else {
			$('#test' + i).fadeIn("fast");
      }
		};
		setTimeout(displayTime, 2);
	};
	displayTime();
});
