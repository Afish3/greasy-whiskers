document.querySelector("#scroll-down").addEventListener("click", () => {
    const nextSection = document.querySelector(".cal");
    nextSection.scrollIntoView({ behavior: "smooth" });
});