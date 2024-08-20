const $ = document;
const weightInput = $.querySelector("#weight");
const heightInput = $.querySelector("#height");
const weightVal = $.querySelector("#weight-val");
const heightVal = $.querySelector("#height-val");
const bmiResult = $.querySelector("#result");
const categoryElem = $.querySelector("#category");

function bmiCalculator() {
  let weightValue = weightInput.value;
  let heightValue = heightInput.value;
  weightVal.innerHTML = `${weightValue} kg`;
  heightVal.innerHTML = `${heightValue} cm`;

  bmiValue = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);
  bmiResult.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    categoryElem.innerHTML = "UnderWeight";
    bmiResult.style.color = "#ffc44d";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    categoryElem.innerHTML = "NormalWeight";
    bmiResult.style.color = "#0be881";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    categoryElem.innerHTML = "OverWeight";
    bmiResult.style.color = "#ff884d";
  } else {
    categoryElem.innerHTML = "Obese";
    bmiResult.style.color = "#ff5e4d";
  }
}

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
