var nombre = document.getElementById("campoNombre");
var ape = document.getElementById("campoApellido");
var correo = document.getElementById("campoCorreo");
var mensaje = document.getElementById("campoDesc"); 

var error = document.getElementById("error");
error.style.color = "yellow";

function enviarFormulario(){
	//alert('Enviando Formulario...');
	var mensajesError = [];

	if (nombre.value === null || nombre.value === ''){
		mensajesError.push('Ingrese el nombre');
	}
	if (ape.value === null || ape.value === ''){
		mensajesError.push('Ingrese el apellido');
	}
	if (correo.value === null || correo.value === ''){
		mensajesError.push('Ingrese el correo');
	}
	if (mensaje.value === null || mensaje.value === ''){
		mensajesError.push('Ingrese el mensaje');
	}

	error.innerHTML = mensajesError.join(' | ');
		
	return false;
}

/*let form = getElementByClassName('form');
	form.addEventListener('submit', function(evento){
		
		console.log('Enviando Formulario...');
		
	});
	*/