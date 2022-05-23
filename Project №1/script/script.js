$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

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

$('.carousel-content').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});

$(window).scroll(function(){
    if($(this).scrollTop()> 500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
})

$('#stories').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#manage').offset().top}, 500)
})

$('#button').on('click', function(e){
    e.preventDefault();

    let email = $('#email').val().trin();

    if(email ==""){
        $('#error-email').text('Enter your email');
    }

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email},
        dataType: 'html',
        success: function(){
            $('#email').val('');
            $('#error-email').text('');
            $('#button').prop('disabled', false)
        }
    })
})