function copyCode(button) {
  const code = button.nextElementSibling.innerText;
  navigator.clipboard.writeText(code);

  button.innerText = "Copied!";
  setTimeout(() => {
    button.innerText = "Copy";
  }, 1500);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".suggestion").forEach(el => {
  observer.observe(el);
});



