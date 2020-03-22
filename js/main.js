/*document.addEventListener("DOMContentLoaded",function
(event){
    const modal= document.querySelector(".modal");
    const modalBtn= document.querySelectorAll("[data-toggle=modal]");
    const closeBtn= document.querySelector(".modal__close");

    const switchModal = () => {
        modal.classList.toggle("modal--visible");
    }

    modalBtn.forEach(element=>{
        element.addEventListener("click", switchModal);
    });

    closeBtn.addEventListener("click", switchModal);
});*/
$(document).ready(function () {
    var modal = $(".modal"),
        modalBtn = $("[data-toggle=modal]"),
        closeBtn = $(".modal__close"),
        scrollBtn = $(".scrollBtn");

    modalBtn.on("click", function () {
        modal.addClass("modal--visible");
    });
    closeBtn.on("click", function () {
        modal.removeClass("modal--visible");
    });
    $(window).click(function(event){
        console.log(event);
        if(event.target.id == "myModal"){
            modal.removeClass("modal--visible");
        }
    })
    // modal.on("click", function () {
    //     modal.removeClass("modal--visible");
    // });
    scrollBtn.on("click", function () {
        $("html, body").animate({ scrollTop: "0" });
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var next = $(".swiper-button-next");
    var prev = $(".swiper-button-prev");
    var bullets = $(".swiper-pagination");

    next.css("left", prev.width() + 10 + bullets.width() + 10)
    bullets.css("left", prev.width() + 10)

    new WOW().init();
    //Validation form
    $(".modal__form").validate({
        errorClass:"invalid",
        rules: {
            // simple rule, converted to {required:true}
            name: {
                required: true,
                minlength: 2
            },
            // compound rule
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: 
            {   required: "Имя обязательно",
                minlength: "имя не короче двух букв"
            },
            email: {
                required: "обязательно укажите email",
                email: "введите в формате name@domain.com"
            }
        }
    });
    //mask for phone
    $('[type=tel]').mask('+7(000) 00-00-000',{placeholder: "+7(___)__-__-___"});
});
