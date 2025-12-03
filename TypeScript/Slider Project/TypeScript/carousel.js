var slides = [
    {
        image: "https://images.unsplash.com/photo-1605385902206-f8ae60fa322a?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Sunrise over the mountains",
        link: "#alps",
    },
    {
        image: "https://images.unsplash.com/photo-1663806232064-3b0385cc4819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Golden hour in the Dolomites",
        link: "#dolomites",
    },
    {
        image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Misty forest awakening",
        link: "#forest",
    },
    {
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Silent valley at dawn",
        link: "#valley",
    },
    {
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Sand dunes dancing with light",
        link: "#desert",
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&auto=format&q=80",
        caption: "Paradise found",
        link: "#beach",
    },
    {
        image: "https://images.unsplash.com/photo-1673712277551-ea12f7a11a71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Northern Lights magic",
        link: "#aurora",
    },
];
var index = 0;
var total = slides.length;
// Ensure the container exists
var slidesContainer = document.getElementById("slides-container");
if (!slidesContainer) {
    throw new Error("Element with id 'slides-container' not found in the DOM.");
}
// Create slides dynamically
slides.forEach(function (slide, i) {
    var div = document.createElement("div");
    div.className = "slide";
    if (i === 0)
        div.classList.add("active");
    div.innerHTML = "\n    <img src=\"".concat(slide.image, "\" alt=\"Nature's Paradise ").concat(i + 1, "\">\n    <div class=\"slide-caption\">").concat(slide.caption, "</div>\n    <a href=\"").concat(slide.link, "\" class=\"read-more-btn\">\n      Read More\n    </a>\n  ");
    slidesContainer.appendChild(div);
});
// Create dots container and dots
var dotsContainer = document.createElement("div");
dotsContainer.className = "dots";
var carouselRoot = document.querySelector(".carousel");
if (!carouselRoot) {
    throw new Error("Element with class 'carousel' not found in the DOM.");
}
carouselRoot.appendChild(dotsContainer);
var _loop_1 = function (i) {
    var dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0)
        dot.classList.add("active");
    // Use an explicit typed callback
    dot.onclick = (function () {
        var idx = i;
        return function () { return goToSlide(idx); };
    })();
    dotsContainer.appendChild(dot);
};
for (var i = 0; i < total; i++) {
    _loop_1(i);
}
// After creating, query the collections with proper typing
var allSlides = document.querySelectorAll(".slide");
var allDots = document.querySelectorAll(".dot");
// Navigation functions
function showSlide(n) {
    if (n >= total)
        index = 0;
    else if (n < 0)
        index = total - 1;
    else
        index = n;
    // transform the container
    var slidesContainer = document.getElementById("slides-container");
    slidesContainer.style.transform = "translateX(-".concat(index * 100, "%)");
    allSlides.forEach(function (s, i) { return s.classList.toggle("active", i === index); });
    allDots.forEach(function (d, i) { return d.classList.toggle("active", i === index); });
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
// Start carousel
showSlide(0);
