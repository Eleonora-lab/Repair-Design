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
$(document).ready(function(){
    var modal=$(".modal"),
        modalBtn=$("[data-toggle=modal]"),
        closeBtn=$(".modal__close"),
        scrollBtn = $(".scrollBtn");

    modalBtn.on("click" ,function(){
        modal.addClass("modal--visible");
    });
    closeBtn.on("click",function(){
        modal.removeClass("modal--visible");
    });
    modal.on("click",function(){
        modal.removeClass("modal--visible");
    });
    scrollBtn.on("click",function(){
        $("html, body").animate({ scrollTop: "0" });
    })


});
