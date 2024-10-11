function validateInput() {
  const uname = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const passwordCheck = document.getElementById("passwordCheck").value;
  const ageGroup = document.getElementById("age-group").value;
  const errorMessagesDiv = document.getElementById("errorMessages");

  let valid = true;
  let errorMessages = '';

  const regexUname = /^[a-z0-9]+$/;
  const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net|org|edu)$/;
  const regexPhone = /^\(\d{3}\)-\d{3}-\d{4}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
  errorMessagesDiv.innerHTML = '';
  
  if (!regexUname.test(uname) || uname.length < 4 || uname.length > 12) {
    errorMessages += '<p class="invalid-input">Username must be 4-12 characters long and contain only lowercase letters and numbers.</p>';
    valid = false;
  }
  if (!regexEmail.test(email)) {
    errorMessages += '<p class="invalid-input">Email must contain an "@" symbol and end with .com, .net, .org, or .edu.</p>';
    valid = false;
  }
  if (!regexPhone.test(phone)) {
    errorMessages += '<p class="invalid-input">Phone number must be in the format (xxx)-xxx-xxxx.</p>';
    valid = false;
  }
  if (!regexPassword.test(password)) {
    errorMessages += '<p class="invalid-input">Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.</p>';
    valid = false;
  }
  if (password !== passwordCheck) {
    alert("Passwords do not match!");
    valid = false;
  }

  const requiredFields = {
    "Username": uname,
    "Email": email,
    "Phone Number": phone,
    "Password": password,
    "Password Check": passwordCheck,
    "Gender": document.querySelector('input[name="gender"]:checked'),
    "Age Group": ageGroup
  };
  for (const field in requiredFields) {
    if (!requiredFields[field]) {
      errorMessages += `<p class="error-message">${field} is required.</p>`;
      valid = false;
    }
  }
  
  if (!valid) {
    errorMessagesDiv.innerHTML = errorMessages;
  }
  return valid; // Submit if valid is true
}
document.getElementById("resetButton").addEventListener("click", function() {
  document.getElementById("errorMessages").innerHTML = '';
});
