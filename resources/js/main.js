// Owl Carousel


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       autoplay: true,
       autoplayhoverpause: true,
       autoplaytimeout: 100,
       items: 3,
       center:true,
        responsiveClass:true,
       margin:25,
       nav: true,
       navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
       loop: true,
       responsive:{
          0:{
             items:1,
             dots:true,
             nav:false
          },
          480:{
             items:1,
             dots:true,
             nav: false,
          },
          768:{
             items:3,
             dots:true,
             nav: false,
          },
         1000:{
            items:3,
            dots:false
         }   
       }
    });
 });
// When Scroll active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//my tab js//
const analogTab = document.querySelector('.analog-tab');
const tabNav = document.querySelectorAll('.tri');
const analogContents = document.querySelectorAll('.analog-content')
const indicator = document.querySelector('.indicator');


tabNav.forEach((nav)=>{
    nav.addEventListener('click',(e)=>{
       toggleAnalogNav(e)
       toggleAnalogContent(e)
    })
});

const toggleAnalogNav = (e)=>{
    tabNav.forEach((nav)=>{
        nav.classList.remove('ac')
    })

   
    e.target.classList.add('ac')
}



const toggleAnalogContent = (e) =>{
    analogContents.forEach((analogContent)=>{
        analogContent.classList.remove('ac');
    })

    const selector = e.target.getAttribute('data-target');
    const content = analogTab.querySelector(selector);
    content.classList.add('ac');
}


//my tab js end

// Button
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};