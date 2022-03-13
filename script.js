const input = document.querySelector("#converter");
const convert = document.querySelector(".conv");
const reset = document.querySelector(".reset");
const change = document.querySelector(".change");
const span1 = document.querySelector(".one");
const span2 = document.querySelector(".two");
const result = document.querySelector(".result");

const swapTemp = () => {
  if (span1.textContent === "°C") {
    span1.textContent = "°F";
    span2.textContent = "°C";
    result.textContent = "";
  } else {
    span1.textContent = "°C";
    span2.textContent = "°F";
    result.textContent = "";
  }
};

const conv = () => {
  if (input.value !== "") {
    let deg = parseInt(input.value);
    if (span1.textContent === "°C") {
      result.textContent = `To jest ${(deg * 1.8 + 32).toFixed(1)}°F`;
      input.value = "";
    } else {
      result.textContent = `To jest ${((deg - 32) / 1.8).toFixed(1)}°C`;
      input.value = "";
    }
  } else {
    result.textContent = "Wprowadz wartość!";
  }
};

const rst = () => {
  input.value = "";
  result.textContent = "";
  span1.textContent = "°C";
  span2.textContent = "°F";
};

change.addEventListener("click", swapTemp);
convert.addEventListener("click", conv);
reset.addEventListener("click", rst);
