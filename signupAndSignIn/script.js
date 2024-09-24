document.getElementById("showSignUp").addEventListener("click", function () {
  document.querySelector(".container").classList.add("show-sign-up");
});

document.getElementById("showSignIn").addEventListener("click", function () {
  document.querySelector(".container").classList.remove("show-sign-up");
});

document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const button = document.getElementById("signUpButton");
    const spinner = document.getElementById("spinner");
    const buttonText = document.getElementById("buttonText");
    button.disabled = true;
    spinner.style.display = "inline-block";
    buttonText.textContent = "Signing Up...";
    setTimeout(() => {
      button.disabled = false;
      spinner.style.display = "none";
      buttonText.textContent = "Sign Up";
      alert("Sign Up successful!", "success");
    }, 2000);
    if (password.length < 6) {
      alert("Password must beat least 6 characters long");
      return;
    }
  });

document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;
    alert(`Sign In successful for : ${email}`);
  });

function togglePasswordVisibilitySignUp() {
  const passwordInput = document.getElementById("signUpPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function togglePasswordVisibilitySignIn() {
  const passwordInput = document.getElementById("signInPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
