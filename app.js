const inputNumber = document.querySelector(".input-number");
//const checkButton = document.querySelector(".check-button");
const checkButton = document.querySelector("button");
checkButton.disabled = true;
const outputText = document.querySelector(".output");
inputNumber.addEventListener("keyup", () => {
  filterNumber = inputNumber.value.replace(/[^0-9]/gi, "");
  // console.log(filterNumber);

  if (filterNumber) {
    return (checkButton.disabled = false);
  }
  checkButton.disabled = true;
  outputText.style.display = "none";
});

checkButton.addEventListener("click", () => {
  console.log(filterNumber);
  outputText.style.display = "block";

  const number = filterNumber;
  let isPrime = true;

  if (number == 1) {
    return (outputText.innerHTML = `<span>${filterNumber}</span> is neither prime nor composite number.`);
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return (outputText.innerHTML = `Yes, <span>${filterNumber}</span> is a prime number.`);
    } else {
      return (outputText.innerHTML = `No! <span>${filterNumber}</span> is not a prime number.`);
    }
  } else {
    return (outputText.innerHTML = `No! <span>${filterNumber}</span> is not a prime number.`);
  }
});
