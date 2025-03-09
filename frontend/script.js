const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

// Function to validate required fields
function validateFields(page) {
  const inputs = document.querySelectorAll(`.page:nth-child(${page}) input, .page:nth-child(${page}) select`);
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill in all fields before proceeding.");
      return false;
    }
  }
  return true;
}

// First Next Button (Personal Details -> Health Info)
nextBtnFirst.addEventListener("click", function(event) {
  event.preventDefault();
  if (!validateFields(1)) return;

  slidePage.style.marginLeft = "-33.33%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

// Second Next Button (Health Info -> Submit)
nextBtnSec.addEventListener("click", function(event) {
  event.preventDefault();
  if (!validateFields(2)) return;

  slidePage.style.marginLeft = "-66.66%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

// Submit Button
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!validateFields(3)) return;

  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;

  setTimeout(function() {
    alert("Your Form has been Successfully Submitted!");
    location.reload();
  }, 800);
});

// Previous Button (Health Info -> Personal Details)
prevBtnSec.addEventListener("click", function(event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// Previous Button (Submit -> Health Info)
prevBtnThird.addEventListener("click", function(event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-33.33%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
