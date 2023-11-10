document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay credenciales almacenadas
    var credenciales = JSON.parse(localStorage.getItem("credenciales"));
    
    if (credenciales) {
        // Llenar los campos de usuario y contraseña
        document.querySelector('input[type="email"]').value = credenciales.correo;
        document.querySelector('input[type="password"]').value = credenciales.contrasena;
    }

    // Asociar la función de inicio de sesión al formulario
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Evitar el envío del formulario por defecto
        event.preventDefault();

        // Obtener los valores de los campos de usuario y contraseña
        var usuario = document.querySelector('input[type="email"]').value;
        var contrasena = document.querySelector('input[type="password"]').value;

        // Verificar si las credenciales son válidas
        if (verificarCredenciales(usuario, contrasena)) {
            // Mensaje de éxito (opcional)
            alert("Inicio de sesión exitoso. Redirigiendo a login.html");

            // Redirigir a la página de login.html
            window.location.href = "login.html";
        } else {
            // Mensaje de error
            alert("Credenciales incorrectas. Verifica tu usuario y contraseña.");
        }
    });

    function verificarCredenciales(usuario, contrasena) {
        // Obtener la lista de usuarios registrados
        var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si las credenciales coinciden con algún usuario registrado
        return usuariosRegistrados.some(function(u) {
            return u.correo === usuario && u.contrasena === contrasena;
        });
    }
});
