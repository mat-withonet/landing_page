/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sectionTag = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBuilder (){
    let navUI = '';
    // looping over all sections
    sectionTag.forEach(function (section){
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;


    });

    navigation.innerHTML = navUI;


};

navBuilder();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
function offset (section){
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
function removeActive (section){
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
function addActive (conditional, section){
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: yellow;";
    };
};

//implementating the actual function
function sectionActivation (){
    sectionTag.forEach(function (section){
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event
function scrolling (){

    const links = document.querySelectorAll('.navbar__menu a');

    links.forEach(function (link){
        link.addEventListener('click', function (){
            for (i = 0; i < sectionTag; i++) {
                sectionTag[i].addEventListener("click", sectionScroll(link));
            }
        });
    });

};

scrolling();

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


