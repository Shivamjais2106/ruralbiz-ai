    // --- Mobile Menu Toggle ---
      const mobileBtn = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      mobileBtn.addEventListener("click", () => {
        mobileMenu.style.display =
          mobileMenu.style.display === "flex" ? "none" : "flex";
        mobileBtn.innerHTML =
          mobileMenu.style.display === "flex"
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
      });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function handleFormSubmission(event) {
      event.preventDefault();
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const successMsg = document.getElementById('successMessage');
      const errorMsg = document.getElementById('errorMessage');

      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';
      errorMsg.style.animation = '';

      if (fullName === '' || email === '' || message === '' || !emailRegex.test(email)) {
        errorMsg.style.display = 'block';
        errorMsg.style.animation = 'shake 0.5s ease-in-out';
        return;
      }

      console.log({ fullName, email, subject, message });
      successMsg.style.display = 'block';
      setTimeout(() => { document.getElementById('contactForm').reset(); successMsg.style.display = 'none'; }, 5000);
    }
