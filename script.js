// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

// Contact form validation
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

const validators = {
  name(value) {
    if (!value.trim()) {
      return "Please enter your name.";
    }

    if (value.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }

    return "";
  },
  email(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      return "Please enter your email.";
    }

    if (!emailPattern.test(value.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  },
  phone(value) {
    const digits = value.replace(/\D/g, "");

    if (!value.trim()) {
      return "Please enter your phone number.";
    }

    if (digits.length < 10) {
      return "Please enter a valid phone number.";
    }

    return "";
  },
  service(value) {
    if (!value.trim()) {
      return "Please select a service.";
    }

    return "";
  },
  message(value) {
    if (!value.trim()) {
      return "Please enter your message.";
    }

    if (value.trim().length < 10) {
      return "Message must be at least 10 characters.";
    }

    return "";
  }
};

function showError(field, message) {
  const formGroup = field.closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  formGroup.classList.toggle("error", Boolean(message));
  errorMessage.textContent = message;
}

function validateField(field) {
  const validator = validators[field.name];

  if (!validator) {
    return true;
  }

  const error = validator(field.value);
  showError(field, error);
  return !error;
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = Array.from(contactForm.querySelectorAll("input, select, textarea"));
    const validationResults = fields.map(validateField);
    const isValid = validationResults.every(Boolean);

    if (!isValid) {
      formStatus.textContent = "";
      return;
    }

    formStatus.textContent = "Thank you. Your enquiry has been received.";
    contactForm.reset();
  });

  contactForm.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea")) {
      validateField(event.target);
      formStatus.textContent = "";
    }
  });
}
