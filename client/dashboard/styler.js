


window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const spacer = document.createElement('div');

    // Get the computed height of navbar
    const navbarHeight = navbar.offsetHeight;

    // Apply it as spacer height
    spacer.style.height = navbarHeight + 'px';

    // Insert spacer after the navbar
    navbar.insertAdjacentElement('afterend', spacer);

});


function typewrite(id,text){
    var iterationOFTEXT = 0;    
    var txt = text; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    while (iterationOFTEXT < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(iterationOFTEXT);
      iterationOFTEXT++;
      setTimeout(typewrite, speed);
    } 
}
