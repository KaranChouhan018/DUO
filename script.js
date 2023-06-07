gsap.to( 'video', {
    scrollTrigger: {
        trigger: ".div2" ,
        start: "top top" ,
        scrub: 2 ,
        pin: ".div2"
    },
    width: "95%" ,
    ease: "Expo.easeInOut"
})
gsap.from( '.div3',  {
    scrollTrigger: {
        trigger: ".about" ,
        start: "top top" ,
        scrub: 2 ,
        pin: ".about"
    },
    opacity: 0 ,
    y : -50

})
gsap.from('.about h1' , {opacity : 0 , duration: 2 , x : -100 , delay: 2 })
gsap.from('.navbar ' , {opacity : 0 , duration: 2 , y : -50})
gsap.from('.b1', { opacity: 0 , duration: 2 , x: 100 , delay: 1.2} )
gsap.from('.b2', { opacity: 0 , duration: 2 , x: -50 , delay:1.4 } )
gsap.from('.div2 ' , {opacity : 0 , duration: 2 , y : -50 , delay: 1.6})