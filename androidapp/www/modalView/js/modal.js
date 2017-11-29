// Create parameter
var puerto = document.getElementById("puerto");
var ip = document.getElementById("ip");
var area = document.getElementById("area");
var tipo = document.getElementById("tipo");
var estado = document.getElementById("estado");

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var btn2 = document.getElementById("btnCancel");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function mostrar (a,b,c,d,e) {
	puerto.value = a;
	ip.value = b;
	area.value = c;
	tipo.value = d;
	estado.value = e;
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}