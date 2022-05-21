$('.busy').parallax({imageSrc: 'http://galerey-room.ru/img_2/806dac5a7bc9df2707b24b09053d91ed.jpg',
speed: 0.01
});

$('.customers-items > div').on('click', function(){
    $(this).next('p').slideToggle(300);
    $(this).toggleClass('toggleColor-title');
    $(this).parent('.customers-items').toggleClass('border-bottom__active');
})

$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})