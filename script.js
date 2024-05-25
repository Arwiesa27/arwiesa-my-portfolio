const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// scroll-animation
const the_animation = document.querySelectorAll('.animation')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }
const animation1 = document.querySelectorAll('.animation1')
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1')
        }
            else {
                entry.target.classList.remove('scroll-animation1')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < animation1.length; i++) {
   const elements = animation1[i];

    observer.observe(elements);
  }