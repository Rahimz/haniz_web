console.clear();

// A
const slidersA = gsap.utils.toArray(".slider-a");
const slidesArrayA = slidersA.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
const nextA = document.getElementById("next-a");
const prevA = document.getElementById("prev-a");
let currentIndexA = 0;
let isTweeningA = false;
slidesArrayA.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            xPercent: i > 0 && 100
        });
    });
});

// B
const slidersB = gsap.utils.toArray(".slider-b");
const slidesArrayB = slidersB.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
const nextB = document.getElementById("next-b");
const prevB = document.getElementById("prev-b");
let currentIndexB = 0;
let isTweeningB = false;
slidesArrayB.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            xPercent: i > 0 && 100
        });
    });
});

// C
const slidersC = gsap.utils.toArray(".slider-c");
const slidesArrayC = slidersC.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
const nextC = document.getElementById("next-c");
const prevC = document.getElementById("prev-c");
let currentIndexC = 0;
let isTweeningC = false;
slidesArrayC.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            xPercent: i > 0 && 100
        });
    });
});




const gotoSlideA = (value) => {
    if (isTweeningA) return;
    isTweeningA = true;
    const first = slidesArrayA[0];
    const currentSlides = [];
    const nextSlides = [];
    slidesArrayA.forEach((slides) => currentSlides.push(slides[currentIndexA]));
    if (first[currentIndexA + value]) {
        currentIndexA += value;
    } else {
        currentIndexA = value > 0 ? 0 : first.length - 1;
    }
    slidesArrayA.forEach((slides) => nextSlides.push(slides[currentIndexA]));
    if (value > 0) {
        gsap.set(nextSlides, { xPercent: 100 });
        gsap.to(currentSlides, {
            xPercent: -100,
            onComplete: () => (isTweeningA = false)
        });
    } else {
        gsap.set(nextSlides, { xPercent: -100 });
        gsap.to(currentSlides, {
            xPercent: 100,
            onComplete: () => (isTweeningA = false)
        });
    }
    gsap.to(nextSlides, { xPercent: 0 });
};
const gotoSlideB = (value) => {
    if (isTweeningB) return;
    isTweeningB = true;
    const first = slidesArrayB[0];
    const currentSlides = [];
    const nextSlides = [];
    slidesArrayB.forEach((slides) => currentSlides.push(slides[currentIndexB]));
    if (first[currentIndexB + value]) {
        currentIndexB += value;
    } else {
        currentIndexB = value > 0 ? 0 : first.length - 1;
    }
    slidesArrayB.forEach((slides) => nextSlides.push(slides[currentIndexB]));
    if (value > 0) {
        gsap.set(nextSlides, { xPercent: 100 });
        gsap.to(currentSlides, {
            xPercent: -100,
            onComplete: () => (isTweeningB = false)
        });
    } else {
        gsap.set(nextSlides, { xPercent: -100 });
        gsap.to(currentSlides, {
            xPercent: 100,
            onComplete: () => (isTweeningB = false)
        });
    }
    gsap.to(nextSlides, { xPercent: 0 });
};
const gotoSlideC = (value) => {
    if (isTweeningC) return;
    isTweeningC = true;
    const first = slidesArrayC[0];
    const currentSlides = [];
    const nextSlides = [];
    slidesArrayC.forEach((slides) => currentSlides.push(slides[currentIndexC]));
    if (first[currentIndexC + value]) {
        currentIndexC += value;
    } else {
        currentIndexC = value > 0 ? 0 : first.length - 1;
    }
    slidesArrayC.forEach((slides) => nextSlides.push(slides[currentIndexC]));
    if (value > 0) {
        gsap.set(nextSlides, { xPercent: 100 });
        gsap.to(currentSlides, {
            xPercent: -100,
            onComplete: () => (isTweeningC = false)
        });
    } else {
        gsap.set(nextSlides, { xPercent: -100 });
        gsap.to(currentSlides, {
            xPercent: 100,
            onComplete: () => (isTweeningC = false)
        });
    }
    gsap.to(nextSlides, { xPercent: 0 });
};

nextA.addEventListener("click", () => gotoSlideA(-1));
prevA.addEventListener("click", () => gotoSlideA(1));
nextB.addEventListener("click", () => gotoSlideB(-1));
prevB.addEventListener("click", () => gotoSlideB(1));
nextC.addEventListener("click", () => gotoSlideC(-1));
prevC.addEventListener("click", () => gotoSlideC(1));