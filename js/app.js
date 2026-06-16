const extraContainer = document.getElementById("extra-products");
const showMoreBtn = document.getElementById("show-more-btn");

showMoreBtn.addEventListener("click", () => {
  extraContainer.dataset.expanded = "true";
  showMoreBtn.classList.add("hidden");
});