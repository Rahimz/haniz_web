document.addEventListener('DOMContentLoaded', (event) => {

    // for first animations (whithour scrolling)
    document.getElementById('heroFirstLine').classList.add('heroFirstLine');
    document.getElementById('heroBox').classList.add('heroBox');
    document.getElementById('heroMainTitle').classList.add('heroMainTitle');
    document.getElementById('heroMainTitle').classList.add('heroMainTitle');
    document.getElementById('heroSubTitle').classList.add('heroSubTitle');

    // animations depending on scrolling
    ScrollTrigger.defaults({
        scrub: 1,
    });

    gsap.to('.hero-p', {
        scrollTrigger: {
            trigger: '.hero-p',
            start: '-20 90%',
            end: '+=80',
            id: 'hero-p',
            // markers: true,
        },
        opacity: 1,
        marginTop: '22px',
    });

    gsap.to('.heroSecondLine', {
        scrollTrigger: {
            trigger: '.hero-p',
            start: '-20 100%',
            end: '+=400',
            // id: '2ndLine',
            // markers: true,
        },
        top: 0,
        height: '97%',
    });

});
