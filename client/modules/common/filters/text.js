myApp.filter('substring', function() {
	return function(text, start, length){
		var len = length;
		length = length || start;
		start = (len ? start : 0);
		var result = "";
		if(text && text.length+3 <= length) {
			result = text;
		} else {
			result = text.substring(start, length) + "...";
		}
		return result;
	}
})