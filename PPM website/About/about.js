// home.js

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle dropdown menu visibility and animate hamburger
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");
    });
  
    // Auto-close dropdown when a link is clicked
    document.querySelectorAll("#nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("show");
      });
    });
  });
  
  // about.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
    });
  });

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, i) => {
    const button = item.querySelector(".faq-question");

    // Add icon span
    const icon = document.createElement("span");
    icon.className = "faq-toggle-icon";
    icon.textContent = i === 0 ? "▼" : "▶";
    icon.style.float = "right";
    button.appendChild(icon);

    // First one expanded
    if (i === 0) {
      item.classList.add("active");
    }

    button.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      faqItems.forEach(faq => {
        faq.classList.remove("active");
        faq.querySelector(".faq-toggle-icon").textContent = "▶";
      });

      // Open this one if it wasn't already open
      if (!isActive) {
        item.classList.add("active");
        icon.textContent = "▼";
      }
    });
  });
});
