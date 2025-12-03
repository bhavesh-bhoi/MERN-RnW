const slides = [
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
const slidesContainer = document.getElementById("slides-container");

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

// Create dots
const dotsContainer = document.createElement("div");
dotsContainer.className = "dots";
document.querySelector(".carousel").appendChild(dotsContainer);

for (let i = 0; i < total; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

const allSlides = document.querySelectorAll(".slide");
const allDots = document.querySelectorAll(".dot");

// Navigation functions
function showSlide(n) {
  if (n >= total) index = 0;
  else if (n < 0) index = total - 1;
  else index = n;

  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  allSlides.forEach((s, i) => s.classList.toggle("active", i === index));
  allDots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

function goToSlide(n) {
  showSlide(n);
}

// Auto-play (5 seconds)
let autoPlay = setInterval(nextSlide, 5000);

// Start carousel
showSlide(0);
