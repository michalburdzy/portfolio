
// var allProjects = $('.projects__gallery');
// var projectsSection = $('.projects');
// var contactForm = $('.form');

window.onload = function(){
    console.log('window loaded!')

// console.log('js ok')

var allProjects = document.querySelectorAll('.projects__gallery');
var projectsSection = document.querySelector('.projects');
var contactForm = document.querySelector('.form');


var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener("scroll", function(){
    var positionY = window.pageYOffset;
    var position_projects = viewportWidth/1.65;  // Header's height = 48vw, so you need to scroll it to 1/1.65 to trigger event
    var position_contact = viewportWidth/.65;

    if(positionY > position_projects && !projectsSection.classList.contains('visible')) {
                    // projectsSection.addClass('visible');
                    // allProjects.addClass('animation-appear')
            projectsSection.classList.add('visible');
            for (var i = 0; i < allProjects.length; i++) {
                allProjects[i].classList.add('animation-appear');
                console.log('added class to gallery item!')
            }
    } else if (positionY > position_contact && !contactForm.classList.contains('visible')){
        
    contactForm.classList.add('animation-appear');
            // contactForm.addClass('animation-appear');
    }
})

}