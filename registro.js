function registrar() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verificar si localStorage ya tiene datos almacenados
    var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(usuariosRegistrados)
    // Agregar el nuevo usuario a la lista
    var nuevoUsuario = { nombre: nombre, correo: correo, contrasena: contrasena };
    usuariosRegistrados.push(nuevoUsuario);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    // También guardar las credenciales para el inicio de sesión
    localStorage.setItem("credenciales", JSON.stringify({ correo: correo, contrasena: contrasena }));

    // Mensaje de éxito
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
}
