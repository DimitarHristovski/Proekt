function navigateTo(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });

  const navbar = document.getElementById("navbar");
  navbar.classList.remove("no-navbar"); // Corrected line to remove the class
}
