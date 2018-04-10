<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js" ></script>

var allProjects = document.querySelectorAll('.projects__gallery');
var projectsSection = document.querySelector('.projects');
var contactForm = document.querySelector('.form');
projectsSection.classList.Add('visible');

for (var i = 0; i < allProjects.length; i++) {
    allProjects[i].classList.add('animation-appear');
}


console.log('js ok!')


// $( document ).ready(function(){

// console.log('js ok!')

// var allProjects = $('.projects__gallery');
// var projectsSection = $('.projects');
// var contactForm = $('.form');

// var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


// $(window).on('scroll', function() {
//     var positionY = window.pageYOffset;
//     var position_projects = viewportWidth/1.65;  // Header's height = 48vw, so you need to scroll it to 1/1.65 to trigger event
//     var position_contact = viewportWidth/.75;

//     if(positionY > position_projects && !projectsSection.hasClass('visible')) {
//             projectsSection.addClass('visible');
//             allProjects.addClass('animation-appear')
//     } else if (positionY > position_contact && !contactForm.hasClass('visible')){
//         contactForm.addClass('animation-appear');
//         console.log('contact!')
//     }
// });

// })

