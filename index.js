function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
init()


  var cur = document.querySelector(".cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",(dets)=>{
gsap.to(cur,{
  left:dets.x+20,
  top:dets.y+20
})
})


function animation(){
var tl = gsap.timeline({
scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top 20%",
    end:"top 0",scrub:3,
}
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -110%",
        end:"top -122%",scrub:3
    }
})
var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      start:"top -370%",
      end:"top -375%",scrub:3
  }
})
tl.to("#page1 .digital",{
    x:-100,
},"anime")
tl.to("#page1 .exper",{
    x:100,
},"anime")
.to("#page1 video",{
    width:"90%"
},"anime")
tl2.to("#main",{
    backgroundColor:"white"
})
tl3.to("#main",{
  backgroundColor:"black"
})
} 
animation()

function videoEffect(){
  let video = document.querySelector(".page_video")
 
  video.addEventListener("mouseenter",()=>{
  cur.style.width = "100px"
  cur.style.height = "30px"
  cur.style.borderRadius = "30px"
  cur.style.backgroundColor = "white"
  cur.innerHTML = "Sound On"
  })
  video.addEventListener("mouseleave",()=>{
    cur.style.width = "30px"
    cur.style.height = "30px"
    cur.style.borderRadius = "50%"
    cur.style.backgroundColor = "pink"
  cur.innerHTML = ""
    })
}
videoEffect()

function testimonials(){
let boxes = document.querySelectorAll(".box")
boxes.forEach((elem)=>{
elem.addEventListener("mousemove",()=>{
  let att = elem.getAttribute("data-image")
  cur.style.width = "300px"
  cur.style.height = "250px"
  cur.style.borderRadius = "0"
  cur.style.backgroundImage = `url(${att})`
})
elem.addEventListener("mouseleave",()=>{
  cur.style.width = "30px"
  cur.style.height = "30px"
  cur.style.borderRadius = "50%"
  cur.style.backgroundImage ="none"
  cur.style.backgroundColor = "pink"
})

})
}
testimonials()

function getinTouch(){
let touch = document.querySelector(".touch")
touch.addEventListener("mouseenter",()=>{
  cur.style.width = "100px"
  cur.style.height = "100px"
  cur.style.backgroundColor = "grey"

  })
  touch.addEventListener("mouseleave",()=>{
    cur.style.width = "30px"
    cur.style.height = "30px"
    cur.style.borderRadius = "50%"
    cur.style.backgroundColor = "pink"
  cur.innerHTML = ""
    })
}
getinTouch()
