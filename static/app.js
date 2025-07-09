document.addEventListener('DOMContentLoaded', (event) => {

    // not in mobile devices 
    var width = window.innerWidth;
    if (width > 425) {
        // for first animations (whithour scrolling)
        document.getElementById('heroFirstLine').classList.add('heroFirstLine');
        document.getElementById('heroBox').classList.add('heroBox');
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
                end: '+=100',
                id: 'hero-p',
                // markers: true,
            },
            opacity: 1,
            marginTop: '22px',
        });

        gsap.to('.heroSecondLine', {
            scrollTrigger: {
                trigger: '.hero-p',
                start: '-20 80%',
                end: '+=400',
                // markers: true,
            },
            top: -10,
            height: '100%',
        });

        gsap.to('.valuesFirstLine', {
            scrollTrigger: {
                trigger: '.val-title',
                start: 'top 85%',
                end: '+=400',
                // markers: true,
            },
            left: 24,
        });

        gsap.to('.projectsFirstLine', {
            scrollTrigger: {
                trigger: '.pro-title',
                start: 'top 85%',
                end: '+=300',
                // markers: true,
            },
            top: 0,
        });

        gsap.to('.aboutFirstLine', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                end: '+=400',
                // markers: true,
            },
            left: 20,
        });
    }
});
