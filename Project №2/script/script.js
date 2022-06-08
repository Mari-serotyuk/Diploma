$('.menu > div').on('click', function(){
    $(this).next('.click-info').slideToggle(300);
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
})

$('#projects').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#last-projects').offset().top}, 500);
})

$('.projects-gallery').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 1090,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            }
        }
    ]
});

$('.carousel').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    dots: true,
});

