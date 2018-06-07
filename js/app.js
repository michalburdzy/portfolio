// var allProjects = $('.projects__gallery');
// var projectsSection = $('.projects');
// var contactForm = $('.form');

window.onload = function(){
    console.log('window loaded!')


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        });
    });




// console.log('js ok')

var allProjects = document.querySelectorAll('.projects__gallery');
var projectsSection = document.querySelector('.projects');
var contactForm = document.querySelector('.form');
var contactSection = document.querySelector('.contact');

// In case scroll event not working
contactSection.addEventListener("click", function(){
    contactForm.classList.add('animation-appear');
})
projectsSection.addEventListener("click", function(){
    for (var i = 0; i < allProjects.length; i++) {
        allProjects[i].classList.add('animation-appear');
        // console.log('added class to gallery item!')
    }
})


var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

window.addEventListener("scroll", function(){
    var positionY = window.pageYOffset;
    var position_projects = viewportWidth/1.2;  // Header's height = 48vw, so you need to scroll it to 1/1.65 to trigger event
    var position_contact = viewportWidth/.47;
    if(positionY > position_projects && !projectsSection.classList.contains('visible')) {
                    // projectsSection.addClass('visible');
                    // allProjects.addClass('animation-appear')
                    // console.log('go Projects!')
            projectsSection.classList.add('visible');
            for (var i = 0; i < allProjects.length; i++) {
                allProjects[i].classList.add('animation-appear');
                // console.log('added class to gallery item!')
            }
    } 
     if (positionY > position_contact && !contactForm.classList.contains('animation-appear')){
        
    contactForm.classList.add('animation-appear');
            // contactForm.addClass('animation-appear');
                                console.log('go Contact!')

    }
})

}