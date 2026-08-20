document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const heroBtn = document.getElementById('heroBtn');
  const bookingSection = document.getElementById('booking');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeModal = document.getElementById('closeModal');
  const bookingForm = document.getElementById('bookingForm');
  const successMsg = document.getElementById('successMessage');

  // Smooth Scroll to Booking Section
  heroBtn.addEventListener('click', () => {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullImgSrc = item.getAttribute('data-full');
      lightboxImg.src = fullImgSrc;
      lightbox.style.display = 'flex';
    });
  });

  // Close Lightbox
  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };

  closeModal.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Handle Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide form and show success message
    bookingForm.style.display = 'none';
    successMsg.style.display = 'block';
  });
});