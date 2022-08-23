let ratingValue = 0;
let ratingActive = false;

const submit = document.querySelector(".submit");
const rate = document.querySelector("#rate");
const evaluated = document.querySelector("#evaluated");

function ratingUser() {
  ratingValue = document.activeElement.value;
  document.getElementById("result").innerHTML = ratingValue;
  ratingActive = true;
}

submit.addEventListener("click", function () {
  rate.classList.add("hidden");
  evaluated.classList.remove("hidden");
});
