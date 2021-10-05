document.addEventListener('DOMContentLoaded', removeLoader);


function removeLoader(){
  const preloader = document.querySelector('.preloader');
  preloader.classList.remove('preloader');
}
function openMenu() {
  const menu = document.querySelector('.menu');
  const sidebar = document.querySelector('.sidebar');
  const close = document.querySelector('.close');

  menu.onclick = () => {
    sidebar.classList.add('active');
  }
  close.onclick = () => {
    sidebar.classList.remove('active');
  }
}
openMenu();
gsap.registerPlugin(Flip)
const tl = gsap.timeline();

function slickAnimation() {
const preloader = gsap.timeline({repeat: 50, yoyo: true})
gsap.from('.sidebar a', {
 
  duration: 1,
  y: '100vh',
  opacity: 0,
  stagger: .5
})
preloader.fromTo('.preloader div', {duration: 1, ease: "bounce", opacity: 0, y: "2vh"}, {duration: .5, y: "-3vh", opacity: 1, stagger: .6})
tl.from('.banner', {
    duration: 2,
    opacity: 0,
    y: "100vh",
    ease: "bounce",
  })
  preloader.to('.preloader p', {
    duration: .5,
    scale: 1.1,
  })
  //Nav
  tl.from('nav', {
    duration: 1,
    opacity: 0,
    x: '-100%'
  })
  //banner text
  tl.from('.caption h2, .caption p', {
    duration: 1,
    opacity: 0,
    y: "50%",
    stagger: .4
  })
  tl.from('.caption a', {
    duration: 1,
    y: '-5vh',
    opacity: 0,
    ease: "SlowMo.easeOut"
  })

  // Scroll trigger
  const tl2 = gsap.timeline(ScrollTrigger.defaults({
    scrub: true,
    toggleActions: "restart pause reverse reset ",


  }))
  tl2.to('.c2', {
    scrollTrigger: {
      trigger: '.c2',
      start: '100px bottom',
      end: '+=100',
    },
    duration: 1,
    opacity: 1,
    skewY: '9px'
  })
  tl2.from('.c3', {
    scrollTrigger: {
      trigger: '.c2',
      start: "-150px 30px",
     
    },
    duration: 1,
    y: '100%',
    opacity: 0,
  })
  tl2.from('.c4 .header', {
    scrollTrigger: {
      trigger: '.c3',
      start: "-700px bottom",
    },
    duration: 1,
    ease: "power4",
    y: "5vh",
    opacity: 0
  })
  tl2.from('.portfolio img', {
    scrollTrigger: {
      trigger: '.portfolio',
      start: "-700 bottom",
    },
    duration: .5,
    opacity: 0,
    y: 'random(-200, 200)',
    stagger: .1,
    ease: "bounce",
  })
  tl2.set('.c5', {scale: 1.5, opacity: 1})
  tl2.to('.c5', {
    scrollTrigger: {
      trigger: '.c5',
      start: '-900 center',
      
    },
    duration: 2,
    delay: 5,
    opacity: 1,
    scale: 1.0
  })
}
slickAnimation();




function handleTab(){
  const tabsParent = document.querySelectorAll('[data-parent]');
  const tabChildren = document.querySelectorAll('[data-id]');
  
  // Add listeners
  tabsParent.forEach(item => {
    item.onclick = () => {
      ;let parent = item.getAttribute('data-parent')
      tabChildren.forEach(child => {
       
        const childId = child.getAttribute('data-id');
        console.log(childId);
        if(parent == childId){
          child.classList.add('show');
        const state = Flip.getState(child);
        
        Flip.from(state, {
          duration: 0.7,
          opacity: 0,
          y: 'random(100, -100)'
        })
       
        }
        if(parent != childId){
          child.classList.remove('show')
         item.classList.remove('active');
        }
      })
    }
  });
  

}
handleTab();