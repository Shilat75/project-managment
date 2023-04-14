function isValidEmail(email) {
    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // example usage
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;
  
  if (isValidEmail(email)) {
    console.log('Valid email address');
  } else {
    console.log('Invalid email address');
  }
  