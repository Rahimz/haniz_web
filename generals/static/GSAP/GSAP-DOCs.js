document.addEventListener('DOMContentLoaded', (event) => {

    gsap.to('.hero-text', {
        scrollTrigger: {
            tigger: '.herofull',
            start: '500 center',
            end: '+=300',
            // end: () => "+=" + document.querySelector('.hero-text').offsetWidth,
            markers: true,
            scrub: 1,
            pin: true,
            toggleActions: "restart none none none",
        },
        x: -100,
        // duration: 1,
        // ease: none,
    });

});







// *** https://www.youtube.com/watch?v=X7IBa7vZjmo

//*** .to: which element to animate */
//*** trigger: which element causes the animation start (or end) */
//*** endTrigger: which element causes the animation to end */

//*** START | END > both are like 'a b' */
// a: refers to the element
// b: refers to the viewport
// > keywords: top, center, bottom
// > numbers: 10px, 10%(relative to top)
// > function value > end: () => "+=" + document.querySelector('.class').offsetWidth,
// > relative (to START) > end: '+=300',

//*** scrub: will reverse the animation when we scroll down */
// > can be SECONDs to cath up (it create a smooth effect)

//*** toggleActions > 'a b c d' */
// a: entering from bottom
// b: leaving from the top
// c: enter the screen again from top
// d: exit from the bottom
// > actions: play, pause, resume, reverse, restart, reset, complete, none

//*** duration */
// if we set the END, the DURATION will be ignored

//*** change VIEWPORT > scroller: '#ocntainer',
//*** change the axis > horizontal: true,







//*** EXAMPLEs */

// 1 > TIMELINE > 10:40
// let tl = gsap.timeline({
//     scrollTrigger: {
//         tigger: '.herofull',
//         start: '500 center',
//         end: '+=300',
//         markers: true,
//         scrub: 1,
//         toggleActions: "restart none none none",
//     },
// });
// tl.to('.hero-text', {
//     x: -100,
// }).to('.hero-text', {
//     backgroundColor: 'red',
// });


// 2 > TIMELINE > 12:30
// const tl = gsap.timeline();
// tl.from('.a', { xPercent: -100 })
//     .from('.b', { xPercent: 100 })
//     .from('.c', { yPercent: -100 });
// ScrollTrigger.create({
//     animation: tl,
//     trigger: '#container',
//     start: 'top top',
//     end: '+=400',
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
// });

// 3 > LOOP > 14:40
// gsap.utils.toArray('.panel').forEach((panel, i) => {
//     scrollTrigger.create({
//         trigger: panel,
//         start: 'top top',
//         pin: true,
//         pinSpacing: false, // example at 14:10
//     })
// })

// 4 > SCROLLING verticaly and MOVING horizontaly > 16:00

// 5 > set DEFAULTS > 20:40
// scrollTrigger.defaults({
//     toggleActions: "restart none none none",
//     markers: true,
//     scrub: true,
//     ...
// });
