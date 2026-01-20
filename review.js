/* =========================
   REVIEW CONTENT DATABASE
   ========================= */

const reviews = {
    fc25: {
        title: "EA SPORTS FC 25",
        meta: "Genre: Football | Platform: PC & Console | Reviewed by: Zaf | 2026",
        content: `
        <p>EA SPORTS FC 25 continues the evolution of football simulation by refining core mechanics rather than reinventing them. Player movement feels more responsive, with improved positioning and ball control that better reflects real-world football dynamics.</p>

        <p>The updated match physics add a noticeable layer of realism, especially during physical challenges and aerial duels. Stadium atmospheres and animations enhance immersion without overwhelming gameplay.</p>

        <h4>Pros</h4>
        <ul>
            <li>Improved gameplay realism</li>
            <li>Better player movement</li>
            <li>Immersive stadium presentation</li>
        </ul>

        <h4>Cons</h4>
        <ul>
            <li>Limited revolutionary changes</li>
            <li>Familiar experience for returning players</li>
        </ul>
        `
    },

    f124: {
        title: "F1 24",
        meta: "Genre: Racing | Platform: PC & Console | Reviewed by: Zaf | 2026",
        content: `
        <p>F1 24 delivers a racing experience that prioritizes precision and authenticity. The handling model feels more refined, allowing players to better understand speed, braking, and cornering dynamics.</p>

        <p>With detailed car models and accurately recreated circuits, the presentation supports an immersive Formula One experience. The game rewards focus and consistency.</p>

        <h4>Pros</h4>
        <ul>
            <li>Refined driving physics</li>
            <li>High visual fidelity</li>
            <li>Strong simulation feel</li>
        </ul>

        <h4>Cons</h4>
        <ul>
            <li>Limited innovation in modes</li>
            <li>Challenging for beginners</li>
        </ul>
        `
    },

    madden25: {
        title: "Madden NFL 25",
        meta: "Genre: American Football | Platform: PC & Console | Reviewed by: Zaf | 2026",
        content: `
        <p>Madden NFL 25 improves upon its established formula with smoother animations and more responsive gameplay. Player interactions during tackles and passes feel more natural.</p>

        <p>The improved AI decision-making creates more competitive and unpredictable matches, making each game feel engaging.</p>

        <h4>Pros</h4>
        <ul>
            <li>Improved AI behavior</li>
            <li>Smooth animations</li>
            <li>Consistent gameplay</li>
        </ul>

        <h4>Cons</h4>
        <ul>
            <li>Familiar mechanics</li>
            <li>Minor visual upgrades</li>
        </ul>
        `
    },

    nbalive25: {
        title: "NBA Live 25",
        meta: "Genre: Basketball | Platform: PC & Console | Reviewed by: Zaf | 2026",
        content: `
        <p>NBA Live 25 focuses on smoother pacing and improved player responsiveness. Offensive plays feel easier to execute without sacrificing control.</p>

        <p>The presentation remains clean and readable, making it accessible for both new and returning players.</p>

        <h4>Pros</h4>
        <ul>
            <li>Smooth player movement</li>
            <li>Accessible gameplay</li>
            <li>Balanced match flow</li>
        </ul>

        <h4>Cons</h4>
        <ul>
            <li>Limited innovation</li>
            <li>Does not challenge genre leaders</li>
        </ul>
        `
    }
};

/* =========================
   MODAL FUNCTIONS
   ========================= */

function openReview(key) {
    const modal = document.getElementById("reviewModal");
    const modalBody = document.getElementById("modal-body");

    if (reviews[key]) {
        modalBody.innerHTML = `
            <h2>${reviews[key].title}</h2>
            <p class="review-meta">${reviews[key].meta}</p>
            ${reviews[key].content}
        `;
        modal.style.display = "block";
    }
}

function closeReview() {
    document.getElementById("reviewModal").style.display = "none";
}

/* Close modal when clicking outside content */
window.onclick = function (event) {
    const modal = document.getElementById("reviewModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

/* =========================
   FILTER FUNCTIONALITY
   ========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const reviewCards = document.querySelectorAll(".review-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        /* Active button styling */
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        reviewCards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
