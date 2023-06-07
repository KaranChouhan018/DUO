gsap.to( 'video', {
    scrollTrigger: {
        trigger: ".div2" ,
        start: "top top" ,
        markers:true ,
        scrub: 1.5 ,
        pin: ".div2"
    },
    width: "95%" ,
    Backgroundposition: '200px 0px' ,
    ease: "Expo.easeInOut"
})
gsap.from( '.div3 ,.b7' ,{
    scrollTrigger: {
        trigger: ".about" ,
        scroller:"body" ,
        markers:true ,
        start: "top top" ,
        scrub: 2 ,
        pin: ".about"
    },
    opacity: 0 ,
    y : -50,
    stagger:0.8
})
gsap.from('.work h1 , .img-wrapper' , {
    scrollTrigger: {
        trigger: ".work" ,
        start: "top top" ,
        markers:true ,
        scrub: 1.5 ,
        pin: ".work"
    },
    opacity:0,
    y:-50,
    stagger:1
})

gsap.from('.navbar ' , {opacity : 0 , duration: 2 , y : -50})
gsap.from('.b1', { opacity: 0 , duration: 2 , x: 100 , delay: 1.2} )
gsap.from('.b2', { opacity: 0 , duration: 2 , x: -50 , delay:1.4 } )
gsap.from('.div2 ' , {opacity : 0 , duration: 2 , y : -50 , delay: 1.6})