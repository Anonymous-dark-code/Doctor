document.getElementById("surpriseBtn").addEventListener("click", () => {
  // Hide first card
  document.getElementById("mainCard").style.display = "none";

  // Show surprise card
  const card = document.getElementById("surpriseCard");
  card.classList.remove("hidden");

  // Floating hearts effect
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.classList.add("floating-heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    setTimeout(() => heart.remove(), 6000);
  }
});
