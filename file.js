/* DOM Manipulation*/
const elements = document.getElementsByClassName('intro');

const element = document.querySelector('.intro');

// Create a new element
const newElement = createElement('p');
newElement.textContent = 'This is a new paragraph!';

// Append it to an existing element
const container = getElementById('container');
container.appendChild(newElement);

const button = cta.getElementsByClassName('.cta');

button.addEventListener('click', function() {
  alert('Button was clicked!');
})