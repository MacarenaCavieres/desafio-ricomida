const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
    let enviarCorreo = $("#enviarCorreo");
    let h3 = $("h3");
    let tituloTarjeta = $(".tituloTarjeta");
    let textoCard = $(".textoCard");

    enviarCorreo.click(function () {
        alert("El correo fue enviado correctamente");
    });

    h3.css({
        cursor: "pointer",
    });

    h3.dblclick(function () {
        $(this).css("color", "red");
    });

    tituloTarjeta.click(function () {
        textoCard.toggle();
    });
});
