let currentIndex = 0;
        const totalSlides = document.querySelectorAll(".hero-slide").length;
        const slider = document.querySelector(".hero-slider");
        
        function showSlide(index) {
            currentIndex = (index + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        document.addEventListener("DOMContentLoaded", () => {
            setInterval(nextSlide, 3000);
        });

        function toggleCards() {
            let hiddenCards = document.querySelectorAll('.hidden');
            let btn = document.querySelector('.view-more');

            hiddenCards.forEach(card => {
                card.style.display = card.style.display === "none" || card.style.display === "" ? "block" : "none";
            });

            // Toggle button text
            btn.innerHTML = hiddenCards[0].style.display === "block" ? 'View Less <i class="fas fa-chevron-up"></i>' : 'View More <i class="fas fa-chevron-down"></i>';
        }

