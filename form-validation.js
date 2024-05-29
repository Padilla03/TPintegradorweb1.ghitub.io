document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;

        let errores = [];
        let nombreInput = document.getElementById('nombre');
        let emailInput = document.getElementById('email');
        let mensajeInput = document.getElementById('mensaje');

        // Limpiar estilos previos
        nombreInput.classList.remove('input-error');
        emailInput.classList.remove('input-error');
        mensajeInput.classList.remove('input-error');

        // Validación del nombre
        if (nombre.length === 0 || nombre.length > 50) {
            errores.push('El nombre debe tener entre 1 y 50 caracteres.');
            nombreInput.classList.add('input-error');
        }

        // Validación del nombre solo alfabético
        let nombreRegex = /^[a-zA-Z\s]+$/;
        if (!nombreRegex.test(nombre)) {
            errores.push('El nombre solo debe contener caracteres alfabéticos.');
            nombreInput.classList.add('input-error');
        }

        // Validación del email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push('El email no es válido.');
            emailInput.classList.add('input-error');
        }

        // Validación del mensaje
        if (mensaje.length === 0 || mensaje.length > 500) {
            errores.push('El mensaje debe tener entre 1 y 500 caracteres.');
            mensajeInput.classList.add('input-error');
        }

        let output = document.getElementById('formOutput');
        let errorOutput = document.getElementById('errorMessages');
        output.innerHTML = '';
        errorOutput.innerHTML = '';

        if (errores.length > 0) {
            errores.forEach(function(error) {
                let p = document.createElement('p');
                p.textContent = error;
                p.classList.add('error-message');
                errorOutput.appendChild(p);
            });
        } else {
            let p = document.createElement('p');
            p.textContent = `Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`;
            output.appendChild(p);
        }
    });
});
