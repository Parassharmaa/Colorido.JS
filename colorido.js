target1 = document.getElementsByClassName('colorido');
target2 = document.getElementsByClassName('colorido-o');
target3 = document.getElementsByClassName('colorido-t');
target4 = document.getElementsByClassName('colorido-gr'); 
target5 = document.getElementsByClassName('colorido-gl'); 
target6 = document.getElementsByClassName('colorido-gd');
target7 = document.getElementsByClassName('colorido-gh');

max = config.choice.length;
time = config.autoDuration * 1000;
trans = 1-config.opacity;
animD = " "+config.animationDuration+"s"+" ";
animT = config.animationType;
mix = config.gradMix;

function randInt(max, min) {
	result = parseInt(Math.random() * (max - min) + min);
	return result;
}
	
function renc() {
	rand = parseInt(Math.random() * (max - 0) + 0);
	if (config.gradMix==="random") {
		mix  = "rgb("+randInt(255,0)+ ","+  randInt(255,0)+ "," + randInt(255,0)+")";
	}

	else {
		mix = config.gradMix;
	}
	
	color = config.choice[rand];
	conv = color.replace('b', 'ba');
	trans_color = conv.replace(')', "," + trans);
	var i;
	
	for (i = 0; i < target1.length; i++) {
		target1[i].style.backgroundColor = color;
		target1[i].style.color ="#fff";
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
	
	for (i = 0; i < target4.length; i++) {
		target4[i].style.color = "#fff";
		target4[i].style.background= "-webkit-radial-gradient("+color+","+mix+")";
		target4[i].style.background= "radial-gradient("+color+", " + mix+")";
		target4[i].style.transition = "all"+animD+ animT;
	}
	for (i = 0; i < target5.length; i++) {
		target5[i].style.color = "#fff";
		target5[i].style.background= "-webkit-linear-gradient(10grad, "+color+","+mix+")";
		target5[i].style.background= "linear-gradient(10grad, "+color+", " +mix+")";
		target5[i].style.transition = "all"+animD+ animT;
	}
	for (i = 0; i < target6.length; i++) {
		target6[i].style.color = "#fff";
		target6[i].style.background= "-webkit-linear-gradient(120grad, "+color+","+mix+")";
		target6[i].style.background= "linear-gradient(120grad, "+color+", " + mix+")";
		target6[i].style.transition = "all"+animD+ animT;
	}
	for (i = 0; i < target7.length; i++) {
		target7[i].style.color = "#fff";
		target7[i].style.background= "-webkit-linear-gradient(500grad, "+color+","+mix+")";
		target7[i].style.background= "linear-gradient(500grad, "+color+", " + mix+")";
		target7[i].style.transition = "all"+animD+ animT;
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
