function borrarCamposFormulario(idNombre, idApellidos, idFecha) {
    const inputNombre = document.getElementById(idNombre);
    const inputApellidos = document.getElementById(idApellidos);
    const inputFecha = document.getElementById(idFecha);
    

    
    inputNombre.value = "";
    inputApellidos.value = "";
    inputFecha.value = "dd/mm/aaaa";
    

    
    eliminarError(inputNombre);
    eliminarError(inputApellidos);
    eliminarError(inputFecha);
    

    
    mostrarMensaje("mensajeEmergente", 3000);
}

function enviarDatosFormulario(idNombre, idApellidos, idFecha) {
    const hayErrores = validaciones(idNombre, idApellidos, idFecha);
    if (!hayErrores) {
        mostrarMensaje("mensajeEmergenteDos", 3000); 
    }
}

function validaciones(idNombre, idApellidos, idFecha) {
    const inputNombre = document.getElementById(idNombre);
    const inputApellidos = document.getElementById(idApellidos);
    const inputFecha = document.getElementById(idFecha);
    

    
    const validacionLetras = /^[a-zA-Z]+$/;
    

    let hayErrores = false;

    
    if (!validacionLetras.test(inputNombre.value)) {
        marcarError(inputNombre); 
        hayErrores = true;
    } else {
        eliminarError(inputNombre);
    }

    if (!validacionLetras.test(inputApellidos.value)) {
        marcarError(inputApellidos);
        hayErrores = true;
    } else {
        eliminarError(inputApellidos);
    }

    
    

    
    if (hayErrores) {
        mostrarMensaje("mensajeEmergenteTres", 3000);
    }

    return hayErrores;
}

function marcarError(campo) {
    campo.classList.add("campoError");
}

function eliminarError(campo) {
    campo.classList.remove("campoError");
}

function mostrarMensaje(idMensaje, duracion) {
    const mensaje = document.getElementById(idMensaje);
    mensaje.style.display = 'block';
    mensaje.style.opacity = '1';

    setTimeout(() => {
        mensaje.style.opacity = '0';
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 300); 
    }, duracion);
}
