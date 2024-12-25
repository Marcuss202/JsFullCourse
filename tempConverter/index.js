const inputTemp = document.getElementById("inputTemp");
const CelToFah = document.getElementById("CelToFah");
const FahToCel = document.getElementById("FahToCel");
// const conversionSubmit = document.getElementById("conversionSubmit");
let conversionAnswer = document.getElementById("conversionAnswer");

// F = C x (9/5) +32
function convert() {
    let submitedAnswer = inputTemp.value
    if(isNaN(submitedAnswer) || submitedAnswer.trim() === "") {
        conversionAnswer.textContent = (`Input VALID numbers`)
    }
    else{
        submitedAnswer = Number(submitedAnswer);

        if(CelToFah.checked) { // CELsius to Fahrenheit --------------------
            answer = (submitedAnswer * (9/5) + 32).toFixed(1);
            conversionAnswer.textContent = (`${answer}°F`)
        }
        else if(FahToCel.checked) { //FAHrenheit to Celsius -----------------------
            answer = ((submitedAnswer - 32) * (5/9)).toFixed(1);
            conversionAnswer.textContent = (`${answer}°C`)
        }
        else {
            conversionAnswer.textContent = (`Choose a conversion`)
        }
    }
}
