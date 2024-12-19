
document.querySelectorAll("#navbar a").forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      const sectionId = anchor.getAttribute("href");
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });
  