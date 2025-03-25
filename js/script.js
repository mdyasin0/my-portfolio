// navbar
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  

  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-100px";  
  } else {
    navbar.style.top = "0";  
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

// skill section
let skillBtn1 = document.getElementById("skill-btn1");
let skillBtn2 = document.getElementById("skill-btn2");
let skillWeb = document.getElementById("skill-web");
let skillDigital = document.getElementById("skill-digital");
 


const buttons = document.querySelectorAll('.skill-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('bg-[#0284C7]'));
      button.classList.add('bg-[#0284C7]', 'text-white');
    });
  });
  
skillBtn1.addEventListener("click",function(){
    skillWeb.classList.add("hidden");
    skillDigital.classList.remove("hidden");

});

skillBtn2.addEventListener("click",function(){
    skillWeb.classList.remove("hidden");
    skillWeb.classList.add("grid")
    skillDigital.classList.add("hidden");

});



// project



// service section
const serviceBtn = document.querySelectorAll('.service-btn');
  serviceBtn.forEach(button => {
    button.addEventListener('click', function() {
      serviceBtn.forEach(btn => btn.classList.remove('bg-[#0284C7]'));
      button.classList.add('bg-[#0284C7]', 'text-white');
    });
  });
let serviceBtn1 = document.getElementById("service-btn1");
let serviceBtn2 = document.getElementById("service-btn2");
let serviceDigital = document.getElementById("service-digital");
let serviceWeb = document.getElementById("service-web");
serviceBtn1.addEventListener("click",function(){
    serviceWeb.classList.add("hidden");
    serviceDigital.classList.remove("hidden")
})

serviceBtn2.addEventListener("click",function(){
    serviceWeb.classList.remove("hidden");
    serviceDigital.classList.add("hidden");
});

