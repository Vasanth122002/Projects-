window.addEventListener("scroll", function () {
  const skillsSection = document.getElementById("skills");
  const skillBars = document.querySelectorAll(".skill-progress");
  const skillSectionTop = skillsSection.getBoundingClientRect().top;
  if (skillSectionTop <= this.window.innerHeight / 1.5) {
    skillBars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-progress");
    });
  }
});

const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let errorMessage = "";
  if (name === "") {
    errorMessage += "Name is required.\n";
  }
  if (email === "") {
    errorMessage += "Email is required.\n";
  }
  if (message === "") {
    errorMessage += "Message is required.\n";
  }
  if (errorMessage) {
    alert(errorMessage);
  } else {
    alert("Form submitted successfully!");
  }
});
/*
const openSidebar = document.getElementById("openSidebar");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelectorAll("main-content");
openSidebar.addEventListener("click", () => {
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0px";
  }
});
*/
