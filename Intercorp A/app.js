let menu = document.querySelector('#menu-bars');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
}

window.onscroll = () => {
  
    menu.classList.remove('fa-times');
    navigation.classList.remove('active');

}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}




document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");

    let currentIndex = 0;

    function sliderNav(manual) {
        btns.forEach((btn) => btn.classList.remove("active"));
        slides.forEach((slide) => slide.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
    }

    function autoSlide() {
        const nextIndex = (currentIndex + 1) % btns.length;
        sliderNav(nextIndex);
        currentIndex = nextIndex;
    }

    const slideInterval = setInterval(autoSlide, 5000); 

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    btns.forEach(btn => btn.addEventListener('click', stopAutoSlide));
    slides.forEach(slide => slide.addEventListener('touchstart', stopAutoSlide));
    slides.forEach(slide => slide.addEventListener('mousedown', stopAutoSlide));
});


    function initMap() {
      var center = { lat: 9.0765, lng: 7.3985};

      var map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 8
      });

      var marker = new google.maps.Marker({
        position: center,
        map: map,
      })
    }


    $(document).ready(function(){
        $(".thirdRow").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });