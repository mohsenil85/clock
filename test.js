var now = new Date().toLocaleTimeString();
function showDigits(x) {
	var i = 0;
	var digits = new Object();
	digits.one = "      .\n      |\n      |\n      \'\n      |\n      |\n      \'";
	digits.two = ".-----.\n      |\n      |\n.-----\'\n|      \n|      \n\'-----\'";
	digits.three = ".-----.\n      |\n      |\n -----\'\n      |\n      |\n\'-----\'";
	digits.four = ".     .\n|     |\n|     |\n\'-----\'\n      |\n      |\n      \'";
	digits.five = ".-----.\n|     \n|     \n\'-----.\n      |\n      |\n -----\'";
	digits.six = ".-----.\n|      \n|      \n\'-----.\n|     |\n|     |\n\'-----\'";
	digits.seven = ".-----.\n      |\n      |\n      \'\n      |\n      |\n      \'";
	digits.eight = ".-----.\n|     |\n|     |\n\'-----\'\n|     |\n|     |\n\'-----\'";
	digits.nine = ".-----.\n|     |\n|     |\n\'-----\'\n      |\n      |\n      \'";
	digits.zero = ".-----.\n|     |\n|     |\n|  0  |\n|     |\n|     |\n\'-----\'";
	digits.colon = "\n\n   o    \n\n   o   \n\n ";

	for (i = 0; i < x.length; i++ ){
		switch (x[i]){
			case '1':
			console.log(digits.one)
			break;
			case '2':
			console.log(digits.two)
			break;
			case '3':
			console.log(digits.three)
			break;
			case '4':
			console.log(digits.four)
			break;
			case '5':
			console.log(digits.five)
			break;
			case '6':
			console.log(digits.six)
			break;
			case '7':
			console.log(digits.seven)
			break;
			case '8':
			console.log(digits.eight)
			break;
			case '9':
			console.log(digits.nine)
			break;
			case '0':
			console.log(digits.zero)
			break;
			case ':':
			console.log(digits.colon)
			break;
			default:
			console.log('blo');
			break;
		}
	}
}
showDigits(now);