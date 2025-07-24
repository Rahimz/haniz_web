console.clear();

const sliders = gsap.utils.toArray(".slider");
const slidesArray = sliders.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);

const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0;
let isTweening = false;

// set the horizontal translation for each slide
slidesArray.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            xPercent: i > 0 && 100
        });
    });
});

const gotoSlide = (value) => {
    if (isTweening) return;
    isTweening = true;
    const first = slidesArray[0];
    const currentSlides = [];
    const nextSlides = [];
    slidesArray.forEach((slides) => currentSlides.push(slides[currentIndex]));
    if (first[currentIndex + value]) {
        currentIndex += value;
    } else {
        currentIndex = value > 0 ? 0 : first.length - 1;
    }
    slidesArray.forEach((slides) => nextSlides.push(slides[currentIndex]));
    if (value > 0) {
        gsap.set(nextSlides, { xPercent: 100 });
        gsap.to(currentSlides, {
            xPercent: -100,
            onComplete: () => (isTweening = false)
        });
    } else {
        gsap.set(nextSlides, { xPercent: -100 });
        gsap.to(currentSlides, {
            xPercent: 100,
            onComplete: () => (isTweening = false)
        });
    }
    gsap.to(nextSlides, { xPercent: 0 });
};

next.addEventListener("click", () => gotoSlide(-1));
prev.addEventListener("click", () => gotoSlide(1));