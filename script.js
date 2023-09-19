const sliderEl = document.querySelector("#customRange");
const sliderValue = document.querySelector(".value2");
const card1 = document.querySelector(".c1 .card-header");
const card2 = document.querySelector(".c2 .card-header");
const card3 = document.querySelector(".c3 .card-header");
const borderC1 = document.querySelector(".c1")
const borderC2 = document.querySelector(".c2")
const borderC3 = document.querySelector(".c3")
const defaultVal = document.querySelector(".c1,.c2,.c3 .card-header")

sliderEl.addEventListener("input", (event) => {
    let tempSliderValue = event.target.value;


    if (tempSliderValue > 0 && tempSliderValue <= 10) {
        card1.style.backgroundColor = "#0B5ED7";
        borderC1.style.borderColor = "#0B5ED7";

        card2.style.backgroundColor = "#F8F8F8";
        borderC2.style.borderColor = "#d2d2d2";

        card3.style.backgroundColor = "#F8F8F8";
        borderC3.style.borderColor = "#d2d2d2";

    } else if (tempSliderValue > 10 && tempSliderValue <= 20) {
        card2.style.backgroundColor = "#0B5ED7";
        borderC2.style.borderColor = "#0B5ED7";

        card1.style.backgroundColor = "#F8F8F8";
        borderC1.style.borderColor = "#d2d2d2";


        card3.style.backgroundColor = "#F8F8F8";
        borderC3.style.borderColor = "#d2d2d2";


    } else if (tempSliderValue > 20 && tempSliderValue <= 100) {
        card3.style.backgroundColor = "#0B5ED7";
        borderC3.style.borderColor = "#0B5ED7";

        card2.style.backgroundColor = "#F8F8F8";
        borderC2.style.borderColor = "#d2d2d2";
        
        card1.style.backgroundColor = "#F8F8F8";
        borderC1.style.borderColor = "#d2d2d2";

    } else {
        defaultVal.style.backgroundColor = "#F8F8F8";
    }

    sliderValue.textContent = tempSliderValue;

    const progress = (tempSliderValue / sliderEl.max) * 100;

})
