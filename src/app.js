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

    confirmation.classList.remove("hidden");
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
