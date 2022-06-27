$(document).ready(function() {
    $('.nav-button').click(function(data) {
        $('.nav-button').toggleClass('change');
        console.log(data)

    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position);
        if(position > 200){
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }

        if(position >800){
            $('.camera-img').addClass('fromLeft')
            $('.mission-text').addClass('fromRight')
        }else{
            $('.camera-img').removeClass('fromLeft')
            $('.mission-text').removeClass('fromRight')
        }
    })
})































