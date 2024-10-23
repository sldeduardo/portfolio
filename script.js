document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects");
    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");

    const links = projectsContainer.getElementsByTagName("a");
    let currentIndex = 0;

    Array.from(links).forEach(link => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        item.innerHTML = `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
        carouselInner.appendChild(item);
    });

    projectsContainer.innerHTML = '';
    projectsContainer.appendChild(carouselInner);

    const carousel = document.createElement("div");
    carousel.id = "carousel";
    carousel.appendChild(carouselInner);
    
    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    prevButton.innerText = "❮";
    prevButton.onclick = () => moveCarousel(-1);
    
    const nextButton = document.createElement("button");
    nextButton.classList.add("next");
    nextButton.innerText = "❯";
    nextButton.onclick = () => moveCarousel(1);

    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
    projectsContainer.appendChild(carousel);

    function moveCarousel(direction) {
        const totalItems = carouselInner.children.length;
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        const offset = -currentIndex * 100; // Calcula o deslocamento
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    carouselInner.style.display = "flex";
});