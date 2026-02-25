const form = document.querySelector(".main");

const firstName = document.querySelector('input[name="First_name"]');
const lastName = document.querySelector('input[name="last_name"]');
const email = document.querySelector('#Email_input');
const message = document.querySelector('#message_input');
const checkbox = document.querySelector('#check_box');
const radios = document.querySelectorAll('.radio');
const spans = document.querySelectorAll("span");

// REGEX PATTERNS
const nameRegex = /^[A-Za-z]{2,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const messageRegex = /^.{10,}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear errors
    spans.forEach(span => {
        span.style.display = "none";
        span.textContent = "";
    });

    // First Name (only letters, 2–20 chars)
    if (!nameRegex.test(firstName.value.trim())) {
        spans[0].style.display = "block";
        spans[0].textContent = "Enter a valid first name";
        isValid = false;
    }

    // Last Name (only letters, 2–20 chars)
    if (!nameRegex.test(lastName.value.trim())) {
        spans[1].style.display = "block";
        spans[1].textContent = "Enter a valid last name";
        isValid = false;
    }

    // Email
    if (!emailRegex.test(email.value.trim())) {
        spans[2].style.display = "block";
        spans[2].textContent = "Enter a valid email address";
        isValid = false;
    }

    // Radio (Query Type)
    const radioChecked = [...radios].some(radio => radio.checked);
    if (!radioChecked) {
        alert("Please select a query type");
        isValid = false;
    }

    // Message (minimum 10 characters)
    if (!messageRegex.test(message.value.trim())) {
        spans[3].style.display = "block";
        spans[3].textContent = "Message must be at least 10 characters";
        isValid = false;
    }

    // Checkbox
    if (!checkbox.checked) {
        alert("You must agree before submitting");
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Form submitted successfully ✅");
        form.reset();
    }
});