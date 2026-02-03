const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".zoom").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src; // ← ここが肝
  });
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
});
