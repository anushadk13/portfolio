 /*--- typed js ---*/
 const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Student'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 });



/*scrolling */


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop  - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top  < offset +  height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                DocumentFragment.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};

/*=======sticky nav bar====*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
































