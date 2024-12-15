
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Error message elements
const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Form submit handler
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Reset error messages and input backgrounds
    nameError.style.display = "none";
    
    emailError.style.display = "none";
    messageError.style.display = "none";
   
    document.getElementById("name").style.backgroundColor = "";
    document.getElementById("email").style.backgroundColor = "";
    document.getElementById("message").style.backgroundColor = "";

    // Check if the name field is empty
    const name = document.getElementById("name").value;
    if (name === "") 
        {
        isValid = false;
      
        nameError.style.display = "inline"; document.getElementById("name").style.backgroundColor = "#f8d7da"; 
        

    }

    // Check if the email field is empty
    const email = document.getElementById("email").value;
    if (email === "") {
        isValid = false; emailError.style.display = "inline";
        
        document.getElementById("email").style.backgroundColor = "#f8d7da"; 
    }

    // Check if the message field is empty
    const message = document.getElementById("message").value;
    if (message === "") {
        isValid = false;
        messageError.style.display = "inline";
        document.getElementById("message").style.backgroundColor = "#f8d7da"; 
    }

    // Show success message if all fields are filled
    if (isValid) {
        successMessage.textContent = "Message submitted.";
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
});
