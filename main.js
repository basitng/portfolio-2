const tl = gsap.timeline();

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

function slickAnimation() {
  tl.from('body', {
    duration: 2,
    opacity: 0,
    y: "100vh",
    ease: "bounce",
  })
  //Nav
  /*tl.from('nav', {
    duration: 2,
    opacity: 0,
    x: '-100%'
  })*/
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
  tl2.from('.c5', {
    scrollTrigger: {
      trigger: '.c5',
      start: '-900 center',
      
    },
    duration: 1,
    delay: 1,
    opacity: 0,
    y: '10vh'
  })
}
slickAnimation();