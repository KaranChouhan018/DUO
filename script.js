gsap.to( 'video', {
    scrollTrigger: {
        trigger: ".div2" ,
        start: "top top" ,
        scrub: 1.5 ,
        pin: ".div2"
    },
    width: "95%" ,
    backgroundPosition: '200px 0px' ,
    ease: "Expo.easeInOut"
})
gsap.from( '.div3 ,.b7' ,{
    scrollTrigger: {
        trigger: ".about" ,
        scroller:"body" ,
        start: "top top" ,
        scrub: 2 ,
        pin: ".about"
    },
    opacity: 0 ,
    y : -50,
    stagger:0.8,
})
gsap.from('.work h1', {
    scrollTrigger: {
        trigger: ".work" ,
        start: "top top" ,
        scrub: 2 ,
        pin: ".work"
    },
    opacity:0,
    x:-50,
})
gsap.fromTo('.img-wrapper:nth-child(1), .img-wrapper:nth-child(3)',{
    opacity:0,
    x:300,
},{
    opacity:1,
    x:0,
    duration:1,
    delay:0.5,
    scrollTrigger:".card-container"
})
gsap.fromTo('.img-wrapper:nth-child(2), .img-wrapper:nth-child(4)',{
    opacity:0,
    x:-300,
},{
    opacity:1,
    x:0,
    duration:1,
    delay:1,
    scrollTrigger:".img-wrapper:nth-child(1)"
})
gsap.fromTo('.btn__circle',{
    opacity:0,
    x:300,
},{
    opacity:1,
    x:0,
    duration:1,
    delay:1.5,
    scrollTrigger:".row"
})


gsap.from('.navbar ' , {opacity : 0 , duration: 2 , y : -50})
gsap.from('.b1', { opacity: 0 , duration: 2 , x: 100 , delay: 1.2} )
gsap.from('.b2', { opacity: 0 , duration: 2 , x: -50 , delay:1.4 } )
gsap.from('.div2 ' , {opacity : 0 , duration: 2 , y : -50 , delay: 1.6})