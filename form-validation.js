document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;

        let errores = [];

        // Validación del nombre
        if (nombre.length === 0 || nombre.length > 50) {
            errores.push('El nombre debe tener entre 1 y 50 caracteres.');
        }

        // Validación del email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push('El email no es válido.');
        }

        // Validación del mensaje
        if (mensaje.length === 0 || mensaje.length > 500) {
            errores.push('El mensaje debe tener entre 1 y 500 caracteres.');
        }

        let output = document.getElementById('formOutput');
        let errorOutput = document.getElementById('errorMessages');
        output.innerHTML = '';
        errorOutput.innerHTML = '';

        if (errores.length > 0) {
            errores.forEach(function(error) {
                let p = document.createElement('p');
                p.textContent = error;
                errorOutput.appendChild(p);
            });
        } else {
            let p = document.createElement('p');
            p.textContent = `Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`;
            output.appendChild(p);
        }
    });
});
