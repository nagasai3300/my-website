function showMessage() {
    alert("Thanks for visiting my portfolio!");
}
function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    event.target.reset();
}