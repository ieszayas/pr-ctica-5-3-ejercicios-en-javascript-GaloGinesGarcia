function borrarCamposFormulario(idNombre, idApellidos, idFecha, idNumero) {
    const inputNombre = document.getElementById(idNombre);
    const inputApellidos = document.getElementById(idApellidos);
    const inputFecha = document.getElementById(idFecha);
    const inputNumero = document.getElementById(idNumero);

    
    inputNombre.value = "";
    inputApellidos.value = "";
    inputFecha.value = "dd/mm/aaaa";
    inputNumero.value = "";

    
    eliminarError(inputNombre);
    eliminarError(inputApellidos);
    eliminarError(inputFecha);
    eliminarError(inputNumero);

    
    mostrarMensaje("mensajeEmergente", 3000);
}

function enviarDatosFormulario(idNombre, idApellidos, idFecha, idNumero) {
    const hayErrores = validaciones(idNombre, idApellidos, idFecha, idNumero);
    if (!hayErrores) {
        mostrarMensaje("mensajeEmergenteDos", 3000); 
    }
}

function validaciones(idNombre, idApellidos, idFecha, idNumero) {
    const inputNombre = document.getElementById(idNombre);
    const inputApellidos = document.getElementById(idApellidos);
    const inputFecha = document.getElementById(idFecha);
    const inputNumero = document.getElementById(idNumero);

    
    const validacionLetras = /^[a-zA-Z]+$/;
    const validacionNumeros = /^[0-9]+$/;

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

    
    if (!validacionNumeros.test(inputNumero.value)) {
        marcarError(inputNumero);
        hayErrores = true;
    } else {
        eliminarError(inputNumero);
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

function cambiarModo() {
    const body = document.body;
    const boton = document.getElementById("modoBtn");

    body.classList.toggle("modo-oscuro"); 

    if (body.classList.contains("modo-oscuro")) {
        boton.textContent = "Modo Claro"; 
    } else {
        boton.textContent = "Modo Oscuro";
    }
}

function cambiarColorTabla(event) {
    const colorSeleccionado = event.target.value; 
    const tabla = document.querySelector('.tablaCustom'); 

    
    tabla.style.backgroundColor = colorSeleccionado;
}

function actualizarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    
    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    document.getElementById("reloj").innerText = horaFormateada;
}



function filtrarLenguajes() {
    
    let input = document.getElementById("busquedaLenguaje").value.toLowerCase();
    
    let filas = document.querySelectorAll("#tabla tbody tr");

    
    filas.forEach(function(fila) {
        
        let lenguaje = fila.cells[1].textContent.toLowerCase();
        
        
        if (lenguaje.includes(input)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}


setInterval(actualizarReloj, 1000);


actualizarReloj();
