// script.js

// Get the button element
const btn = document.querySelector('.btn');

// Add an event listener to the button
btn.addEventListener('click', () => {
  // Get the modal element
  const modal = document.querySelector('.modal');

  // Show the modal
  modal.style.display = 'block';

  // Get the love message element
  const loveMessage = document.querySelector('.love-message');

  // Show the love message
  loveMessage.style.display = 'block';

  // Get the text to display
  const text = 'Saya sangat mencintaimu dan menghargai keberadaanmu dalam hidup saya.';

  // Display the text
  loveMessage.innerHTML = text;
});

// Get the close button element
const closeButton = document.querySelector('.close');

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Get the modal element
  const modal = document.querySelector('.modal');

  // Hide the modal
  modal.style.display = 'none';

  // Get the love message element
  const loveMessage = document.querySelector('.love-message');

  // Hide the love message
  loveMessage.style.display = 'none';
});