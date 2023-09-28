/* --- Navigation Links Functionality
    This script makes work the navigation menu
*/
// Scroll the window to a HTML element in the document
function scrollWindowTo(element){
    let elementTop = element.getBoundingClientRect().top;

    window.scrollBy({
        top: elementTop - 20,
        left: 0,
        behavior: 'smooth'
    });
}

// Navigation Links
const aboutLink = document.getElementById('aboutLink'),
      myProjectsLink = document.getElementById('myProjectsLink'),
      contactLink = document.getElementById('contactLink');

// Document Elements
const aboutSectionTitle = document.getElementById('aboutSectionTitle'),
      myProjectsSectionTitle = document.getElementById('myProjectsSectionTitle'),
      contactSectionTitle = document.getElementById('contactSectionTitle');      

// Event Listeners
aboutLink.addEventListener('click', () => {
    scrollWindowTo(aboutSectionTitle);
});

myProjectsLink.addEventListener('click', () => {
    scrollWindowTo(myProjectsSectionTitle);
})

contactLink.addEventListener('click', () => {
    scrollWindowTo(contactSectionTitle);
})