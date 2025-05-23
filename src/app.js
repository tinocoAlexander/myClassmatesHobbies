function isValidName(name) {
  const regex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidMessage(message) {
  return message.length >= 10;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");
  const toggleBtn = document.getElementById("toggle-dark");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        title: "¡Error!",
        icon: "error",
        text: "Por favor, completa todos los campos.",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    if (!isValidName(name)) {
      Swal.fire({
        title: "Nombre inválido",
        icon: "error",
        text: "El nombre solo debe contener letras y espacios.",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        title: "Correo inválido",
        icon: "error",
        text: "Introduce un correo electrónico válido.",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    if (!isValidMessage(message)) {
      Swal.fire({
        title: "Mensaje muy corto",
        icon: "error",
        text: "El mensaje debe tener al menos 10 caracteres.",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    Swal.fire({
      title: "¡Éxito!",
      icon: "success",
      text: "Tu mensaje ha sido enviado correctamente.",
      confirmButtonText: "Cerrar",
    });

    form.reset();
  });

  // Función para alternar modo oscuro
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");

    document.querySelector("header").classList.toggle("dark-mode");
    document
      .querySelectorAll(".team-member")
      .forEach((card) => card.classList.toggle("dark-mode"));
    document.querySelector("form").classList.toggle("dark-mode");
    document
      .querySelectorAll(".nav-links li a")
      .forEach((link) => link.classList.toggle("dark-mode"));
    toggleBtn.textContent = isDark ? "🌞" : "🌙";
  }
  toggleBtn.textContent = "🌙";

  toggleBtn.addEventListener("click", toggleDarkMode);
});
