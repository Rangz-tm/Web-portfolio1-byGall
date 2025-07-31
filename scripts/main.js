// Toggle & Responsive Navigation
(() => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('nav');

  if (!burger || !navList) return;

  // --- animation timeline (pure CSS-driven) ---
  burger.addEventListener('click', () => {
    // nav list animation
    const isOpen = navList.classList.contains('nav-active');
    navList.classList.toggle('nav-active');

    // burger icon morphing
    burger.classList.toggle('toggle-burger');

    // stagger-fade links (if any)
    const links = navList.querySelectorAll('a');
    links.forEach((link, idx) => {
      link.style.setProperty('--delay', `${idx * 0.06}s`);
      link.classList.toggle('link-animate', !isOpen);
    });
  });
})();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

        

