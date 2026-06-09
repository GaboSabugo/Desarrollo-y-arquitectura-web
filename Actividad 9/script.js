document.getElementById("formSuscripcion").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let repetirPassword = document.getElementById("repetirPassword").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let ciudad = document.getElementById("ciudad").value.trim();
    let codigoPostal = document.getElementById("codigoPostal").value.trim();
    let dni = document.getElementById("dni").value.trim();

    let errores = "";

    if (nombre.length <= 6 || !nombre.includes(" ")) {
        errores += "El nombre debe tener más de 6 letras y un espacio.\n";
    }

    if (!email.includes("@") || !email.includes(".")) {
        errores += "El email no es válido.\n";
    }

    if (password.length < 8) {
        errores += "La contraseña debe tener al menos 8 caracteres.\n";
    }

    if (password !== repetirPassword) {
        errores += "Las contraseñas no coinciden.\n";
    }

    if (edad === "" || Number(edad) < 18) {
        errores += "La edad debe ser mayor o igual a 18.\n";
    }

    if (telefono.length < 7 || isNaN(telefono)) {
        errores += "El teléfono debe tener al menos 7 números.\n";
    }

    if (direccion.length < 5 || !direccion.includes(" ")) {
        errores += "La dirección debe tener al menos 5 caracteres y un espacio.\n";
    }

    if (ciudad.length < 3) {
        errores += "La ciudad debe tener al menos 3 caracteres.\n";
    }

    if (codigoPostal.length < 3) {
        errores += "El código postal debe tener al menos 3 caracteres.\n";
    }

    if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
        errores += "El DNI debe tener 7 u 8 números.\n";
    }

    if (errores !== "") {
        alert("Hay errores en el formulario:\n\n" + errores);
    } else {
        alert("Formulario enviado correctamente");
    }
});
