document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre =  FormData.nombre.value.trim();
    const fecha = FormData.fecha.value.trim();

    const celular = FormData.celular.value.trim();
    const correo = FormData.correo.value.trim();
    const mensaje = FormData.password.value.trim();
    const pais = FormData.pais.value;

    if ((nombre != null) && (nombre != "") && (celular != null) && (celular != "") && (correo != null) && (correo != "") && (mensaje != null) && (mensaje != "") && (pais != null) && (pais != "")) {
        alert("Bienvenido " + nombre + ", gracias por completar el registro");  
    }else{
        alert("Por favor, complete todos los campos del formulario.");
    }
})