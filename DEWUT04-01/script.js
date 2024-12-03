document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input);
    });
  });

  function validateField(field) {
    const errorMessage = field.nextElementSibling;

    if (!field.value.trim()) {
      field.classList.add("error");
      if (!errorMessage || !errorMessage.classList.contains("error-message")) {
        const errorSpan = document.createElement("span");
        errorSpan.textContent = "Este campo es obligatorio.";
        errorSpan.classList.add("error-message");
        field.parentNode.appendChild(errorSpan);
      }
    } else {
      field.classList.remove("error");
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.remove();
      }
    }
  }

  // Validación final al enviar
  const form = document.getElementById("userForm");
  form.addEventListener("submit", (event) => {
    let isValid = true;

    inputs.forEach((input) => {
      validateField(input);
      if (!input.value.trim()) isValid = false;
    });

    if (!isValid) {
      event.preventDefault();
      alert("Por favor, llena todos los campos obligatorios.");
    } else {
      alert("¡Formulario enviado exitosamente!");
    }
  });
});
