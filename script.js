// This is js file

// Get the button up arrow
let homeButton = document.getElementById("backToHomeBtn");
let chat = document.getElementById("chat");

// Check if the current page is the home page
let isHomePage = window.location.pathname === '/' || window.location.pathname === '/';

// Show the button only if it's not the home page
if (!isHomePage) {
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            homeButton.style.display = "block";
            chat.style.display = "block";
            
        } else {
            homeButton.style.display = "none";
            chat.style.display = "none";
        }
    }

    // When the user clicks on the button, navigate to the home page
    homeButton.onclick = function() {
        window.location.href = '#'; // Adjust this to your home page URL if necessary
    }
}

// Fade up aos
AOS.init({
    easing: 'linear'
  });

//  Setup and start animation! 

  var typed = new Typed('#type', {
    strings: ['Developer!',' Python Full Stack Developer!','Freelancer!'],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true
  });


// script.js
// When the user clicks on the arrow, scroll to the next section
document.querySelector('.scroll-down-arrow').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

