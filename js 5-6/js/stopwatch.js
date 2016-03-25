
var time = 0;
var running = 0;
var date;
var timeElapsed=0;
var interval;


function updateTime() {
    var now = Date.now();
    timeElapsed = now - date;
    date = now;
    return timeElapsed;
}

function count() {
	if(running) {
        time += updateTime();
    }
    
    var mins = Math.floor((time / 1000 / 60) % 60);
    var secs = Math.floor((time / 1000) % 60);
    var ms = Math.floor(time % 1000);

    if (mins < 10) {
         mins = '0' + mins;
    }
    if (secs < 10) {
         secs = '0' + secs;
    }
    if (ms < 10) {
        ms = '00' + ms;
    }
        
    document.getElementById('output').innerHTML = mins + ' : ' + secs + ' . ' + ms; 
}

function startPause() {
	if (!running) {
        interval = setInterval(count, 10);
        date = Date.now();
        running = true;
		document.getElementById("startPause").innerHTML = "Pause";
	} else {
		running = 0;
		document.getElementById("startPause").innerHTML = "Resume";
    }
}

function reset() {
	running = 0;
	time = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "00 : 00 . 000";
}



