const username = prompt("Please enter your name:");
const greetingText = username 
? `Welcome to BrightVision Creative Studio, ${username}!` 
: "Welcome to BrightVision Creative Studio!";
    
document.getElementById('greeting').innerText = greetingText;

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const output = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Gender:</strong> ${gender || "Not selected"}</p>
    <p><strong>Message:</strong> ${message}</p>
    `; 

    document.getElementById('output').innerHTML = output;
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}