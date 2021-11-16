var d = document.getElementById("default"),
	a = document.getElementById("shown");
d.onclick = function () {
	(d.style.display = "none"), (a.style.display = "block");
};
a.onclick = function () {
	(a.style.display = "none"),
		setTimeout(function () {
			d.style.display = "block";
		}, 200);
};

var $animation_elements = $(".bottom-item");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

function validate(evt) {
	var theEvent = evt || window.event;
	if (theEvent.type === "paste") {
		key = event.clipboardData.getData("text/plain");
	} else {
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9()]|\+/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}
