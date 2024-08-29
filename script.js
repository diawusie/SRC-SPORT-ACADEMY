// Get the hamburger icon and the nav menu
document.addEventListener('DOMContentLoaded',() => {
  const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');



// Add an event listener to the hamburger icon
if (hamburger && navMenu) {
hamburger.addEventListener('click', () => {
  // Toggle the nav menu
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  

  document.querySelectorAll(".nan-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

  }))
}else {
  console.error("Error: .hamburger or .nav-menu elements not found.")
}
});