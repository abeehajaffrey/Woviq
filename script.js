"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav ul");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    const textFields = contactForm.querySelectorAll('input[type="text"]');
    const fields = {
        name: textFields[0],
        email: contactForm.querySelector('input[type="email"]'),
        business: textFields[1],
        details: contactForm.querySelector("textarea")
    };
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (Object.values(fields).every(Boolean) && submitButton) {
        const labels = {
            name: "Your name",
            email: "Email address",
            business: "Business name (optional)",
            details: "Project details"
        };

        Object.entries(fields).forEach(([name, field]) => {
            field.name = name;
            field.setAttribute("aria-label", labels[name]);
            field.addEventListener("input", () => {
                field.setCustomValidity("");
            });
        });

        fields.name.autocomplete = "name";
        fields.email.autocomplete = "email";
        fields.business.autocomplete = "organization";
        fields.details.required = true;

        const privacyNote = document.createElement("p");
        privacyNote.id = "enquiry-privacy";
        privacyNote.textContent =
            "Continuing opens WhatsApp with these details in a draft message. " +
            "Review and send it there to contact WOVIQ. " +
            "Do not include passwords, payment details or other sensitive information.";

        contactForm.insertBefore(privacyNote, submitButton);
        contactForm.setAttribute("aria-describedby", privacyNote.id);
        submitButton.textContent = "Continue on WhatsApp";

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            [fields.name, fields.email, fields.details].forEach((field) => {
                field.setCustomValidity(
                    field.value.trim() ? "" : "Please complete this field."
                );
            });

            if (!contactForm.reportValidity()) return;

            const message = [
                "Hello WOVIQ, I'd like to discuss a project.",
                "",
                "Name: " + fields.name.value.trim(),
                "Email: " + fields.email.value.trim()
            ];

            if (fields.business.value.trim()) {
                message.push("Business: " + fields.business.value.trim());
            }

            message.push(
                "",
                "Project details:",
                fields.details.value.trim()
            );

            const destination = new URL("https://wa.me/923015219002");
            destination.searchParams.set("text", message.join("\n"));
            window.location.assign(destination.href);
        });
    }
}
