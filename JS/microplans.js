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
      // Message Functions
      function showMessage(text) {
        const box = document.getElementById("messageBox");
        box.innerText = text;
        box.style.opacity = "1";
        box.style.pointerEvents = "auto";
        setTimeout(() => {
          box.style.opacity = "0";
          box.style.pointerEvents = "none";
        }, 3000);
      }
      function viewPlanDetails(plan) {
        showMessage(`Loading detailed report for: "${plan}"`);
      }
      function generateNewPlan() {
        showMessage("AI is generating a new Microplan...");
      }

      // Refresh Productivity
      function refreshProductivity() {
        const scores = document.querySelectorAll(".productivity-score");
        scores.forEach((score) => {
          let newScore = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
          score.innerText = newScore + "%";
          score.classList.remove(
            "text-primary-blue",
            "text-secondary-green",
            "text-yellow",
            "text-red"
          );
          if (newScore > 85) {
            score.classList.add("text-secondary-green");
          } else if (newScore > 75) {
            score.classList.add("text-primary-blue");
          } else if (newScore > 70) {
            score.classList.add("text-yellow");
          } else {
            score.classList.add("text-red");
          }
        });
        showMessage("AI refreshed productivity insights.");
      }

      // Charts
      window.onload = function () {
        new Chart(document.getElementById("taskProgressChart"), {
          type: "doughnut",
          data: {
            labels: ["Completed", "Remaining"],
            datasets: [
              {
                data: [21, 14],
                backgroundColor: ["#28a745", "#007bff"],
                hoverOffset: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } },
          },
        });
        new Chart(document.getElementById("leadsTrendChart"), {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Leads",
                data: [35, 42, 49, 57],
                fill: true,
                borderColor: "#007bff",
                backgroundColor: "rgba(0,123,255,0.1)",
                tension: 0.3,
                pointBackgroundColor: "#007bff",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } },
          },
        });
      };