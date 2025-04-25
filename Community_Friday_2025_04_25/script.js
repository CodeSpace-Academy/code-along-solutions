const ratingBubbles = document.querySelectorAll('.rating-bubble');
const submitButton = document.querySelector('.submit-button');
const ratingContainer = document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.thank-you-container');
const resultText = document.querySelector('.rating-result-text');

let selectedRating = null;

// Add event listeners to each rating bubble
ratingBubbles.forEach((bubble) => {
  bubble.addEventListener('click', () => {
    // Remove 'selected' class from all bubbles
    ratingBubbles.forEach((b) => b.classList.remove('selected'));

    // Add 'selected' class to clicked bubble
    bubble.classList.add('selected');

    // Store selected rating
    selectedRating = bubble.textContent.trim();
  });
});

// Handle submit button click
submitButton.addEventListener('click', () => {
  if (selectedRating) {
    resultText.textContent = `You selected ${selectedRating} out of 5`;

    // Swap containers
    ratingContainer.classList.add('hidden');
    thankYouContainer.classList.remove('hidden');
  } else {
    alert('Please select a rating before submitting!');
  }
});
