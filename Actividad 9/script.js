const campos = [
    "nombre",
    "email",
    "password",
    "repetirPassword",
    "edad",
    "telefono",
    "direccion",
    "ciudad",
    "codigoPostal",
    "dni"
];

function mostrarError(id, mensaje) {
    document.getElementById("error-" + id).textContent = mensaje;
    document.getElementById(id).classList.add("error-input");
}

function limpiarError(id) {
    document.getElementById("error-" + id).textContent = "";
    document.getElementById(id).classList.remove("error-input");
}

function validarCampo(id) {
    let valor = document.getElementById(id).value.trim();

    if (valor === "") {
        mostrarError(id, "Este campo es obligatorio");
        return false;
    }

    if (id === "nombre") {
        if (valor.length <= 6 || !valor.includes(" ")) {
            mostrarError(id, "Debe tener más de 6 letras y al menos un espacio");
            return false;
        }
    }

    if (id === "email") {
        let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresion.test(valor)) {
            mostrarError(id, "Debe ingresar un email válido");
            return false;
        }
    }

    if (id === "password") {
        let tieneLetras = /[a-zA-Z]/.test(valor);
        let tieneNumeros = /[0-9]/.test(valor);

        if (valor.length < 8 || !tieneLetras || !tieneNumeros) {
            mostrarError(id, "Debe tener al menos 8 caracteres, con letras y números");
            return false;
        }
    }

    if (id === "repetirPassword") {
        let password = document.getElementById("password").value;

        if (valor !== password) {
            mostrarError(id, "Las contraseñas no coinciden");
            return false;
        }
    }

    if (id === "edad") {
        let edad = Number(valor);

        if (!Number.isInteger(edad) || edad < 18) {
            mostrarError(id, "Debe ser un número entero mayor o igual a 18");
            return false;
        }
    }

    if (id === "telefono") {
        let expresion = /^[0-9]{7,}$/;

        if (!expresion.test(valor)) {
            mostrarError(id, "Debe tener al menos 7 dígitos, sin espacios ni símbolos");
            return false;
        }
    }

    if (id === "direccion") {
        let tieneLetras = /[a-zA-Z]/.test(valor);
        let tieneNumeros = /[0-9]/.test(valor);

        if (valor.length < 5 || !valor.includes(" ") || !tieneLetras || !tieneNumeros) {
            mostrarError(id, "Debe tener letras, números y un espacio");
            return false;
        }
    }

    if (id === "ciudad") {
        if (valor.length < 3) {
            mostrarError(id, "Debe tener al menos 3 caracteres");
            return false;
        }
    }

    if (id === "codigoPostal") {
        if (valor.length < 3) {
            mostrarError(id, "Debe tener al menos 3 caracteres");
            return false;
        }
    }

    if (id === "dni") {
        let expresion = /^[0-9]{7,8}$/;

        if (!expresion.test(valor)) {
            mostrarError(id, "Debe ser un número de 7 u 8 dígitos");
            return false;
        }
    }

    limpiarError(id);
    return true;
}

campos.forEach(function(id) {
    let campo = document.getElementById(id);

    campo.addEventListener("blur", function() {
        validarCampo(id);
    });

    campo.addEventListener("focus", function() {
        limpiarError(id);
    });
});

document.getElementById("formSuscripcion").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let errores = [];
    let datos = [];

    campos.forEach(function(id) {
        let esValido = validarCampo(id);
        let label = document.querySelector("label[for='" + id + "']").textContent;
        let valor = document.getElementById(id).value.trim();

        if (!esValido) {
            let error = document.getElementById("error-" + id).textContent;
            errores.push(label + ": " + error);
        } else {
            if (id === "password" || id === "repetirPassword") {
                datos.push(label + ": ********");
            } else {
                datos.push(label + ": " + valor);
            }
        }
    });

    if (errores.length > 0) {
        alert("Hay errores en el formulario:\n\n" + errores.join("\n"));
    } else {
        alert("Formulario enviado correctamente:\n\n" + datos.join("\n"));
    }
});
