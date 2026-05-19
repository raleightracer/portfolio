  function openModal(imageSrc, certTitle) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    
    if (!modal) return;

    // Prepare layout before animating
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalTitle.textContent = certTitle;
    
    // Brief delay to allow the display change to register so transition works
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }

  function closeModal() {
    const modal = document.getElementById('certModal');
    if (!modal) return;

    modal.classList.remove('show');
    
    // Delay setting display none slightly to let the fade animation finish
    setTimeout(() => {
      if(!modal.classList.contains('show')) {
        modal.style.display = 'none';
      }
    }, 200);
  }

  // Mobile Menu Toggle
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon between Bars and X
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      });
    }
  });
