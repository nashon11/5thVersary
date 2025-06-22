document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully 🌙❤️");

  // Optional: Soft fade-in for text content
  const textBlocks = document.querySelectorAll('.scrolling-text p, .photo');

  textBlocks.forEach((block, i) => {
    block.style.opacity = 0;
    block.style.transform = "translateY(20px)";
    setTimeout(() => {
      block.style.transition = "opacity 1s ease, transform 1s ease";
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    }, i * 150); // staggered effect
  });
});
