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