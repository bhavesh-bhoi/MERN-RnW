// Set your target date/time here
const targetDate = new Date("2025-12-09T14:02:00").getTime();

const segments = {
  days: document.querySelector('.time-segment[data-unit="days"]'),
  hours: document.querySelector('.time-segment[data-unit="hours"]'),
  minutes: document.querySelector('.time-segment[data-unit="minutes"]'),
  seconds: document.querySelector('.time-segment[data-unit="seconds"]'),
};

const timeUpMessage = document.getElementById("time-up-message");

function updateSegment(unit, value) {
  const segment = segments[unit];
  if (!segment) return;

  const currentEl = segment.querySelector("[data-current]");
  const nextEl = segment.querySelector("[data-next]");

  const formatted = String(value).padStart(2, "0");
  const currentValue = currentEl.textContent;

  if (formatted === currentValue) return;

  nextEl.textContent = formatted;
  segment.classList.add("flip");

  const handleAnimationEnd = () => {
    segment.classList.remove("flip");
    currentEl.textContent = formatted;
    segment.removeEventListener("animationend", handleAnimationEnd);
  };

  segment.addEventListener("animationend", handleAnimationEnd);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    // zero out everything and show message
    ["days", "hours", "minutes", "seconds"].forEach((unit) =>
      updateSegment(unit, 0)
    );
    timeUpMessage.classList.add("visible");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateSegment("days", days);
  updateSegment("hours", hours);
  updateSegment("minutes", minutes);
  updateSegment("seconds", seconds);
}

// Initial paint
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
