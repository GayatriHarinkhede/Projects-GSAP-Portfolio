let a=gsap.timeline();
a.from("nav .logo,nav ul",{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})

a.from(".left-content",{
    x:-100,
    duration:0.5,
    delay:0,
    opacity:0
})
a.from(".right",{
    // x:1000,
    duration:1,
    delay:0,
    scale:0
})
// gsap.to(".E-box1",{
//     x:100,
//     duration:1,
    
// })
gsap.from(".E-box1",{
    x:-200,
    duration:1,
    opacity:0
  
})
gsap.from(".E-box2",{
    x:200,
    duration:1,
    opacity:0
  
})
