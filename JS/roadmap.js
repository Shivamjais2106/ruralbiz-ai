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

      // Message functions
      function showMessage(text) {
        const box = document.getElementById("messageBox");
        box.innerText = text;
        box.style.opacity = 1;
        box.style.pointerEvents = "auto";
        setTimeout(() => {
          box.style.opacity = 0;
          box.style.pointerEvents = "none";
        }, 3000);
      }
      function viewDetails(info) {
        showMessage(info);
      }