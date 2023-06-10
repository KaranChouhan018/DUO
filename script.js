gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.to( 'video' ,{
    scrollTrigger : {
        trigger:".div2",
        start:"top top",
        end:".work",
        scrub : 2,
        pin: ".div2"
    },
    width: "100%",
    ease: "Expo.easeInout"
})
gsap.from( '.img-wrapper:nth-child(1),.img-wrapper:nth-child(3)' ,{
  scrollTrigger : {
      scroller : 'body',
      trigger:".work .b8",
      start:"top top",
      end: " top -10%",
      scrub : 2,
  },
  opacity:0,
  x:200,
  stagger:1,
  ease: "Expo.easeInout"
})
gsap.from( '.img-wrapper:nth-child(2),.img-wrapper:nth-child(4)' ,{
  scrollTrigger : {
      scroller : 'body',
      trigger:".work .b8",
      start:"top top",
      end: " top -10%",
      scrub : 2,
  },
  opacity:0,
  x:-200,
  stagger:1,
  ease: "Expo.easeInout"
})
gsap.fromTo('.work .b8 ',{
  opacity:0,
  x:-200,
},{
  opacity:1,
  x:0,
  duration:1,
  scrollTrigger:".work",
  start:"top top",
  scroller:".work"
})
gsap.fromTo('.btn__circle ',{
    opacity:0,
    x:200,
},{
    opacity:1,
    x:0,
    duration:1,
    start:"top top",
    end:"top -10%",
    scrollTrigger:".row"
})

gsap.fromTo('.b6 .b9',{
  opacity:0,
  x:-200,
},{
  opacity:1,
  x:0,
  duration:1,
  start:"top top",
  end:"top -10%",
  scrollTrigger:".row"
})


gsap.to("#ca", {
    scrollTrigger: {
      scroller: "body",
      trigger: ".hover",
      start: "top 65%",
      end: "#below",
      scrub: 1
    },
    left: "-40%"
  })

  gsap.fromTo('#right ',{
    opacity:0,
    x:200,
    markers:true
},{
    opacity:1,
    x:0,
    duration:.5,
    start:"top 65%",
    end:"top -10%",
    scrollTrigger:".hover"
})

gsap.fromTo('#left ',{
  opacity:0,
  x:-200,
},{
  opacity:1,
  x:0,
  duration:.5,
  start:"top 65%",
  scrollTrigger:".hover",
  markers:true
})
  
gsap.from('.navbar ' , {opacity : 0 , duration: 2 , y : -50})
gsap.from('.b1', { opacity: 0 , duration: 2 , x: 100 , delay: 1.2} )
gsap.from('.b2', { opacity: 0 , duration: 2 , x: -50 , delay:1.4 } )
gsap.from('.div2 ' , {opacity : 0 , duration: 2 , y : -50 , delay: 1.6} )