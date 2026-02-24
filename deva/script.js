// Get modals
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Get buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Get close icons
const closeBtns = document.querySelectorAll(".close");

// Open Login Modal
loginBtn.onclick = () => {
  loginModal.style.display = "flex";
};

// Open Signup Modal
signupBtn.onclick = () => {
  signupModal.style.display = "flex";
};

// Close Modal when clicking on X
closeBtns.forEach(btn => {
  btn.onclick = () => {
    btn.parentElement.parentElement.style.display = "none";
  };
});

// Close Modal when clicking outside
window.onclick = (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};
