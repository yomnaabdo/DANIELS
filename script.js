document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-count");
            const count = +counter.innerText;
            const increment = target / 200; // Adjust speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});

    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        // Check if the page is scrolled more than 50px
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Add class
        } else {
            navbar.classList.remove('scrolled'); // Remove class
        }
    });
