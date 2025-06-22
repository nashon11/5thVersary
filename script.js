document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully 🌙❤️");

  // Music Controls
  const audio = document.getElementById('background-music');
  const playPauseBtn = document.getElementById('play-pause');
  const volumeControl = document.querySelector('.volume-control');

  // Initialize volume
  audio.volume = 0.5;

  // Play/Pause functionality
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="18"></line></svg>';
    }
  });

  // Volume control
  volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audio.volume = volume;
  });

  // Smooth fade-in for text content
  const textBlocks = document.querySelectorAll('.scrolling-text p, .photo');

  textBlocks.forEach((block, i) => {
    block.style.opacity = 0;
    block.style.transform = "translateY(20px)";
    
    // Create a keyframe animation
    const animation = block.animate([
      { opacity: 0, transform: "translateY(20px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], {
      duration: 1000,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      delay: i * 150
    });

    // Add animation end event
    animation.onfinish = () => {
      block.style.opacity = 1;
      block.style.transform = "translateY(0)";
    };
  });

  // Add parallax effect to background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
