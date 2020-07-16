var clicks = 0;

function mas2 () {
	clicks += 1;
}

document.onclick = function() {
	clicks += 1;

	/*---------------Para aparecer Boton----------------*/
	if (clicks > 20) {
		document.getElementById("por2").style.display = "block";
	}

	/*---------------Mensaje final----------------*/
	if (clicks > 50) {
		document.getElementById("h2").style.display = "block";
	}

	/*---------------Inserta los clicks hechos----*/
	document.getElementById("clicks").innerHTML = clicks;

	/*---------------Crea colores-----------------*/
    var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	document.body.style.background = color;

};