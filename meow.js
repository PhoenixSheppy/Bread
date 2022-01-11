var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
var current = 0;

var keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
  
	current++;
  
	if (pattern.length === current) {
		current = 0;
		window.location.replace("https://www.youtube.com/embed/QDaUJufeMXM?autoplay=1");
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);