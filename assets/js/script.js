$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        
        console.log(scrollPosition);

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }
        else{
            header.css('box-shadow', '5px 1px 5px #edae26');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 300; // Valor original "105", porém há dessíncronização na ativação da classe
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    $("#nav_home").on('click', () =>{
        window.scrollTo(0,0)
    })
    $("#nav_about").on('click', () =>{
        window.scrollTo(0,900)
    })
    $("#nav_services").on('click', () =>{
        window.scrollTo(0,1750)
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 1500,
        distance: '20%'
    })
    ScrollReveal().reveal('#about', {
        origin: 'top',
        duration: 1500,
        distance: '20%'
    })
    ScrollReveal().reveal('.section-title', {
        origin: 'top',
        duration: 1500,
        distance: '20%'
    })
    ScrollReveal().reveal('.section-subtitle', {
        origin: 'top',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('#jobs', {
        origin: 'bottom',
        duration: 1500,
        distance: '20%'
    })

});