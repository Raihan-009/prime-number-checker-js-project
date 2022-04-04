const inputNumber = document.querySelector(".input-number");
const checkButton = document.querySelector(".check-button");
const outputText = document.querySelector(".output");
inputNumber.addEventListener("keyup", () => {
  filterNumber = inputNumber.value.replace(/[^0-9]/gi, "");
  console.log(filterNumber);

  if (filterNumber) {
    return checkButton.classList.add("active");
  }
  checkButton.classList.remove("active");
  outputText.style.display = "none";
});
