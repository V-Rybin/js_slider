const sliderImage = document.querySelector(".slider-image");
const sliderButtons = document.querySelector(".slider_buttons-container");
const sliderDots = document.querySelector(".slider-dots");
const sliderText = document.querySelector(".slider-dots");
const textCity = document.getElementById("city");
const textApartamentArea = document.getElementById("apartament_area");
const textRepairTime = document.getElementById("repair_time");
const textRepairCost = document.getElementById("repair_cost");

let sliderImagesArray = [
    {
        text: "ROSTOV-ON-DON, ADMIRAL",
        file: "img/image_1.png",
        city: "Rostov-on-Don LCD admiral",
        apartament_area: "81 m2",
        repair_time: "3.5 months",
        repair_cost: "Upon request"

    },
    {
        text: "SOCHI RHIEVES",
        file: "img/image_2.jpg",
        city: "Sochi Thieves",
        apartament_area: "105 m2",
        repair_time: "4 months",
        repair_cost: "Upon request"
    },
    {
        text: "ROSTOV-ON-DON, PATRIOTIC",
        file: "img/image_3.jpg",
        city: "Rostov-on-Don Patriotic",
        apartament_area: "93 m2",
        repair_time: "3 months",
        repair_cost: "Upon request"
    },

];

let currentImageIndex = 0;

function paintElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        sliderButtons.innerHTML += `<button class="slider-button" id="slider-button${i}">${sliderImagesArray[i].text}</button>`;
        sliderDots.innerHTML += `<img class="dot" id="dot${i}" src="img/circle-full.png" alt="dot"></img>`;
    }
}

function addListenersToElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        document.getElementById(`slider-button${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
            setDescription()
        });

        document.getElementById(`dot${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
            setDescription()
        });

        
    }
}

paintElements();
addListenersToElements();
setImage();


const leftArrow = document.getElementById("left-arrow-button");
leftArrow.addEventListener('click', () => {
    currentImageIndex--;
    setImage();
    setDescription();
});

const rightArrow = document.getElementById("right-arrow-button");
rightArrow.addEventListener('click', () => {
    currentImageIndex++;
    setImage();
    setDescription();
});

function setImage() {
    if (currentImageIndex > sliderImagesArray.length - 1)
        currentImageIndex = 0;
    if (currentImageIndex < 0)
        currentImageIndex = sliderImagesArray.length - 1;

    sliderImage.style.backgroundImage = `url(${sliderImagesArray[currentImageIndex].file})`;

    reduceButtons();
    selectButton(currentImageIndex);

    reduceDots();
    selectDot(currentImageIndex);

}

function setDescription() {
    textCity.innerHTML = sliderImagesArray[currentImageIndex].city;
    textApartamentArea.innerHTML = sliderImagesArray[currentImageIndex].apartament_area;
    textRepairTime.innerHTML = sliderImagesArray[currentImageIndex].repair_time;
    textRepairCost.innerHTML = sliderImagesArray[currentImageIndex].repair_cost;
}

function selectButton(index) {
    let circle = sliderButtons.childNodes[index];
    circle.classList.add("slider-image__selected");
}

function reduceButtons() {
    sliderButtons.childNodes.forEach((item) => {
        item.classList.remove("slider-image__selected");
    });
}

function selectDot(index) {
    let circle = sliderDots.childNodes[index];
    circle.style.transform = "scale(1.2)";
    circle.src = "img/circle-empty.png";
}

function reduceDots() {
    sliderDots.childNodes.forEach((item) => {
        item.style.transform = "scale(1)";
        item.src = "img/circle-full.png";
    });
}
