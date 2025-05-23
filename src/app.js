document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validación básica
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
});
