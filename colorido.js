target1 = document.getElementsByClassName('colorido');
target2 = document.getElementsByClassName('colorido-o');
target3 = document.getElementsByClassName('colorido-t');
max = config.choice.length;
time = config.autoDuration * 1000;
trans = 1-config.opacity;
animD = " "+config.animationDuration+"s"+" ";
animT = config.animationType;
	
function renc() {
	rand = parseInt(Math.random() * (max - 0) + 0);
	color = config.choice[rand];
	conv = color.replace('b', 'ba');
	trans_color = conv.replace(')', "," + trans);
	var i;
	
	for (i = 0; i < target1.length; i++) {
		target1[i].style.backgroundColor = color;
		target1[i].style.color = "#fff";
		target1[i].style.transition = "background-color"+animD + animT;
	}

	for (i = 0; i < target2.length; i++) {
		target2[i].style.backgroundColor = trans_color;
		target2[i].style.transition = "background-color"+animD+ animT;
	}

	for (i = 0; i < target3.length; i++) {
		target3[i].style.color = color;
		target3[i].style.transition = "color"+animD+ animT;
	}

};
if (config.autoChange) {
	renc();
	setInterval(renc, time);
} else {
	renc();
}

function metaIn(mdevice) {
	var meta = document.createElement('meta');
	meta.name = mdevice;
	meta.content = config.choice[rand];
	document.getElementsByTagName('head')[0].appendChild(meta);

}
if (config.chromeTab) {
	metaIn("theme-color");
	metaIn("msapplication-navbutton-color");
	metaIn("apple-mobile-web-app-status-bar-style");
}