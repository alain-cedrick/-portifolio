document.addEventListener('DOMContentLoaded', function() {
    // Reference to the signup form
    const signupForm = document.getElementById('signupForm');

    // Event listener to handle form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const email = document.getElementById('email').value;
        const username = document.getElementById('Username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form data
        if (validateForm(email, username, password, confirmPassword)) {
            // If valid, create user object and save to localStorage
            const userData = {
                email: email,
                username: username,
                password: password, // In a real app, hash the password before saving!
            };
            saveUserData(userData);
            alert('You have successfully signed up!');
            signupForm.reset();  // Reset the form after successful signup
        }
    });

    // Function to validate form fields
    function validateForm(email, username, password, confirmPassword) {
        // Validate email format using regex
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        // Check password strength (at least 6 characters)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    }

    // Function to save user data in localStorage
    function saveUserData(userData) {
        // Get existing users from localStorage or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Add new user to the users array
        users.push(userData);

        // Save updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }
});
// Handle liking and commenting functionality for the blog page
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
      let likeCount = this.querySelector('.like-count');
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
  });
  
  document.querySelectorAll('.submit-comment-btn').forEach(button => {
    button.addEventListener('click', function() {
      const commentInput = this.previousElementSibling;
      const commentsList = this.nextElementSibling;
  
      const newComment = document.createElement('p');
      newComment.textContent = commentInput.value;
      commentsList.appendChild(newComment);
  
      commentInput.value = ''; // Clear input after comment submission
    });
  });
  
  // Admin dashboard functionality (e.g., adding blog posts)
  document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('post-title').value;
    const description = document.getElementById('post-description').value;
    const image = document.getElementById('post-image').value;
  
    const newPost = document.createElement('li');
    newPost.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <img src="${image}" alt="${title}" width="100">
      <button>Delete</button>
    `;
  
    document.getElementById('posts-list').appendChild(newPost);
  
    // Clear form inputs after submission
    document.getElementById('create-post-form').reset();
  });
  