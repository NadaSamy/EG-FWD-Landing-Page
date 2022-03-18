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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const myNav = document.querySelector("#navbar__list");
const data = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addSections()
{
    for(const section of sections)
    {
        // get attribute of each section & create new list item
        let myAttribute = section.getAttribute("data-nav");
        let newListItem = document.createElement("li");
        // set the inner text of the new list item to "data-nav"
        newListItem.innerText = myAttribute;
        // create event to listen when the section is clicked in navbar
        newListItem.addEventListener("click",()=> {
            // smooth scroll to section when clicked
             section.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
         });
         //add class menu_link to each new list item
        newListItem.classList.add('menu__link');
        // append to document fragment
        data.appendChild(newListItem);

    }
    // append document fragment to navbar
    myNav.appendChild(data);

}

// add active class
function checkViewPort(ListItem)
{
    // get position of section
    let sectionPosition = ListItem.getBoundingClientRect();
    // return if section is in view
    return (sectionPosition.top <= 200 && sectionPosition.bottom >= 200);

}

// set section in view port to active class
function makeActiveClass()
{
    // loop over sections to add the class to the section in view port
   sections.forEach((mySection) =>
   {
       if(checkViewPort(mySection))
       {
           // section is in view therefore add active class
            mySection.classList.add("your-active-class");
       }
       else
       {
           // remove active class from all other sections
           mySection.classList.remove("your-active-class");
       }
   }
   );
   
}

//scroll to top button
const scrollToTop = document.getElementById("top_scroll");
scrollToTop.addEventListener("click", () => {
    window.scrollTo(0,0);
});


/**
 * End Helper Functions
 * 
*/

// build the nav
addSections();
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActiveClass);







