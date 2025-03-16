// ruins the animation
//  import gsap from 'gsap'

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  //adding animation triggered by mouse hover
  let top = document.querySelector("div.top");
  let animation = gsap.to("div.navigation", {
    paused: true,
    opacity: 1,
    transform: 'translateY(0)',
  });

  top.addEventListener("mouseenter", () => animation.play());
  top.addEventListener("mouseleave", () => animation.reverse());

  //responsive animation, allows disable for mobile
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1250px)", () => {
    gsap.to('.top', {
      // backgroundSize: '20vw',
      clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 40%)',
      duration: 1,
      scrollTrigger: {
        trigger: '.midtext',
        start: 'top 80%',
        end: 'top 70%',
        //numeric value increases smoothness
        //1 - not smooth
        //10 - very smooth
        scrub: 2,
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'black',
        //   fontSize: '2em',
        // },
        //we can also pause animation
        toggleActions: 'restart none none none',
      }
    })

    gsap.to('.socials', {
      top: '-440px',
      duration: 1,
      scrollTrigger: {
        trigger: '.midtext',
        start: 'top 80%',
        end: 'top 70%',
        //numeric value increases smoothness
        //1 - not smooth
        //10 - very smooth
        scrub: 2,
        // markers: {
        //     startColor: 'blue',
        //     endColor: 'black',
        //     fontSize: '2em',
        // },
        //we can also pause animation
        toggleActions: 'restart none none none',
      }
    })

    gsap.to('.midtext', {
      transform: 'translateX(0)',
      duration: 2,
      scrollTrigger: {
        trigger: '.midtext',
        start: 'top 90%',
        end: 'top 50%',
        //numeric value increases smoothness
        //1 - not smooth
        //10 - very smooth
        scrub: 2,
        //   markers: {
        //       startColor: 'blue',
        //       endColor: 'black',
        //       fontSize: '2em',
        //   },
        //we can also pause animation
        toggleActions: 'restart none none none',
      }
    })

    gsap.to('.midtext2', {
      transform: 'translateX(0)',
      duration: 2,
      scrollTrigger: {
        trigger: '.midtext2',
        start: 'top 90%',
        end: 'top 50%',
        //numeric value increases smoothness
        //1 - not smooth
        //10 - very smooth
        scrub: 2,
        //   markers: {
        //       startColor: 'blue',
        //       endColor: 'black',
        //       fontSize: '2em',
        //   },
        //we can also pause animation
        toggleActions: 'restart none none none',
      }
    })

    gsap.to('.at_school', {
      transform: 'translateX(0)',
      duration: 2,
      scrollTrigger: {
        trigger: 'img.at_school',
        start: 'top 70%',
        end: 'top 50%',
        //numeric value increases smoothness
        //1 - not smooth
        //10 - very smooth
        scrub: 2,
        //   markers: {
        //       startColor: 'blue',
        //       endColor: 'black',
        //       fontSize: '2em',
        //   },
        //we can also pause animation
        toggleActions: 'restart none none none',
      }
    })

  });
});

let mm2 = gsap.matchMedia();
mm2.add("(max-width: 1250px)", () => {
  gsap.to('.top', {
    // backgroundSize: '20vw',
    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 80%)',
    duration: 1,
    scrollTrigger: {
      trigger: '.midtext',
      // start: 'top 90%',
      // end: 'top 80%',
      start: 'top 650',
      end: 'top 450',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 2,
      // markers: {
      //   startColor: 'blue',
      //   endColor: 'black',
      //   fontSize: '2em',
      // },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })

  gsap.to('.socials', {
    top: '-170px',
    duration: 1,
    scrollTrigger: {
      trigger: '.midtext',
      // start: 'top 90%',
      // end: 'top 80%',
      start: 'top 650',
      end: 'top 450',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 2,
      // markers: {
      //     startColor: 'blue',
      //     endColor: 'black',
      //     fontSize: '2em',
      // },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })

  gsap.to('.midtext', {
    transform: 'translateX(0)',
    duration: 2,
    scrollTrigger: {
      trigger: '.midtext',
      // start: 'top 70%',
      // end: 'top 40%',
      start: 'top 550',
      end: 'top 300',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 2,
      // markers: {
      //     startColor: 'blue',
      //     endColor: 'black',
      //     fontSize: '2em',
      // },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })

  gsap.to('.midtext2', {
    transform: 'translateX(0)',
    duration: 2,
    scrollTrigger: {
      trigger: '.midtext2',
      // start: 'top 90%',
      // end: 'top 50%',
      start: 'top 550',
      end: 'top 300',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 2,
      //   markers: {
      //       startColor: 'blue',
      //       endColor: 'black',
      //       fontSize: '2em',
      //   },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })

  gsap.to('img.at_school', {
    // transform: 'translateX(0)',
    // zoom: 1,
    transform: 'scale(1)',
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: 'div.school',
      start: 'top 20%',
      end: 'top 0%',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 5,
        // markers: {
        //     startColor: 'red',
        //     endColor: 'black',
        //     fontSize: '2em',
        // },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })

  gsap.to('div.at_school', {
    // transform: 'translateX(0)',
    // zoom: 1,
    transform: 'scale(1)',
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: 'div.school',
      start: 'top 20%',
      end: 'top 0%',
      //numeric value increases smoothness
      //1 - not smooth
      //10 - very smooth
      scrub: 5,
        // markers: { 
        //     startColor: 'red',
        //     endColor: 'black',
        //     fontSize: '2em',
        // },
      //we can also pause animation
      toggleActions: 'restart none none none',
    }
  })
});
