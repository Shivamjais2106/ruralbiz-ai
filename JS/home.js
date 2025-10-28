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

      // --- Dynamic Typing ---
      const dynamicText = document.getElementById("dynamic-text");
      const words = [
        "Market Insights",
        "Funding Guidance",
        "Growth Strategies",
        "AI Guidance",
      ];

      let wordIndex = 0,
        charIndex = 0,
        isDeleting = false;

      function type() {
        const current = words[wordIndex];
        if (isDeleting) {
          dynamicText.textContent = current.substring(0, charIndex - 1);
          charIndex--;
        } else {
          dynamicText.textContent = current.substring(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 1500); // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 150); // Short pause before next word
        } else {
          setTimeout(type, isDeleting ? 100 : 150);
        }
      }

      document.addEventListener("DOMContentLoaded", type);