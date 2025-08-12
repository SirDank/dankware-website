/**
 * Common JavaScript functionality for Dankware site
 * Author: SirDank
 * Version: 1.0
 */

$(document).ready(function() {
    // Navbar auto-hide functionality
    let lastScrollTop = 0;
    let navbarVisible = true;
    const navbar = $('.navbar');
    
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down and past threshold
            if (navbarVisible) {
                navbar.removeClass('navbar-show').addClass('navbar-hide');
                navbarVisible = false;
            }
        } else if (scrollTop < lastScrollTop || scrollTop <= 50) {
            // Scrolling up or near top
            if (!navbarVisible) {
                navbar.removeClass('navbar-hide').addClass('navbar-show');
                navbarVisible = true;
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Handle preloader fade-out
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById("btn-back-to-top");
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        // Scroll to top when clicked
        backToTopButton.addEventListener("click", function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }
});
