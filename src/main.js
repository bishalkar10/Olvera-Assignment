// Get references to the buttons and the reviews container
const scrollLeftButton = document.getElementById("scrollLeftButton");
const scrollRightButton = document.getElementById("scrollRightButton");
const reviewsContainer = document.querySelector(".reviews");
const reviewCards = reviewsContainer.querySelectorAll(".card"); // Replace ".card" with the actual class name of your review cards
const menuButton = document.querySelector(".bars");
const navBar = document.querySelector(".side-nav-links");
let open = false;

menuButton.addEventListener("click", () => {
  if (open === true) {
    navBar.style.display = "none";
    open = false;
    return;
  }
  if (open === false) {
    navBar.style.display = "flex";
    open = true;
    return;
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navBar.style.display = "none";
    return;
  }
});

// Function to scroll left
scrollLeftButton.addEventListener("click", () => {
  reviewsContainer.scrollBy(-400, 0);
});

// Function to scroll right
scrollRightButton.addEventListener("click", () => {
  reviewsContainer.scrollBy(400, 0);
});

// Add click event listeners to each review card
reviewCards.forEach((card) => {
  card.addEventListener("click", function () {
    // Remove active class from all cards
    reviewCards.forEach((card) => {
      card.classList.remove("active");
    });

    // Add active class to the clicked card
    card.classList.add("active");
  });
});
