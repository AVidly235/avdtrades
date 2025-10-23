document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('formMessage');

  if(email) {
    message.textContent = `Thanks for signing up, ${email}!`;
    message.style.color = 'green';
    document.getElementById('signupForm').reset();
  } else {
    message.textContent = 'Please enter a valid email.';
    message.style.color = 'red';
  }
});
