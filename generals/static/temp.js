console.clear();

// const colors = [
//     "#24478f",
//     "#cc0000",
//     "#663300",
//     "#006600",
//     "#cc5200",
//     "#6b00b3"
// ];


// slider0
const sliders0 = gsap.utils.toArray(".slider0");
const slidesArray0 = sliders0.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
slidesArray0.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            // backgroundColor: colors[i],
            xPercent: i > 0 && 100
        });
    });
});

// slider1
const sliders1 = gsap.utils.toArray(".slider1");
const slidesArray1 = sliders1.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
slidesArray1.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            // backgroundColor: colors[i],
            xPercent: i > 0 && 100
        });
    });
});

// slider2
const sliders2 = gsap.utils.toArray(".slider2");
const slidesArray2 = sliders2.map((slider) =>
    gsap.utils.toArray(".slide", slider)
);
slidesArray2.forEach((slides) => {
    slides.forEach((slide, i) => {
        gsap.set(slide, {
            // backgroundColor: colors[i],
            xPercent: i > 0 && 100
        });
    });
});




const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0;
let isTweening = false;




const gotoSlide = (value) => {
    if (isTweening) return;
    isTweening = true;

    const first0 = slidesArray0[0];
    const currentSlides0 = [];
    const nextSlides0 = [];
    const first1 = slidesArray1[0];
    const currentSlides1 = [];
    const nextSlides1 = [];
    // const first2 = slidesArray2[0];
    // const currentSlides2 = [];
    // const nextSlides2 = [];
    // 0
    slidesArray0.forEach((slides) => currentSlides0.push(slides[currentIndex]));
    slidesArray1.forEach((slides) => currentSlides1.push(slides[currentIndex]));
    // console.log(currentSlides1);

    if (first0[currentIndex + value] && first1[currentIndex + value]) {
        currentIndex += value;
    } else {
        currentIndex = value > 0 ? 0 : first1.length - 1;
    }

    slidesArray0.forEach((slides) => nextSlides0.push(slides[currentIndex]));
    if (value > 0) {
        gsap.set(nextSlides0, { xPercent: 100 });
        gsap.to(currentSlides0, {
            xPercent: -100,
            onComplete: () => (isTweening = false)
        });
    } else {
        gsap.set(nextSlides0, { xPercent: -100 });
        gsap.to(currentSlides0, {
            xPercent: 100,
            onComplete: () => (isTweening = false)
        });
    }
    gsap.to(nextSlides0, { xPercent: 0 });


    // 1

    // slidesArray1.forEach((slides) => currentSlides1.push(slides[currentIndex]));
    // if (first1[currentIndex + value]) {
    //     currentIndex += value;
    // } else {
    //     currentIndex = value > 0 ? 0 : first1.length - 1;
    // }
    // slidesArray1.forEach((slides) => nextSlides1.push(slides[currentIndex]));
    // if (value > 0) {
    //     gsap.set(nextSlides1, { xPercent: 100 });
    //     gsap.to(currentSlides1, {
    //         xPercent: -100,
    //         onComplete: () => (isTweening = false)
    //     });
    // } else {
    //     gsap.set(nextSlides1, { xPercent: -100 });
    //     gsap.to(currentSlides1, {
    //         xPercent: 100,
    //         onComplete: () => (isTweening = false)
    //     });
    // }
    // gsap.to(nextSlides1, { xPercent: 0 });
};

next.addEventListener("click", () => gotoSlide(-1));
prev.addEventListener("click", () => gotoSlide(1));