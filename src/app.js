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
        draggable: true,
      });
      return;
    }

    confirmation.classList.remove("hidden");
    form.reset();
  });

  // Toggle dark mode
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document
      .querySelectorAll(".team-member")
      .forEach((card) => card.classList.toggle("dark-mode"));
    document.querySelector("form").classList.toggle("dark-mode");
    document
      .querySelectorAll(".nav-links li a")
      .forEach((link) => link.classList.toggle("dark-mode"));
  });
});
