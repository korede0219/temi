document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
function handleImageError(image) {
    image.onerror = null; // Prevents infinite loop
    image.src = 'images/default.jpg'; // Fallback image
    image.alt = 'Image not available'; // Update alt text
}
