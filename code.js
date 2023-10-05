gsap.registerPlugin(MotionPathPlugin);



var tl = gsap.timeline()


var tl2 = gsap.timeline()
  

tl.fromTo(".container img", {opacity: 0,  }, {opacity: 100, duration: 2,stagger:{
    each:0.2,
    from:"start",
    

}},)
.fromTo(".ballsize",{opacity:0},{opacity:100,duration:3,motionPath:{
    path:"M1 39.8142C90.7913 42.3226 137.496 48.879 216.258 67C326.313 35.5817 388.858 18.7393 516 3",
    align: "#ballpath",},},
    "-=2.5"
)

gsap.fromTo(".matchmain",{y:-40,opacity:0},{y:80,opacity:100,duration:1,ease:"back"},6)

tl.repeat(-1)

document.getElementById("button").onclick = ()=>{
    console.log("clicked")
    tl.pause();
    var anim = document.getElementById("anim")
    anim.style.display='none';
}




