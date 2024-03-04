function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
    var expRegPais = /^[a-záéíóúñ\s]*$/i;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^([0-9]\s*)*$/;
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
    var direccion = document.getElementById("direccion");
    var pais = document.getElementById("pais");
    var email = document.getElementById("email");
    var webSite = document.getElementById("web-site");
    var telefono = document.getElementById("telefono");
    var comentario = document.getElementById("comentario");

    if (!nombres.value) {
        alert("Escriba sus nombres por favor.");
        nombres.focus();
        verificar = false;
        return false;
    } else if (nombres.value.split(" ").length < 2) {
        alert("Escriba sus nombres completos por favor.");
        nombres.focus();
        verificar = false;
        return false;
    } else if (!expRegNombres.test(nombres.value)) {
        alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
        nombres.focus();
        verificar = false;
        return false;
    } else if (!direccion.value) {
        alert("Escriba su dirección por favor.");
        direccion.focus();
        verificar = false;
        return false;
    } else if (!pais.value) {
        alert("Escriba el nombre del país que nos visita por favor.");
        pais.focus();
        verificar = false;
        return false;
    } else if (!expRegPais.test(pais.value)) {
        alert("Escriba de que país nos visita sin números ni caracteres especiales.");
        pais.focus();
        verificar = false;
        return false;
    } else if (!email.value) {
        alert("Escriba su email por favor.");
        email.focus();
        verificar = false;
        return false;
    } else if (!expRegEmail.test(email.value)) {
        alert("Escriba un email válido por favor.");
        email.focus();
        verificar = false;
        return false;
    } else if ((webSite.value != "") && !expRegUrl.test(webSite.value)) {
        alert("Escriba un formato de sitio web válido por favor.");
        webSite.focus();
        verificar = false;
        return false;
    } else if (!telefono.value) {
        alert("Escriba un número de teléfono por favor.");
        telefono.focus();
        verificar = false;
        return false;
    } else if (!expRegTelefono.test(telefono.value)) {
        alert("El campo teléfono admite números y espacios en blanco.");
        telefono.focus();
        verificar = false;
        return false;
    } else if (!comentario.value) {
        alert("El campo comentarios es requerido");
        comentario.focus();
        verificar = false;
        return false;
    } else if (comentario.value.length > 1000) {
        alert("El campo comentarios no puede tener más de 1000 caracteres.");
        comentario.focus();
        verificar = false;
        return false;
    }

    if (verificar) {
        document.formulario.submit();
    }
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

function calcular() {
    var contadorChar = document.getElementById("contador-char");
    contadorChar.innerHTML = 1000 - document.formulario.comentario.value.length;
}

window.onload = function () {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarFormulario;
}
