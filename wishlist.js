roundbtn = document.getElementById("wishlist-button");
let counter = 0;
document.addEventListener("DOMContentLoaded", function () {
  const wishlistButton = document.getElementById("wishlist-btn");
  wishlistButton.addEventListener("click", function () {
    roundbtn.classList.toggle("wishlist-active");
    counter++;
    if (counter % 2 == 1) {
      wishlistButton.textContent = "Remove from wishlist";
    } else {
      wishlistButton.textContent = "Add to wishlist";
    }
  });
});
