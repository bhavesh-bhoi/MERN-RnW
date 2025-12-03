// carousel.ts
interface Slide {
    image: string;
    caption: string;
    link: string;
}

const slides: Slide[] = [
    {
        image:
            "https://images.unsplash.com/photo-1605385902206-f8ae60fa322a?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Sunrise over the mountains",
        link: "#alps",
    },
    {
        image:
            "https://images.unsplash.com/photo-1663806232064-3b0385cc4819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Golden hour in the Dolomites",
        link: "#dolomites",
    },
    {
        image:
            "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Misty forest awakening",
        link: "#forest",
    },
    {
        image:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Silent valley at dawn",
        link: "#valley",
    },
    {
        image:
            "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Sand dunes dancing with light",
        link: "#desert",
    },
    {
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Paradise found",
        link: "#beach",
    },
    {
        image:
            "https://images.unsplash.com/photo-1673712277551-ea12f7a11a71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Northern Lights magic",
        link: "#aurora",
    },
];

let index = 0;
const total = slides.length;

// Ensure the container exists
const slidesContainer = document.getElementById("slides-container");
if (!slidesContainer) {
    throw new Error("Element with id 'slides-container' not found in the DOM.");
}

// Create slides dynamically
slides.forEach((slide, i) => {
    const div = document.createElement("div");
    div.className = "slide";
    if (i === 0) div.classList.add("active");

    div.innerHTML = `
    <img src="${slide.image}" alt="Nature's Paradise ${i + 1}">
    <div class="slide-caption">${slide.caption}</div>
    <a href="${slide.link}" class="read-more-btn">
      Read More
    </a>
  `;

    slidesContainer.appendChild(div);
});

// Create dots container and dots
const dotsContainer = document.createElement("div");
dotsContainer.className = "dots";
const carouselRoot = document.querySelector(".carousel");
if (!carouselRoot) {
    throw new Error("Element with class 'carousel' not found in the DOM.");
}
carouselRoot.appendChild(dotsContainer);

for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");
    // Use an explicit typed callback
    dot.onclick = (() => {
        const idx = i;
        return () => goToSlide(idx);
    })();
    dotsContainer.appendChild(dot);
}

// After creating, query the collections with proper typing
const allSlides = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
const allDots = document.querySelectorAll(".dot") as NodeListOf<HTMLElement>;

// Navigation functions
function showSlide(n: number): void {
    if (n >= total) index = 0;
    else if (n < 0) index = total - 1;
    else index = n;

    // transform the container
    const slidesContainer = document.getElementById("slides-container")!;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    allSlides.forEach((s, i) => s.classList.toggle("active", i === index));
    allDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function nextSlide(): void {
    showSlide(index + 1);
}

function prevSlide(): void {
    showSlide(index - 1);
}

function goToSlide(n: number): void {
    showSlide(n);
}

// Start carousel
showSlide(0);
