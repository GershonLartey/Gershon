let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active')
}

// Notification
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () =>{
    bell.classList.toggle('active')
}


// Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

// Custom Scroll Bar
window.onscroll = function() {
    muFunction();
};
document.addEventListener('DOMContentLoaded'), function () {
function muFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}
    // Toggle menu active state
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.navbar a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
  }