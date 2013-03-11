var DomCounter = {};

DomCounter.launch = function (domElem, callback) {
    var from = domElem.attr("from");
    from = +from;
    var to = domElem.attr("to");
    to = +to;
    var prefix = domElem.attr("prefix");
    if (!prefix)
	prefix = "";
    var suffix = domElem.attr("suffix");
    if (!suffix)
	suffix = "";
    var speed = domElem.attr("speed");
    speed = +speed;
    if (!speed)
	speed = 15;
    var incrementation = domElem.attr("incrementation");
    incrementation = +incrementation;
    if (!incrementation)
	incrementation = 1;
    console.log(from, to, prefix, suffix, speed);
    var inter = window.setInterval(function() {
	if (from === to + incrementation)
	{
	    window.clearInterval(inter);
	    if (callback)
		callback();
	    return;
	}
	domElem.text(prefix + from + suffix);
	from += incrementation;
    }, speed);
}