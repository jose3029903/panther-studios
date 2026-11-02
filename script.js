
console.log("Panther Studios iniciado correctamente");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Navegando a: " + link.textContent);
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const servicio = document.getElementById("servicio").value;
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !servicio || !mensaje) {
            formMessage.textContent = "Completa todos los campos.";
            return;
        }

        const destinatario = "pantherstudios.ec@gmail.com";

        const asunto = encodeURIComponent(
            "Nueva solicitud - Panther Studios"
        );

        const cuerpo = encodeURIComponent(
            "Nombre: " + nombre +
            "\nCorreo: " + correo +
            "\nServicio: " + servicio +
            "\nProyecto: " + mensaje
        );

        window.location.href =
            "mailto:" + destinatario +
            "?subject=" + asunto +
            "&body=" + cuerpo;

        formMessage.textContent =
            "Se ha preparado tu solicitud en el correo.";
    });
}

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {
        const abierto = navMenu.classList.toggle("active");

        menuToggle.textContent = abierto ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", abierto);
    });

    navMenu.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
