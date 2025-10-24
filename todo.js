function toggleLine(checkbox) {
  const label = checkbox.parentElement; // checkbox का parent label पकड़ें

  if (checkbox.checked) {
    label.style.textDecoration = "line-through"; // line add
    label.style.color = "gray"; // optional: color change
  } else {
    label.style.textDecoration = "none"; // line remove
    label.style.color = "black"; // original color
  }
}

// सभी checkboxes के लिए event listener जोड़ना (जो onchange नहीं हैं)
const checkboxes = document.querySelectorAll('.main input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    toggleLine(this);
  });
});
