var clicks = 0;

document.onclick = function() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

    var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	document.body.style.background = color;

};