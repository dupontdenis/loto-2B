const container = document.querySelector(".container");
const choices = document.querySelector(".choices");

const handleSelect = function (event) {
  const targetElement = event.target; 

  if (targetElement.closest("div")) {
    const selectedDiv = targetElement.closest(".container > div");
    // Toggle selected class
    selectedDiv.classList.toggle("selected");
    const selectedElements = document.querySelectorAll(
      ".container > div.selected"
    );
    // Update choices display
    choices.textContent = Array.from(selectedElements)
      .map((el) => el.getAttribute("data-value")) // return a string like "3"
      .sort() 
      .join(", ");
  }
};

container.addEventListener("click", handleSelect, false);
