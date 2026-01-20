const tabButtons = document.querySelectorAll(".tab-btn");
const videoCards = document.querySelectorAll(".video-card");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active state
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        videoCards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
