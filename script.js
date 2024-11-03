function createAccount() {
    alert("Create Account button clicked!");
}

function login() {
    alert("Login button clicked!");
}

function signUp() {
    alert("Sign Up button clicked!");
}
function toggleNav() {
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('active');
}
function createAccount() {
    alert("Create Account feature coming soon!");
    // Additional interactive effects can be added here
}

function login() {
    alert("Login feature coming soon!");
    // Additional interactive effects can be added here
}

function signUp() {
    alert("Sign Up feature coming soon!");
    // Additional interactive effects can be added here
}

// Add a smooth scroll effect to the page
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.auth-buttons button');

    // Add hover animation effects to buttons
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected: ${item.textContent}`);
        // You can add further actions here, like redirecting to a booking form
    });
});
document.querySelectorAll('.price-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected: ${item.textContent}`);
        // You can add more actions here, like redirecting to a booking form
    });
});
document.querySelector('.book-now-btn').addEventListener('click', () => {
    alert('Redirecting to the booking page...');
    // You can add a redirection here, e.g., window.location.href = "booking-page-url";
});
// JavaScript to set location details dynamically
document.addEventListener("DOMContentLoaded", function () {
    const locationAddress = "Ugwuaji, Enugu State, Nigeria";
    const mapEmbedURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31608.30471648805!2d7.481639352524248!3d6.440293212569468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f352e285e961%3A0x95e4b9dd0a9fdf7e!2sUgwuaji%2C%20Enugu!5e0!3m2!1sen!2sng!4vYOUR_EMBED_LINK"; // Replace with your embed link

    // Set the address
    document.getElementById("location-address").textContent = locationAddress;

    // Set the map embed link
    document.getElementById("map-frame").src = mapEmbedURL;
});
// JavaScript for form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Display an alert or log the data (you can replace this with a real submission process)
    alert(`Thank you, ${name}! Your message has been received.`);
    console.log("Form Data:", { name, username, email });

    // Clear the form fields
    document.getElementById("contact-form").reset();
});
