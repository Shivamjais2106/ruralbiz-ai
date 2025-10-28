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

      // Alternate colors for cards
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card, i) => {
        const icon = card.querySelector(".feature-icon");
        if (i % 2 === 0) {
          icon.classList.add("green");
        } else {
          icon.classList.add("violet");
        }
      });

      // Leaflet Map
      const map = L.map("map").setView([23.2599, 77.4126], 6); // India center
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Example markers for rural opportunities
      const opportunities = [
        { coords: [28.7041, 77.1025], title: "Local E-commerce Hub" },
        { coords: [19.076, 72.8777], title: "Food Processing Unit" },
        { coords: [12.9716, 77.5946], title: "Eco-Friendly Handicraft" },
      ];

      opportunities.forEach((op) => {
        L.marker(op.coords).addTo(map).bindPopup(op.title);
      });