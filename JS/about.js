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

      // Reveal on Scroll Animation
      window.addEventListener("scroll", reveal);
      function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const revealTop = reveals[i].getBoundingClientRect().top;
          const revealPoint = 150;
          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      // Counter Animation
      const counters = [
        { id: "count1", end: 500 },
        { id: "count2", end: 1200 },
        { id: "count3", end: 350 },
      ];

      counters.forEach((counter) => {
        const el = document.getElementById(counter.id);
        let count = 0;
        const update = setInterval(() => {
          count += Math.ceil(counter.end / 100);
          if (count >= counter.end) {
            el.textContent = counter.end + "+";
            clearInterval(update);
          } else {
            el.textContent = count;
          }
        }, 30);
      });